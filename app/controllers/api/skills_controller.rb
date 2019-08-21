class Api::SkillsController < ApplicationController
    before_action :require_logged_in

    def index 
        @skills = User.find(params[:userId]).skills 
    end 


    def show
        @skill = Skill.find(params[:id])   
    end

    def create 
        @skill = current_user.skills.new(skill_params)
        if @skill.save 
            render :show
        else
            render json: @skill.errors, status: 422
        end 
    end 

    # def update 
    #     @skill = Skill.find(params[:id]) 
    #     if @skill.update(skill_params)
    #         render :show 
    #     else 
    #         render json: @skill.errors, status: 422
    #     end 
    # end 

    def destroy 
        @skill = Skill.find(params[:id]) 
        @skill.destroy 
        render :show 
    end 

    private 
    def skill_params 
        params.require(:skill).permit(:title)
    end 

end  
