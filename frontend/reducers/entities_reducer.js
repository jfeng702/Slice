import { combineReducers } from 'redux';

import photos from './photos_reducer';
import comments from './comments_reducer';
import albums from './albums_reducer';
import tags from './taggings_reducer';

export default combineReducers({
  photos,
  comments,
  albums,
  tags
});
