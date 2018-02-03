# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

photos = Photo.create([{ img_url: 'https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg' },
 { owner_id: 1 }])

users = User.create([{ username: 'James' }, { password: 'password' }])
