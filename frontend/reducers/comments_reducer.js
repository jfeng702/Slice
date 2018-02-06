import { RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_COMMENTS } from '../actions/comment_actions';
// import merge from 'lodash/merge';
import _ from 'lodash';

const commentsReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENT:
      return _.merge({}, state, {[action.comment.id]: action.comment});
    case RECEIVE_COMMENTS:
      return _.merge({}, state, action.comments);
    default:
      return state;
  }
};


export default commentsReducer;
