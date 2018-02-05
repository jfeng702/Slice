class Api::PhotosController < ApplicationController
  def new
    @photo = Photo.new
  end

  def index
    cloud_name = ENV['CLOUD_NAME']
    upload_preset = ENV['UPLOAD_PRESET']
    puts "API KEYS: #{cloud_name} #{upload_preset}"

    @photos = Photo.all
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
    debugger
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
