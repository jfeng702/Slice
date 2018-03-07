# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Photo.destroy_all
User.destroy_all
AlbumPhoto.destroy_all
Album.destroy_all
Comment.destroy_all

# Users
user1 = User.create!({ username: 'guest', password: 'password' })
user2 = User.create!({ username: 'JamesBond', password: 'password'})
user3 = User.create!({ username: 'TonyParker', password: 'password'})

# Photos
# Beautiful Sights
 photo1 = Photo.create!({img_url: 'https://res.cloudinary.com/slicecloud/image/upload/v1518196108/pexels-photo-326055_tclf23.jpg', title: 'Blue butterflies', owner_id: user1.id })
 Comment.create(
   photo_id: photo1.id,
   author_id: user3.id,
   body: 'gorgeous!'
 )
 Comment.create(
   photo_id: photo1.id,
   author_id: user2.id,
   body: 'i concur'
 )
 photo2 = Photo.create!({img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518196107/italy-2080072_960_720_j41gyb.jpg', title: 'Snow', owner_id: user1.id})
 Comment.create(
   photo_id: photo2.id,
   author_id: user3.id,
   body: 'nice shot bro!'
 )
 Comment.create(
   photo_id: photo2.id,
   author_id: user2.id,
   body: 'i concur'
 )
 photo3 = Photo.create!({img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518196107/pexels-photo-206359_dxcnlg.jpg', title: 'Cool Picture', owner_id:user1.id})
 Comment.create(
   photo_id: photo3.id,
   author_id: user3.id,
   body: 'nice shot bro!'
 )
 Comment.create(
   photo_id: photo3.id,
   author_id: user2.id,
   body: 'i concur'
 )
 photo4 = Photo.create!({img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518196107/11671_djakcp.jpg', title: 'Cool Picture', owner_id:user1.id})
 Comment.create(
   photo_id: photo4.id,
   author_id: user3.id,
   body: 'nice shot bro!'
 )
 Comment.create(
   photo_id: photo4.id,
   author_id: user2.id,
   body: 'i concur'
 )
 photo5 = Photo.create!({img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518196107/1202759-beautiful-wallpaper_yvtlca.jpg', title: 'Cool Pic', owner_id:user1.id})
 Comment.create(
   photo_id: photo5.id,
   author_id: user3.id,
   body: 'nice shot bro!'
 )
 Comment.create(
   photo_id: photo5.id,
   author_id: user2.id,
   body: 'i concur'
 )
 photo6 = Photo.create!({img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518196107/Beautiful-Wallpapers-55G_wvg5ak.jpg', title: 'Cool Pic', owner_id:user2.id})
 Comment.create(
   photo_id: photo6.id,
   author_id: user3.id,
   body: 'nice shot bro!'
 )
 Comment.create(
   photo_id: photo6.id,
   author_id: user2.id,
   body: 'i concur'
 )
 photo7 = Photo.create!({img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518196106/224340939-pictures-beautiful_jbilvd.jpg', title: 'Cool Pic', owner_id:user2.id})
 Comment.create(
   photo_id: photo7.id,
   author_id: user3.id,
   body: 'nice shot bro!'
 )
 Comment.create(
   photo_id: photo7.id,
   author_id: user2.id,
   body: 'i concur'
 )
 photo8 = Photo.create!({img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518196107/1563803_asq90z.jpg', title: 'Cool Pic', owner_id: user2.id})
 Comment.create(
   photo_id: photo8.id,
   author_id: user3.id,
   body: 'nice shot bro!'
 )
 Comment.create(
   photo_id: photo8.id,
   author_id: user2.id,
   body: 'i concur'
 )

# Animals

  photo9 = Photo.create!(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518201220/Polar_Bear_Threats_Image3_202798_h4jgyg.jpg',
    title: 'Polar Bears',
    owner_id: user1.id
  )

  Comment.create(
    photo_id: photo9.id,
    author_id: user3.id,
    body: 'what a sillly bear'
  )

  Comment.create(
    photo_id: photo9.id,
    author_id: user2.id,
    body: 'i concur'
  )

  photo10 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518201220/01-animal-speed-cheetah.ngsversion.1500303651696.adapt.1900.1_z3v0zc.jpg',
    title: 'Cheetah',
    owner_id: user1.id
  )
  photo11 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518201220/01-booktalk-animal-personalities-NationalGeographic_2495705_e2kx8q.jpg',
    title: 'Fox',
    owner_id: user1.id
  )
  photo12 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518201220/category-thumbnail-mammals_0_lxwezw.jpg',
    title: 'Panda',
    owner_id: user1.id
  )

  Comment.create(
    photo_id: photo12.id,
    author_id: user2.id,
    body: 'What a Silly bear!'
  )
  Comment.create(
    photo_id: photo12.id,
    author_id: user3.id,
    body: 'i concur'
  )

  photo13 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518201219/cecil-AP463227356214-1000x400_q8oz2p.jpg',
    title: 'Lion',
    owner_id: user1.id
  )
  Comment.create(
    photo_id: photo13.id,
    author_id: user3.id,
    body: 'so majestic'
  )
  photo14 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518201224/nature-bird-flying-red_zkdiec.jpg',
    title: 'Parrot',
    owner_id: user1.id
  )
  photo15 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518201229/pexels-photo-145939_c4dnlp.jpg',
    title: 'Tiger',
    owner_id: user1.id
  )



  # Landscape
  photo16 = Photo.create(
    img_url: 'https://res.cloudinary.com/slicecloud/image/upload/v1518202551/pexels-photo_ufdx5s.jpg',
    title: 'Along the emerald road',
    owner_id: user1.id
  )
  photo17 = Photo.create(
    img_url: 'https://res.cloudinary.com/slicecloud/image/upload/v1518202548/award-winning-stradivarius-violin-pool-cipriano-landscape-design-2-blue-lights_qf8tfe.jpg',
    title: 'Exotic Pool',
    owner_id: user1.id
  )
  photo18 = Photo.create(
    img_url: 'https://res.cloudinary.com/slicecloud/image/upload/v1518202548/pexels-photo-248797_wvk3jl.jpg',
    title: 'Where I wish I was right now',
    owner_id: user1.id
  )
  photo19 = Photo.create(
    img_url: 'https://res.cloudinary.com/slicecloud/image/upload/v1518202548/amazing-animal-beautiful-beautifull_b400yj.jpg',
    title: 'cool pic',
    owner_id: user1.id
  )
  photo20 = Photo.create(
    img_url: 'https://res.cloudinary.com/slicecloud/image/upload/v1518202548/37F60FD200000578-0-image-a-5_1473156426673_gic86b.jpg',
    title: 'cool pic',
    owner_id: user1.id
  )

  # New Animals
  photo21 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518200793/orangutan_1600x1000_279157_tr2tf3.jpg',
    title: 'Orangutan',
    owner_id: user1.id
  )
  photo22 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518200792/enhanced-buzz-1492-1379411828-15_r2ksk6.jpg',
    title: 'Little Hedgehog',
    owner_id: user1.id
  )
  Comment.create(
    photo_id: photo22.id,
    author_id: user3.id,
    body: 'this little guy is my fav'
  )
  photo23 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518200792/demo-image0_hebv2f.jpg',
    title:  'Swan',
    owner_id: user1.id
  )
  photo24 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518200792/eagle-1523807_mtevwt.jpg',
    title: 'Eagle',
    description: 'This is the look of freedom',
    owner_id: user1.id
  )
  Comment.create(
    photo_id: photo24.id,
    author_id: user3.id,
    body: 'Murica'
  )
  photo25 = Photo.create(
    img_url:'https://res.cloudinary.com/slicecloud/image/upload/v1518196106/beautiful-images-of-parrots-wallpaper_b8davu.jpg',
    title: 'Birds',
    owner_id: user1.id
  )

album1 = Album.create!({title: 'Beautiful Sights', owner_id: user1.id})
album2 = Album.create!(title: 'Animals', owner_id: user1.id)
album3 = Album.create!(title: 'Round The World', owner_id: user1.id)

AlbumPhoto.create!(
  album_id: album1.id,
  photo_id: photo1.id
)

AlbumPhoto.create!(
  album_id: album1.id,
  photo_id: photo2.id
)

AlbumPhoto.create!(
  album_id: album1.id,
  photo_id: photo3.id
)

AlbumPhoto.create!(
  album_id: album1.id,
  photo_id: photo4.id
)

AlbumPhoto.create!(
  album_id: album1.id,
  photo_id: photo5.id
)

AlbumPhoto.create!(
  album_id: album1.id,
  photo_id: photo6.id
)

AlbumPhoto.create!(
  album_id: album1.id,
  photo_id: photo7.id
)

AlbumPhoto.create!(
  album_id: album1.id,
  photo_id: photo8.id
)

AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo9.id
)

AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo10.id
)

AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo11.id
)

AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo12.id
)

AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo13.id
)

AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo14.id
)

AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo15.id
)
AlbumPhoto.create!(
  album_id: album3.id,
  photo_id: photo16.id
)
AlbumPhoto.create!(
  album_id: album3.id,
  photo_id: photo17.id
)
AlbumPhoto.create!(
  album_id: album3.id,
  photo_id: photo18.id
)
AlbumPhoto.create!(
  album_id: album3.id,
  photo_id: photo19.id
)
AlbumPhoto.create!(
  album_id: album3.id,
  photo_id: photo20.id
)
AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo21.id
)
AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo22.id
)
AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo23.id
)
AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo24.id
)
AlbumPhoto.create!(
  album_id: album2.id,
  photo_id: photo25.id
)

comments = ['That is an amazing shot!', 'What kind of camera did you use?', 'Wow, truly amazing.']




# album_photos = AlbumPhoto.create([{ album_id: album_id, photo_id: 75 },
