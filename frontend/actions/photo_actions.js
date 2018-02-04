import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receivePhoto = photo => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

export const receivePhotos = photos => {
  return {
      type: RECEIVE_PHOTOS,
      photos
  };
};

export const receivePhotoErrors = errors => {
  return {
    type: RECEIVE_PHOTO_ERRORS,
    errors
  };
};

export const removePhoto = id => {
  return {
    type: REMOVE_PHOTO,
  };
};

export const fetchPhoto = () => dispatch => {
  return PhotoApiUtil.fetchPhoto()
    .then(serverPhoto => dispatch(receivePhoto(serverPhoto)),
      serverError => dispatch(receivePhotoErrors(serverError)));
};

export const fetchPhotos = () => dispatch => {
  return PhotoApiUtil.fetchPhotos()
    .then(serverPhotos => dispatch(receivePhotos(serverPhotos)),
      photoError => dispatch(receivePhotoErrors(photoError.responseJSON)));
};

export const deletePhoto = (id) => dispatch => {
  return PhotoApiUtil.deletePhoto()
    .then(post => dispatch(removePhoto(id)));
};
