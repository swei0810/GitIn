class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
          params[:user][:email],
          params[:user][:password]
        )
        
        # @user2 = User.find_by(params[:user][:email])
        if @user
          login!(@user)
          render "api/users/show"
        elsif User.find_by(email: params[:user][:email])
          render json: "Hmm, that's not the right password.", status: 401 
        else
          render json: "Hmm, we don't recognize that email. Please try again.", status: 401
        end
      end
    
      def destroy
        @user = current_user
        if @user
          logout!
          render "api/users/show"
        else
          render json: "No one is currently signed in", status: 404
        end
      end


end 
