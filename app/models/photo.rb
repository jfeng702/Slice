# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  img_url     :string           not null
#  title       :string
#  description :text
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :img_url, :owner_id, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :comments



end
# column name	data type	details
# id	integer	not null, primary key
# img_url	string	not null
# title	string	optional
# description	text	optional
# owner_id	integer	not null, indexed, foreign key
# created_at	datetime	not null
# updated_at	datetime	not null
