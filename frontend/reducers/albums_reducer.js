import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ALBUMS } from '../actions/album_actions';

import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
      case RECEIVE_ALBUMS:
        return merge({}, state, action.albums);
      case RECEIVE_ALBUM:
        return merge({}, state, { [action.album.id]: action.album});
      default:
        return state;
  }
};

export default albumsReducer;
