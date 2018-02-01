class Api::SessionsController < ApplicationController
  def create
  
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render 'api/users/show'
      # render json: @user
    else
      render json: ['Invalid username/password'], status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ['nobody signed in'], status: 404
    end
  end
end
