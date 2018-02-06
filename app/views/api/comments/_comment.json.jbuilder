json.extract! comment, :photo_id, :author_id, :body, :updated_at
json.updated time_ago_in_words(comment.updated_at)
json.username comment.author.username
