class Api::ConnectionsController < ApplicationController
    before_action :require_logged_in

    def index 
        @requested_connections = User.find(params[:userId]).requested_connections
        @received_connections = User.find(params[:userId]).received_connections
        render :index 
    end 

    def show 
        @connection = Connection.find(params[:id])
    end 

    # def create 
    #     @connection = Connection.new(connection_params)
    #     @connection[:status] = 'pending'
    #     if @connection.save
    #         render :show 
    #     else
    #         render json: @connection.errors.full_messages, status: 422
    #     end 
    # end 

    # def update 
    #     @connection = Connection.find(params[:id])
    #     @connection[:status] = 'accepted'
    #     render :show 
    # end 

    # def destroy 
    #     @connection = Connection.find(params[id])
    #     @connection.destroy 
    #     render :show 
    # end 


    private 
    def connections_params 
        params.require(:connections).permit(:requester_id, :requestee_id)
    end 
end
