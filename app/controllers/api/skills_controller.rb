class Api::SkillsController < ApplicationController
    before_action :require_logged_in


    def show
        @skill = Skill.find(params[:id])   #do i need routes sfor this 
    end

    def create 
        @skill = current_user.skills.new(skill_params)
        if @skill.save 
            render 'api/users/show'
        else
            render json: @skill.errors, status: 422
        end 
    end 

    def edit 
    end 

    def update 
    end 

    def destroy 
        @skill = skill.find(params[:id]) 
        @skill.destroy 
        render :show 
    end 

    private 
    def skill_params 
        params.require(:skill).permit(:user_id, :title)
    end 

end  
