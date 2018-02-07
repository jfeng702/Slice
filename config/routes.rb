Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :albums, only: [:create, :update, :index, :destroy, :show]
    resource :session, only: [:create, :destroy]
    resources :photos do
      resources :comments, only: [:create, :index]
    end
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
end
