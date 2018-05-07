# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :tag_id, :photo_id, presence: true

  belongs_to :tag
  belongs_to :photo
end
