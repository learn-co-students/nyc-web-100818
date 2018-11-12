class CartsController < ApplicationController

  def update

    # let the user know something happend
    flash[:message] = "Hey you added #{params[:nacho_name]} to your cart!"
    add_nacho_to_cart(params[:nacho_id])
    redirect_to nachos_path
  end

end
