import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({photo}) => {
  console.log(photo);
  return (
    <div className="media">
      <Link to={`/photos/${photo.id}`}>
        <img src={`${photo.img_url}`}/>
      </Link>
    </div>
  );
};


export default PhotoIndexItem;
