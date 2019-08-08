class Api::PostsController < ApplicationController

    def index 
      debugger
      @posts = Post.all
      render :index
    end 


    def create 
      debugger
      @post = Post.new(post_params)
      if params[:author_type] == 'company'
        debugger
        @post.author = Company.find(params[:author_id])
      elsif params[:author_type] == 'user'
        @post.author = User.find(params[:author_id])
      end 

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
