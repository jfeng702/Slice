class Api::TagsController < ApplicationController
  def new
    @tag = Tag.new
  end

  def index
    @tags = Tag.where(photo_id: params[:photo_id])
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
    else
    end 
  end

  def destroy
  end

  def tag_params
    params.require(:tag).permit(:body, :photo_id)
  end
end
