Rails.application.routes.draw do
  # path/resource/url => point TO controller#method

  # get '/gratitudes', to: "gratitudes#index", as:"gratitudes"
  get '/gratitudes/:id', to:"gratitudes#show", as:"show"
  resources :gratitudes, only: [:index, :show,:new, :create]

end
