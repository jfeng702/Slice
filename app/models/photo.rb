class Photo < ApplicationRecord
  validates :img_url, :owner_id, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album


end
# column name	data type	details
# id	integer	not null, primary key
# img_url	string	not null
# title	string	optional
# description	text	optional
# owner_id	integer	not null, indexed, foreign key
# created_at	datetime	not null
# updated_at	datetime	not null
