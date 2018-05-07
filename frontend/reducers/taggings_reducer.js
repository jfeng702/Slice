import {
  RECEIVE_TAGGING,
  RECEIVE_TAGGINGS,
  REMOVE_TAGGING
} from '../actions/tag_actions';
import merge from 'lodash/merge';

const taggingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAGGING:
      return merge({}, state, {[action.tagging.tagging_id]: action.tagging});
    case RECEIVE_TAGGINGS:
      return merge({}, state, action.taggings);
    case REMOVE_TAGGING:
      let newState;
      newState = merge({}, state);
      delete newState[action.tagging.tagging_id];
      return newState;
    default:
      return state;
  }
};

export default taggingsReducer;
