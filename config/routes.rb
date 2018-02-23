Rails.application.routes.draw do

  namespace :api do
    get 'shows/index'
  end

  namespace :api do
    get 'shows/show'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :venues, only: [:index, :show]
    resources :shows, only: [:index, :show]
  end

  root "static_pages#root"
end
