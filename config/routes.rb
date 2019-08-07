Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update, :show]  
    resource :session, only: [:create, :destroy]
    resources :education_items, only: [:index, :show, :create, :destroy, :update]
    resources :experience_items, only: [:index, :show, :create, :destroy, :update]
    # resources :skills, only: [:show, :create, :destroy, ]
    resources :posts, only: [:index, :create, :destroy, :update] do 
      resources :comments, only: [:create, :destroy, :update]
    end
    # resources :endorsements, only: [:create, :destroy]
    # resources :connections, only: [:create, :destroy]
    # resources :interests, only: [:create, :destroy]
    #companies 
  end 

  
end