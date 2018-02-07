# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord

  validates :body, :photo_id, presence: true

  belongs_to :photo
end
