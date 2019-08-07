class Api::PostsController < ApplicationController

    def index 
      @posts = Post.all
      render :index
    end 


    def create 
      @post = Post.new(post_params)
      # @post.author = 
      if @post.save 
        render :show
      else 
        render json: @post.errors.full_messages, status: 422
      end 
    end 


    def update 
    end 

    
    def destroy 
      @post = post.find(params[:id]) 
      @post.destroy 
      render :show 
    end 

    private
    def post_params
      params.require(:post).permit(:author_id, :author_type, :body)
    end

end
