class Api::EducationItemsController < ApplicationController
    before_action :require_logged_in

    def show
        @education_item = ExperienceItem.find(params[:id])   #do i need routes sfor this 
    end


    def create 
        @education_item = current_user.education_items.new(education_item_params)
        if @education_item.save 
            render 'api/users/show'
            # render :show, which one should I be rendering? 
        else
            render json: @education_item.errors, status: 422
        end 
    end 

    def edit 
    end 

    def update 
    end 

    def destroy 
        @education_item = ExperienceItem.find(params[:id]) 
        @education_item.destroy 
        render :show 
    end 

    private 

    def education_items_params 
        params.require(:education_item).permit(:school)
    end 



end
