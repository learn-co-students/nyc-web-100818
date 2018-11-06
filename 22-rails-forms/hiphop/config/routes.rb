Rails.application.routes.draw do
  resources :dancers
  # delete '/dancers/:id', to: 'dancers#delete'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
