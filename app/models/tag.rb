# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :body, presence: true, uniqueness: true

  has_many :taggings,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: :Tagging,
    dependent: :destroy

  has_many :photos,
    through: :taggings,
    source: :photo

    def self.create_tag(query_params)
      tag = Tag.find_by(body: query_params[:tagging][:body])
      if !tag
        tag = Tag.new(query_params.require(:tagging).permit(:body))
        tag.save
      end
      tag
    end
end
