class Api::PostsController < ApplicationController

    def index 
      @posts = Post.all
      render :index
    end 

    def show 
      @post = post.find(params[:id]) 
      render :show

    end 


    def create 
      @post = Post.new(post_params)
      @post.author_type = 'User'
      @post.author_id = current_user.id
      # if params[:author_type] == 'company'
      #   @post.author = Company.find(params[:author_id])
      # elsif params[:author_type] == 'user'
      #   @post.author = User.find(params[:author_id])
      # end 

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
      # params.require(:post).permit(:author_id, :author_type, :body)
      params.require(:post).permit(:body, :photo)

    end

end
