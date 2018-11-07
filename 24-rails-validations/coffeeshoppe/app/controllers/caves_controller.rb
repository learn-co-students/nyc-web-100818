class CavesController < ApplicationController
  before_action :find_cave, only: [:show, :edit, :update, :destroy]

  def index
    @coffees = Cafe.all
  end

  def show
    #code
  end

  def new
    @coffee = Cafe.new
    render "new"
  end

  def create

    @coffee = Cafe.create(coffee_params)
    #if saved then redirect to show
      if @coffee.valid?
        redirect_to @coffee
      else

        #otherwise does not save to database
        #redirect to new page to try again
        flash[:errors] = @coffee.errors.full_messages
        redirect_to new_cafe_path
      end

  end

  def edit
    #code
  end

  def update
    # @coffee.update(coffee_params)
  end

  def destroy
    #code
  end

  private

  def find_cave
      @coffee = Cafe.find_by(id: params[:id])
  end

  def coffee_params
    params.require(:cafe).permit(:name, :price, :caffy)
  end


end
