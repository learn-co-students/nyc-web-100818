class BooksController < ApplicationController
  # Index

  get '/books' do
    @books = Book.all
    erb :"books/index"
  end

  # New
  get "/books/new" do
    #model
    @authors = Author.all
    erb :"books/new"
  end


  # Show


  # Create
  post "/books" do
    @book = Book.create(params[:book])
    redirect "/books"
  end


  # Edit


  # Update


  # Delete

end
