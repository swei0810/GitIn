Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :edit, :show]  
    resource :session, only: [:create, :destroy]
    resources :education_items, only: [:show, :create, :destroy, :update]
    resources :experience_items, only: [:show, :create, :destroy, :update]
    # resources :skills, only: [:show, :create, :destroy, ]
    # resources :posts, only: [:index, :create, :destroy, :update] do 
    #   resources :comments, only: [:create, :destroy]
    # end
    # resources :endorsements, only: [:create, :destroy]
    # resources :connections, only: [:create, :destroy]
    # resources :interests, only: [:create, :destroy]
    #companies 
  end 

  
end