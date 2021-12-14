Rails.application.routes.draw do
  devise_for :users

  match "/404", to: "errors#not_found", via: :all
  match "/500", to: "errors#internal_server_error", via: :all
  resources :projects, except: :show
    get ':id', to:'projects#show', as: 'project_slug'
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
