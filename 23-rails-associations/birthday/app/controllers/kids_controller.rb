class KidsController < ApplicationController
  before_action :find_kid, only: [:edit, :update, :destroy, :show]

  def index
    @kids = Kid.all
  end

  def show
    @kid = Kid.find(params[:id])
  end

  def new
    @kid = Kid.new
    @parties = Party.all
  end

  def create
    byebug
    @kid = Kid.create(kid_params)
    redirect_to kid_path(@kid)

  end

  def edit

  end

  def update
    @kid.update(kid_params)
    redirect_to @kid
    #code
  end

  def destroy
    @kid.destroy
    redirect_to kids_path
  end

private

  def kid_params
    params.require(:kid).permit(:name, :age, :present, :party_id)
  end

  def find_kid
    @kid = Kid.find(params[:id])
  end

end
