# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Photo.destroy_all
User.destroy_all

photos = Photo.create([{ img_url: 'https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg', owner_id: 19, title: 'awesome pic', description: 'taken with nikon' },
  {img_url: 'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg', owner_id: 19, title: 'awesome pic', description: 'taken with nikon'},
  {img_url: 'https://static.pexels.com/photos/34950/pexels-photo.jpg', owner_id: 19, title: 'awesome pic', description: 'taken with nikon'},
  {img_url: 'http://i.dailymail.co.uk/i/pix/2016/09/06/11/37F60FD200000578-0-image-a-5_1473156426673.jpg', owner_id: 19, title: 'awesome pic', description: 'taken with nikon'},
  {img_url: 'https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg', owner_id: 2, title: 'awesome pic', description: 'taken with nikon'},
  {img_url: 'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg', owner_id: 1, title: 'awesome pic', description: 'taken with nikon'},
  {img_url: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg', owner_id: 1, title: 'awesome pic', description: 'taken with nikon'},
  {img_url: 'https://www.wonderplugin.com/videos/demo-image0.jpg', owner_id: 1, title: 'awesome pic', description: 'taken with nikon'},
  {img_url: 'https://images.freeimages.com/images/small-previews/25d/eagle-1523807.jpg', owner_id: 1, title: 'awesome pic', description: 'taken with nikon'}

 ])

users = User.create([{ username: 'guest', password: 'password' },
  { username: 'user', password: 'password'}])
