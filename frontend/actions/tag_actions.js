import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const REMOVE_TAG = 'REMOVE_TAG';

export const receiveTag = tag => {
  return {
    type: RECEIVE_TAG,
    tag: tag
  };
};

export const receiveTags = tags => {
  return {
    type: RECEIVE_TAGS,
    tags
  };
};

export const removeTag = tag => {
  return {
    type: REMOVE_TAG,
    tag
  };
};

export const createTag = tag => dispatch => {
  return TagApiUtil.createTag(tag)
    .then(serverTag => dispatch(receiveTag(serverTag)));
};

export const fetchTags = (photoId) => dispatch => {
  return TagApiUtil.fetchTags(photoId)
    .then(serverTags => dispatch(receiveTags(serverTags)));
};

export const deleteTag = tagId => dispatch => {
  return TagApiUtil.deleteTag(tagId)
    .then(serverTag => dispatch(removeTag(serverTag)));
};
