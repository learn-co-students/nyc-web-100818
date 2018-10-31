class AuthorsController < ApplicationController


    # MDN Docs

  # Index
  get '/authors' do
    # model
    @authors = Author.all
    # response // view // HTML // erb
    erb :"authors/index"
  end

  # New
get '/authors/new' do
  #model
  #response
  erb :"authors/new"
end

  # Show
  get "/authors/:id" do
    #model
    @author = Author.find(params[:id])
    # response
    erb :"authors/show"
  end

  # Create

  post '/authors' do
    #model
    @author = Author.create(params)
    #response
    redirect :"/authors/#{@author.id}"
  end

  # Edit
  get '/authors/:id/edit' do
    #model
    @author = Author.find(params[:id])
    #response
    erb :"authors/edit"

  end

  # Update
  patch "/authors/:id" do
    # binding.pry
    #model
    @author = Author.find(params[:id])
    @author.update(params[:author])
    #response
    redirect :"/authors/#{@author.id}"
  end


  # Delete


end
