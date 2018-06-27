import AlbumsReducer from '../albums_reducer';
import * as AlbumActions from '../../actions/album_actions';
import { testAlbums } from '../../testUtil/album_helper';


describe('Reducers', () => {
  describe('AlbumsReducer', () => {
    it('should return the initial state', () => {
      expect(AlbumsReducer(undefined, {})).toEqual({});
    });

    describe('should handle RECEIVE_ALBUMS', () => {
      let action;

      beforeEach(() => {
        action = {
          type: AlbumActions.RECEIVE_ALBUMS,
          albums: testAlbums
        };
      });

      test('should replace the state with the action\'s albums', () => {
        const state = AlbumsReducer(undefined, action);
        expect(state).toEqual(testAlbums);
      });

      test('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        AlbumsReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState'});
      });
    });
  });
});
