class Tagging < ApplicationRecord
  validates :tag_id, :photo_id, presence: true

  belongs_to :tag
  belongs_to :photo
end
