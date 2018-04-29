class Api::TagsController < ApplicationController
  def new
    @tag = Tag.new
  end

  def index
    @tags = Tag.where(photo_id: params[:photo_id])
    render :index
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])
    @tag.destroy
    render :show
  end

  def tag_photos

  end

  def tag_params
    params.require(:tag).permit(:body, :photo_id)
  end
end
