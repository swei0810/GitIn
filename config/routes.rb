Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update, :show]  
    resource :session, only: [:create, :destroy]
    resources :education_items, only: [:index, :show, :create, :destroy, :update]
    resources :experience_items, only: [:index, :show, :create, :destroy, :update]
    resources :skills, only: [:index, :show, :create, :destroy] do 
          resources :endorsements, only: [:index, :show, :create, :destroy, :update] #fix this? 
    end 
    resources :posts, only: [:index, :show, :create, :destroy, :update] do 
      resources :comments, only: [:index, :show, :create, :destroy, :update]
    end
    resources :companies, only: [:index, :show]
    # resources :endorsements, only: [:index, :show, :create, :destroy, :update] #fix this? 
    resources :connections, only: [:index, :show, :create, :update, :destroy]
    # resources :interests, only: [:create, :destroy]
    #companies 
  end 

  
end