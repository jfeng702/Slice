import * as AlbumApiUtil from '../../util/album_api_util';

import * as actions from '../album_actions';
import { newAlbum, testAlbums } from '../../testUtil/album_helper';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  test('receiveAlbums should create an action to receive benches', () => {
    const expectedAction = {
      type: actions.RECEIVE_ALBUMS,
      albums: testAlbums
    };

    expect(actions.receiveAlbums(testAlbums)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  test('fetchAlbums creates RECEIVE_ALBUMS after fetching albums', () => {
    const expectedActions = [
      {
        type: actions.RECEIVE_ALBUMS,
        albums: testAlbums
      }
    ];

    AlbumApiUtil.fetchAlbums = jest.fn(() => {
      return Promise.resolve(testAlbums);
    });

    const store = mockStore({ albums: {} });

    return store.dispatch(actions.fetchAlbums()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
