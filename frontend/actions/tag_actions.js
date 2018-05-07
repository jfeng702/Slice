// importing tagging as tag
import * as TaggingApiUtil from '../util/tagging_api_util';

export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';
export const RECEIVE_TAGGINGS = 'RECEIVE_TAGGINGS';
export const REMOVE_TAGGING = 'REMOVE_TAGGING';

export const receiveTagging = tagging => {
  return {
    type: RECEIVE_TAGGING,
    tagging
  };
};

export const receiveTaggings = taggings => ({
  type: RECEIVE_TAGGINGS,
  taggings
});

export const removeTagging = tagging => ({
  type: REMOVE_TAGGING,
  tagging
});

export const createTagging = (photoId, body) => dispatch => (
  TaggingApiUtil.createTagging(photoId, body)
    .then(tagging => dispatch(receiveTagging(tagging)))
);

export const fetchTaggings = photoId => dispatch => (
  TaggingApiUtil.fetchTaggings(photoId)
    .then(taggings => dispatch(receiveTaggings(taggings)))
);

export const deleteTagging = (photoId, taggingId) => dispatch => (
  TaggingApiUtil.deleteTagging(photoId, taggingId)
    .then(tagging => dispatch(removeTagging(tagging)))
);

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
