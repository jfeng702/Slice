class Api::TaggingsController < ApplicationController
  def index
    # performance improvement can be had by querying specific Photo.taggings
    @taggings = Tagging.where('photo_id = ?', params[:photo_id])
  end

  def create
    @tag = Tag.create_tag(params)
    params[:tagging][:tag_id] = @tag.id
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @tagging = Tagging.find_by(id: params[:id])
    @tagging.destroy
    render :show
  end

  def show
    @tagging = Tagging.find_by(id: params[:id])
    if @tagging
      render :show
    else
      render json: @tagging.errors.full_messages, status: :unprocessable_entity
    end
  end

  def tagging_params
    params.require(:tagging).permit(:photo_id, :tag_id)
  end
end
