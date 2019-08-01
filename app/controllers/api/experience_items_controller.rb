class Api::ExperienceItemsController < ApplicationController
    def create 
        @experience_item = ExperienceItem.new(experience_item_params)
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
    end 


    private
  
    def experience_item_params
      params.require(:experience_item).permit(:user_id, :title, :company, :location, :start_date)
    end
end
