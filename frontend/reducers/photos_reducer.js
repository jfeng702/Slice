import { RECEIVE_PHOTOS } from '../actions/photo_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTOS:
      return merge({}, action.photos);
    case RECEIVE_PHOTO:
      return merge({}, state, {[action.photo.id]: action.photo});
    default:
      return state;
  }
};

export default photosReducer;
