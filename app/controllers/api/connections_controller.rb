class Api::ConnectionsController < ApplicationController
    before_action :require_logged_in



    def create 
        @connection = Connection.new(connection_params)
        if @connection.save
            render :show 
        else
            render json: @connection.errors.full_messages, status: 422
    end 

    def update 
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


 