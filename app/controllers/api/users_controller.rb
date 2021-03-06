class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        # if !@user.photo.attached? 
        #     @user.photo = window.default_prof
        # end 
        if @user.save
          login!(@user)
          render :show 
        else
          render json: @user.errors.full_messages[0], status: 422
        end
    end

    def index 
      @users = User.all 
      render :index #do I need this 
    end 



    def update   #Do I need this 
      @user = User.find(params[:id])
        if @user.update(user_params)
          render :show 
        else 
          render json: @user.errors, status: 422
        end 

    end 
    
  
    def show 

      @user = User.find(params[:id])
      render :show
    end 

    private
  
    def user_params
      params.require(:user).permit(:email, :password, :first_name, :last_name, :location, :summary, :github_url, :headline)  
    end
  end
  