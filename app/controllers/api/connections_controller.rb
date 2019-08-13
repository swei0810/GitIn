class Api::ConnectionsController < ApplicationController
    before_action :require_logged_in

    def index 
        @connections = Connection.all 
        @sent_connections = current_user.sent_connection_requests 
        @received_connections = current_user.received_connection_requests
        #only show connections where requester/requestee id is current_user.id 
        render :index
    end 

    def create 
        #status pending 
        @connection = Connection.new(connection_params)
        if @connection.save
            render :show 
        else
            render json: @connection.errors.full_messages, status: 422
        end 
    end 

    def update 
        #status to accepted 
        @connection = Connection.find(params[:id])
        if @connection.update(connection_params)
            render :show 
        else 
            render json: @connection.errors.full_messages, status: 422 
        end 
    end 


    def destroy 
        @connection = Connection.find(params[:id])
        if @conenction 
            @connection.destroy 
            render :show 
        else 
            render json: ['No connection'], status: 404
        end  
    end 


    private 
    def connection_params 
        params.require(:connection).permit(:requester_id, :requestee_id, :status)
    end 
end


 