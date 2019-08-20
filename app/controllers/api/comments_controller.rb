class Api::CommentsController < ApplicationController
  before_action :require_logged_in
 
    def index 
      @comments = Comment.all 
      render :index 

    end 

    def create 
      
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id 
        if @comment.save 
            render :show
        else
            render json: @comment.errors, status: 422
        end 
    end 

    def update 
      @comment = current_user.comments.find(params[:id])
      if @comment.update(comment_params)
        render :show 
      else 
        render json: @comment.errors.full_messages, status: 422
      end 
    end 

    def destroy 
      @comment = current_user.comments.find(params[:id])
      if @comment.destroy 
        render :show
      else 
        render json: @comment.errors.full_messages, status: 422
      end 
    end 

    private
    def comment_params
      params.require(:comment).permit(:body, :post_id)
    end
end




