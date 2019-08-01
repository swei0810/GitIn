class Api::SkillsController < ApplicationController
    def create 
        @skill = ExperienceItem.new(skill_params)
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
    end 

    private 
    def skill_params 
        params.require(:skill).permit(:user_id, :title)
    end 

end  
