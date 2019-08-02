class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
          login!(@user)
          # render "api/users/show"
          render :show 
        else
          render json: @user.errors.full_messages[0], status: 422
        end
    end


    def edit 
    end 

    
    def update 
    end 
    
  
    def show 
      @user = User.find(params[:id])
      render :show
    end 

    private
  
    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
  