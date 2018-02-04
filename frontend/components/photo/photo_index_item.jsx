import React from 'react';

const PhotoIndexItem = ({photo}) => {
  return (
    <div className="media">
      <img src={`${photo.img_url}`}/>
    </div>
  );
};


export default PhotoIndexItem;
