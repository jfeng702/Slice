# == Schema Information
#
# Table name: album_photos
#
#  id         :integer          not null, primary key
#  photo_id   :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class AlbumPhoto < ApplicationRecord
  belongs_to :photo
  belongs_to :album

end
