Rails.application.routes.draw do

  namespace :api do
    get 'photos/new'
  end

  namespace :api do
    get 'photos/create'
  end

  namespace :api do
    get 'photos/destroy'
  end

  namespace :api do
    get 'photos/show'
  end

  namespace :api do
    get 'photos/edit'
  end

  namespace :api do
    get 'photos/update'
  end

  namespace :api do
    get 'photos/index'
  end

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
end
