Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :edit, :show]  
    resource :session, only: [:create, :destroy]
    resource :educations, only: [:create, :edit, :destroy]
    resource :experiences, only: [:create, :edit, :destroy]
    resource :skills, only: [:create, :edit, :destroy]
    resource :posts, only: [:index, :create, :edit, :destroy] do 
      resource :comments, only: [:create, :edit, :destroy]
    end
    resource :endorsements, only: [:create, :destroy]
    resource :connections, only: [:create, :edit, :destroy]
    resource :interests, only: [:create, :destroy]
    #companies 
  end 

  
end