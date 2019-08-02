class Api::CommentsController < ApplicationController
  before_action :require_logged_in
 

    def create 
        @comment = ExperienceItem.new(comment_params)
        if @comment.save 
            render 'api/users/show'
            # render :show, which one should I be rendering? 
        else
            render json: @comment.errors, status: 422
        end 
    end 

    def edit 
    end 

    def update 
    end 

    def destroy 
    end 

    private
    def comment_params
      params.require(:comment).permit(:user_id, :post_id, :body)
    end
end

#permit just body and manually get user_id and post_id? 
