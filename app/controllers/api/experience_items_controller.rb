class Api::ExperienceItemsController < ApplicationController
    before_action :require_logged_in


    def show
        @experience_item = ExperienceItem.find(params[:id])   #do i need routes sfor this 
    end

    def create 
        @experience_item = current_user.experience_items.new(experience_item_params)
        if @experience_item.save 
            render 'api/users/show'
        else
            render json: @experience_item.errors, status: 422
        end 
    end 

    def edit 
    end 

    def update 
    end 

    def destroy 
        @experience_item = experience_item.find(params[:id]) 
        @experience_item.destroy 
        render :show 
    end 


    private
  
    def experience_item_params
        params.require(:experience_item).permit(:title, :company, :location, :start_date)
    end
end
