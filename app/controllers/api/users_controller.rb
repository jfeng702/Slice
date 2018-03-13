class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
      # render json: @user
    else
      #how to return errors
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_photos
    @user_photos = current_user.photos
    if @user_photos
      render :user_photos
    else
      render json: ["cannot find user photos"], status: 424
    end
  end

  def user_albums
    @user_albums = current_user.albums
    p "hitting user_albums"
    if @user_albums
      render :user_albums
    else
      render json: ["cannot find user albums"], status: 424
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
