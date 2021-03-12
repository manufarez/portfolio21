Rails.application.routes.draw do
  devise_for :users
  resources :projects, except: :show
    get ':id', to:'projects#show', as: 'project_slug'
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
