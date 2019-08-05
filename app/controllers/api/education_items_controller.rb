class Api::EducationItemsController < ApplicationController
    before_action :require_logged_in


    def index 
        @education_items = EducationItem.all
    end 
    
    def show
        @education_item = EducationItem.find(params[:id])  
    end


    def create 
        @education_item = current_user.education_items.new(education_item_params)
        if @education_item.save 
            render :show 
        else
            render json: @education_item.errors, status: 422
        end 
    end


    def update 
        @education_item = EducationItem.find(params[:id]) 
        if @education_item.update(education_item.params)
            render :show 
        else 
            render json: @education_item.errors, status: 422
        end 
    end 


    def destroy 
        @education_item = EducationItem.find(params[:id]) 
        @education_item.destroy 
        render :show 
    end 


    private 
    def education_items_params 
        params.require(:education_item).permit(:school, :degree, :field, :start_yr, :end_yr, :activities)
    end 

end
