#bonus feature 

class Api::CompaniesController < ApplicationController 
    def index
        debugger

        @companies = Company.all
        render :index 
    end 

    def show 
        debugger

        @company = Company.find(params[:id])
        render :show
    end 
end
