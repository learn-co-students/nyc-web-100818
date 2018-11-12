class RegretsController < ApplicationController
  before_action :find_regret, only: [:show, :edit, :destroy, :update]

  def index
    @regrets = Regret.all
  end

  def show

  end

  def new
    @regret = Regret.new
    @users = User.all

  end

  def create
    @regret = Regret.create(regret_params)

    redirect_to @regret
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private

  def find_regret
    @regret = Regret.find_by(id: params[:id])
  end

  def regret_params
    params.require(:regret).permit(:name, :painful, :level, :user_id)
  end
end
