class GratitudesController < ApplicationController

  # Index
  # get '/gratitudes'
  def index
    # model
    @gratitudes = Gratitude.all
    #response // view
    render :index
    #code
  end

  #show
  # get '/gratitudes/:id'
  def show
    #model
    @gratitude = Gratitude.find(params[:id])
    # response
    render :show
  end

  #new

  #create

  #edit

  #update

  #delete

end
