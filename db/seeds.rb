# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Photo.destroy_all
# User.destroy_all
#
# user1 = User.create!({ username: 'test1', password: 'password' })
#
# user2 = User.create!({ username: 'test2', password: 'password'})
#


# photos = Photo.create!([{ img_url: 'https://static.pexels.com/photos/46710/pexels-photo-46710.jpeg', owner_id: user1.id, title: 'awesome pic', description: 'taken with nikon' },
#   {img_url: 'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg', owner_id: user1.id, title: 'awesome pic', description: 'taken with nikon'},
#   {img_url: 'https://static.pexels.com/photos/34950/pexels-photo.jpg', owner_id: user1.id, title: 'awesome pic', description: 'taken with nikon'},
#   {img_url: 'http://i.dailymail.co.uk/i/pix/2016/09/06/11/37F60FD200000578-0-image-a-5_1473156426673.jpg', owner_id: user1.id, title: 'awesome pic', description: 'taken with nikon'},
#   {img_url: 'https://as.ftcdn.net/r/v1/pics/ea2e0032c156b2d3b52fa9a05fe30dedcb0c47e3/landing/images_photos.jpg', owner_id: user2.id, title: 'awesome pic', description: 'taken with nikon'},
#   {img_url: 'http://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg', owner_id: user2.id, title: 'awesome pic', description: 'taken with nikon'},
#   {img_url: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg', owner_id: user2.id, title: 'awesome pic', description: 'taken with nikon'},
#   {img_url: 'https://www.wonderplugin.com/videos/demo-image0.jpg', owner_id: user2.id, title: 'awesome pic', description: 'taken with nikon'},
#   {img_url: 'https://images.freeimages.com/images/small-previews/25d/eagle-1523807.jpg', owner_id: user2.id, title: 'awesome pic', description: 'taken with nikon'}
#  ])

 Photo.create!([{img_url: 'http://www.hd-freewallpapers.com/free-parrots-wallpapers/beautiful-images-of-parrots-wallpaper.jpg', owner_id: 16 },
   {img_url:'https://www.thephotoargus.com/wp-content/uploads/2016/12/peacock-9.jpg', owner_id:16},
   {img_url:'http://cdn2.stylecraze.com/wp-content/uploads/2013/08/1791_25-Most-Beautiful-Pink-Roses_-is-tock-675065828.jpg', owner_id:16},
   {img_url:'http://hdfreewallpaper.net/wp-content/uploads/2015/10/beautiful-waterfall-and-pink-flowers-free-hd-for-desktop.jpg', owner_id:16},
   {img_url:'https://static.pexels.com/photos/326055/pexels-photo-326055.jpeg', owner_id:16},
   {img_url:'https://cdn.pixabay.com/photo/2017/02/19/15/28/italy-2080072_960_720.jpg', owner_id:16},
   {img_url:'https://static.pexels.com/photos/206359/pexels-photo-206359.jpeg', owner_id:16}])

# album_photos = AlbumPhoto.create!([{ album_id: album_id, photo_id: 75 },


beautiful_pics = Album.create!([{title: 'Beautiful Sights', owner_id: 16}])
