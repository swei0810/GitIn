#bonus feature 

class Api::CompaniesController < ApplicationController 
    def index

        @companies = Company.all
        render :index 
    end 

    def show 

        @company = Company.find(params[:id])
        render :show
    end 
end
