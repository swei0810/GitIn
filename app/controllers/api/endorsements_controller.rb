class Api::EndorsementsController < ApplicationController
    #things to conside -> skill_id should be unique for each person? 

    def index 
        @endorsements = Endorsement.all 
        render :index
    end 

    # def show 

    # end 

    def create 
        @endorsement = Endorsement.new(endorsement_params)
        @endorsement.user_id = current_user.id 
        if @endorsement.save 
            render :show 
        else 
            render json: @endorsement.errors, status: 422
        end 
    end 


    def destroy 
        # @endorsement = skill's endorsement 
        # @endorsement.destroy 
        # render :show
    end 

    private 
    def endorsement_params 
        params.require(:endorsement).permit(:skill_id)
    end 


end
