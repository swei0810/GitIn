class Api::InterestsController < ApplicationController

    before_action :require_logged_in

    def show
        @interest = Interest.find(params[:id])   #do i need routes sfor this 
    end

    def create 
        @interest = current_user.interests.new(interest_params)
        if @interest.save
          render :show 
        else
          render json: @interest.errors.full_messages[0], status: 422
        end
    end 

    def destroy 
        @interest = interest.find(params[:id]) 
        @interest.destroy 
        render :show 
    end 

    private
  
    def interest_params
        params.require(:interest).permit(:company_id)  #Do I need this 
    end
end
