class ApplicationController < ActionController::Base

  # method for a "cart"
  def cart
    session[:nacho_ids] ||= []
    # if session[:nacho_ids]
    #   session[:nacho_ids]
    # else
    #   session[:nacho_ids]= []
    # end
  end


  # method to add a nacho to a cart
  def add_nacho_to_cart(nacho_id)
    cart << nacho_id
  end

  # get the nachos with the cart and pass to controller to send to view
  def display_cart
    @cart_nachos = Nacho.find(cart)
  end


end
