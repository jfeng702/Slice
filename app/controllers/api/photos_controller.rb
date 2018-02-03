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
    photo = Photo.find(params[:id])
    photo.destroy

  end

  def show
    @photo = Photo.find(params[:id])
  end

  def edit
    @photo = Photo.find(params[:id])
  end

  def update
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :title, :description, :owner_id)
  end
end
