class Api::PhotosController < ApplicationController
  def new
    @photo = Photo.new
  end

  def index
    if params[:tag_id]
      # tag_id is actually tag body here
      @photos = Photo.tagged_with(params[:tag_id])
    else
      @photos = Photo.all
    end
    render :index
  end


  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
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
        render :show
      else
        render json: album_photo.errors.full_messages, status: :unprocessable_entity
      end
    else
      render json: photo.errors.full_messages, status: :unprocessable_entity
    end
  end


  def destroy
    @photo = current_user.photos.find_by(id: params[:id])
    @photo.destroy
    render :show
  end

  def show
    @photo = Photo.find(params[:id])
    if @photo
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end

  end

  def update
    @photo = current_user.photos.find_by(id: params[:id])
    if @photo.update(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end



  private

  def photo_params
    params.require(:photo).permit(:img_url, :photo, :album_id, :title, :description, :owner_id, :created_at)
  end


end
