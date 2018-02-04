class Api::PhotosController < ApplicationController
  def new
    @photo = Photo.new
  end

  def index
    @photos = Photo.all
    render :index
  end


  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = current_user.photos.find_by(id: params[:id])
    @photo.destroy

    render :show
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
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
    params.require(:photo).permit(:img_url, :title, :description, :owner_id)
  end
end
