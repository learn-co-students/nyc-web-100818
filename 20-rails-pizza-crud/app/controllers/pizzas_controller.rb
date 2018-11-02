class PizzasController < ApplicationController
  before_action :find_pizza, only: [:show, :edit, :update, :destroy]

  def index
    #model
    @pizzas = Pizza.all

    #response
    # the render is implicit, but we wrote it explicitly for practice
    render :index
  end

  def show
    #request
    #"/pizzas/2"

    #model
    @pizza = Pizza.find_by(id: params[:id])

    #response
    render :show
  end

  def new
    #response
    render :new
  end

  def create
    #model
    @pizza = Pizza.create(name: params[:pizza][:name], price: params[:pizza][:price], size: params[:pizza][:size], topping: params[:pizza][:topping])

    #response
    redirect_to @pizza #"/pizzas/4"
    # redirect_to pizzas_path(@pizza.id)
  end

  def edit
    #model
    @pizza = Pizza.find_by(id: params[:id])

    #response
    render :edit
  end

  def update
    #model
    @pizza = Pizza.find_by(id: params[:id])
    @pizza.update(name: params[:pizza][:name], size: params[:pizza][:size])
    @pizza.save

    #response
    redirect_to @pizza
  end

  def destroy
    #model
    @pizza = Pizza.find_by(id: params[:id])
    @pizza.destroy

    #response
    redirect_to pizzas_path
  end

  private

    def find_pizza
      @pizza = Pizza.find_by(id: params[:id])
    end
end
