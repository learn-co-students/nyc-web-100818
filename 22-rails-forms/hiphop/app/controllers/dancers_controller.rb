class DancersController < ApplicationController
  before_action :find_dancer, only: [:show, :edit, :update, :destroy]

  def index
    # model
    @dancers = Dancer.all
    # response
    render 'index'
  end

  def new
    # model
    @dancer = Dancer.new
    #response
    render 'new'
  end

  def create
    byebug
    @dancer = Dancer.create(dancer_params)
    redirect_to @dancer
  end

  def show
    # model
    # find_dancer
    #response
    render 'show'
  end

  def edit
    #model
    # find_dancer
    #response
  end

  def update
    # find_dancer
    @dancer.update(dancer_params)
  end

  def destroy
    # find_dancer
    #@dancer = Dancer.find_by(id: params[:id])
    @dancer.destroy
    redirect_to dancers_path
  end

  private

    # internet is scary, need to whitelist specific attributes because HAXORZZZ 
    def dancer_params
      params.require(:dancer).permit(:dope, :name, :height)
    end

    def find_dancer
      @dancer = Dancer.find_by(id: params[:id])
    end

end
