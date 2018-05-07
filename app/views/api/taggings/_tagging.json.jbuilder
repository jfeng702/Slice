json.extract! tagging.tag, :body
json.set! :tag_id, tagging.tag.id
json.set! :tagging_id, tagging.id
json.set! :photo_id, tagging.photo.id
