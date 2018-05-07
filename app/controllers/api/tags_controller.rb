class Api::TagsController < ApplicationController

  def index
    @tag = Tag.find_by(body: params[:tag][:body])
  end

  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @tag = Tag.find(params[:id])
    if @tag
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

  def tag_params
    params.require(:tag).permit(:body)
  end
end
