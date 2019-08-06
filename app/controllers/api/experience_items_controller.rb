class Api::ExperienceItemsController < ApplicationController
    before_action :require_logged_in

    def index 
        @experience_items = ExperienceItem.all 
    end 

    def show
        @experience_item = ExperienceItem.find(params[:id]) 
    end


    def create 
        # @experience_item = current_user.experience_items.new(experience_item_params)
        @experience_item = current_user.experience_items.new(title: params[:experienceItem][:title], 
                                                             location:  params[:experienceItem][:location], 
                                                             start_date: params[:experienceItem][:start_date], 
                                                             end_date: params[:experienceItem][:end_date], 
                                                             description:  params[:experienceItem][:description])
        #dont need experience_item_params
        debugger
        company = Company.find_or_create_by(name: params[:experienceItem][:company]);
        debugger
        @experience_item[:company_id] = company.id; 
        debugger
        if @experience_item.save 
            render :show 
        else
            render json: @experience_item.errors, status: 422
        end 
    end 


    def update 
        @experience_item = ExperienceItem.find(params[:id]) 
        if @experience_item.update(experience_item_params)
            render :show 
        else 
            render json: @experience_item.errors, status: 422
        end 
    end 


    def destroy 
        @experience_item = experience_item.find(params[:id]) 
        @experience_item.destroy 
        render :show 
    end 


    private
    def experience_item_params
        params.require(:experienceItem).permit(:title, :company, :location, :start_date, :end_date, :description)
    end
end
