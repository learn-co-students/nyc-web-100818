class UsersController < ApplicationController
  before_action :find_user, only: [:show]
  def show
    render :show
  end

  def new
    @user = User.new
    render :new
  end

  def create #POST request to /users FOR SIGNUP
    @user = User.create(user_params) # User.create is a method on our MODEL which will encrypt and store the user's plaintext password
    if @user.valid?
      redirect_to @user
    else
      render :new
    end
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
