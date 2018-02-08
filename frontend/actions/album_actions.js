import * as AlbumApiUtil from '../util/album_api_util';
import { receivePhotos } from './photo_actions';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const receiveAlbum = album => {
  return {
    type: RECEIVE_ALBUM,
    album: album
  };
};

export const receiveAlbums = albums => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

export const removeAlbum = album => {
  return {
    type: REMOVE_ALBUM,
    album
  };
};

export const createAlbum = album => dispatch => {
  return AlbumApiUtil.createAlbum(album)
    .then(serverAlbum => dispatch(receiveAlbum(serverAlbum)));
};

export const fetchAlbums = () => dispatch => {
  return AlbumApiUtil.fetchAlbums()
    .then(serverAlbums => dispatch(receiveAlbums(serverAlbums)));
};

export const updateAlbum = album => dispatch => {
  return AlbumApiUtil.updateAlbum(album)
    .then(serverAlbum => dispatch(receiveAlbum(serverAlbum)));
};

export const deleteAlbum = albumId => dispatch => {
  return AlbumApiUtil.deleteAlbum(albumId)
    .then(serverAlbum => dispatch(removeAlbum(serverAlbum)));
};

export const fetchAlbum = id => dispatch => {
  return AlbumApiUtil.fetchAlbum(id)
    .then(serverAlbum => dispatch(receiveAlbum(serverAlbum)));
};

export const fetchAlbumPhotos = () => dispatch => {
  return AlbumApiUtil.fetchAlbumPhotos()
    .then(serverPhotos => dispatch(receivePhotos(serverPhotos)));
};

export const fetchUserAlbums = () => dispatch => {
  return AlbumApiUtil.fetchUserAlbums()
    .then(serverAlbums => dispatch(receiveAlbums(serverAlbums)));
};
