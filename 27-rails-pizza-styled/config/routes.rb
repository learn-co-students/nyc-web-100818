Rails.application.routes.draw do
  resources :pizzas
  get '/', to: "welcome#home"
end
