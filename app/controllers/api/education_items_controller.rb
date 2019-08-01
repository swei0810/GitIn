class Api::EducationItemsController < ApplicationController
    def create 
        @education_item = ExperienceItem.new(education_item_params)
        if @education_item.save 
            render 'api/users/show'
        else
            render json: @education_item.errors, status: 422
        end 
    end 

    def edit 
    end 

    def update 
    end 

    def destroy 
    end 

    private 

    def education_items_params 
        params.require(:education_item).permit(:user_id, :school)
    end 



end
