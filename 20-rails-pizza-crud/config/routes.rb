Rails.application.routes.draw do
  # # CRUD

  # # Read
  # # pizzas#index
  # get '/pizzas', to: "pizzas#index", as: "pizzas" #/pizzas ... pizzas_path

  # # Create
  # # pizzas#new
  # get '/pizzas/new', to: "pizzas#new", as: "new_pizza" #/pizzas/new ... new_pizza_path
  # # pizzas#create
  # post '/pizzas', to: "pizzas#create"

  # # Read
  # # pizzas#show
  # get '/pizzas/:id', to: "pizzas#show", as: "pizza" #/pizza/1 ... pizza_path

  # # Update
  # # pizzas#edit
  # get '/pizzas/:id/edit', to: "pizzas#edit", as: "edit_pizza"
  # # pizzas#update
  # patch '/pizzas/:id', to: "pizzas#update"
  
  # # Destroy
  # # pizzas#destroy
  # delete '/pizzas/:id', to: "pizzas#destroy"

  get '/', to: "welcome#home"
  resources :pizzas
end
