@taggings.each do |tagging|
  json.set! tagging.id do
    json.partial! 'tagging', tagging: tagging
  end
end
