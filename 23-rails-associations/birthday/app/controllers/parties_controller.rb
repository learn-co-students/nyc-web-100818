class PartiesController < ApplicationController
  before_action :find_party, only: [:edit, :update, :destroy, :show]

  def index
    @parties = Party.all

  end

  def show
    # find_party
  end

  def new
    @party = Party.new
  end

  def create
    @party = Party.create(party_params)
    redirect_to party_path(@party)

  end

  def edit
    # find_party
  end

  def update
    # find_party
    @party.update(party_params)
    redirect_to @party
    #code
  end

  def destroy
    @party.destroy
    redirect_to parties_path
  end

private

  def party_params
    params.require(:party).permit(:fun, :theme, :gbags)
  end

  def find_party
    @party = Party.find(params[:id])
  end

end # end Party Controller class
