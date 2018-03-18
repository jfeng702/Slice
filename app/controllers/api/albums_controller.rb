class Api::AlbumsController < ApplicationController
  def new
    @album = Album.new
  end

  def destroy
    @album = current_user.albums.find_by(id: params[:id])
    @album.destroy
    p "hitting destroy"
    render :show
  end

  def personalindex
  end

  def index
    @albums = Album.all
    p "hitting index"
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

  def create_album_photo
    # p album_params
    @photo = Photo.new(photo_params)
    if @photo.save
      album_photo = AlbumPhoto.new
      album_photo.photo_id = @photo.id
      # must change album.last
      album_photo.album_id = @photo.album_id
      if album_photo.save
        render :album_show
      else
        render json: album_photo.errors.full_messages, status: :unprocessable_entity
      end
    else
      render json: photo.errors.full_messages, status: :unprocessable_entity
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

  def album_photos
    p '============================'
    p album = current_user.albums.find_by(id: params[:id])

    @album_photos = album.photos
    render :album_photos
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :photo, :album_id, :title, :description, :owner_id, :created_at)
  end

  def album_params
    params.require(:album).permit(:title)
  end
end
