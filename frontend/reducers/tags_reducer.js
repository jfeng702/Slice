import {
  RECEIVE_TAG,
  RECEIVE_TAGS,
  REMOVE_TAG
} from '../actions/tag_actions';
import merge from 'lodash/merge';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAG:
      return merge({}, state, {[action.tag.id]: action.tag});
    case RECEIVE_TAGS:
      return merge({}, state, action.tags);
    case REMOVE_TAG:
      let newState;
      newState = merge({}, state);
      delete newState[action.tag.id];
      return newState;
    default:
      return state;
  }
};

export default tagsReducer;
