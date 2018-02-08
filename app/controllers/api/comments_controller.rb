class Api::CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def index
    @comments = Comment.where(photo_id: params[:photo_id])
  end

  def edit

  end

  def update
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    @comment.destroy
    render :show
  end

  def comment_params
    params.require(:comment).permit(:photo_id, :author_id, :body)
  end
end
