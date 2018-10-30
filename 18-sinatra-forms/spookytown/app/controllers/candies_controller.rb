class CandiesController < ApplicationController

  # Index
  # Show me all Da Candieszzz$$$
  get '/candies' do
    #model
    @candies = Candy.all
    #view
    erb :"candy/index"
  end
  # New
  get '/candies/new' do
    #model candy does not exist
    #response // view
    erb :"candy/new"
  end

  # Show
  get '/candies/:id' do
    #model
    @candy = Candy.find(params[:id])
    #response // view
    erb :"candy/show"
  end


  # Create
  post '/candies' do
    # model
    @candy = Candy.create(params[:candy])
    # RESPONSE // view
    redirect :"candies/#{@candy.id}"
  end

  # Edit
  get '/candies/:id/edit' do
    #model
    @candy = Candy.find(params[:id])
    #response
    erb :"candy/edit"
  end

  # Update
  patch '/candies/:id' do
    @candy = Candy.find(params[:id])
    @candy.update(params[:candy])
    redirect :"/candies/#{@candy.id}"
  end


  # DESTROY


end # end candies Controller
