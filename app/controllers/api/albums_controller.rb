class Api::AlbumsController < ApplicationController
  def new
    @album = Album.new
  end

  def destroy
    @album = current_user.albums.find_by(id: params[:id])
    @album.destroy
    render :show
  end

  def personalindex
  end

  def index
    @albums = Album.all
    render :index
  end

  def create
    @album = Album.new(album_params)
    @album.owner = current_user
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render :show
    else
      render json: @album.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @album = current_user.albums.find_by(id: params[:id])
    if @album.update(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private

  def album_params
    params.require(:album).permit(:title)
  end
end
