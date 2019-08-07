class Api::EducationItemsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]


    def index 
        @education_items = User.find(params[:userId]).education_items
    end 
    
    def show
        @education_item = EducationItem.find(params[:id])  
    end


    def create 
        @education_item = current_user.education_items.new(degree: params[:educationItem][:degree], 
                                                             field:  params[:educationItem][:field], 
                                                             start_yr: params[:educationItem][:start_yr], 
                                                             end_yr: params[:educationItem][:end_yr], 
                                                             activities:  params[:educationItem][:activities])

        company = Company.find_or_create_by(name: params[:educationItem][:school]);
        @education_item[:school_id] = company.id; 

        if @education_item.save 
            render :show 
        else
            render json: @education_item.errors.full_messages, status: 422
        end 
    end


    def update 

        @education_item = EducationItem.find(params[:id]) 

        

        #update , create company, save 
        if @education_item.update(degree: params[:educationItem][:degree], 
            field:  params[:educationItem][:field], 
            start_yr: params[:educationItem][:start_yr], 
            end_yr: params[:educationItem][:end_yr], 
            activities:  params[:educationItem][:activities])

            company = Company.find_or_create_by(name: params[:educationItem][:school]);
            @education_item[:school_id] = company.id; 
            @education_item.save
            render :show 

        else 
            render json: @education_item.errors.full_messages, status: 422
        end 
    end 


    def destroy 
        @education_item = EducationItem.find(params[:id]) 
        @education_item.destroy 
        render :show 
    end 


    private 
    def education_items_params 
        params.require(:educationItem).permit(:school, :degree, :field, :start_yr, :end_yr, :activities)
    end 

end
