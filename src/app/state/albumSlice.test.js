import reducer, { loadAlbums } from './albumSlice'

describe('albumSlice', () => {
    let albums;

    beforeEach(() => {
        const albums = [{}, {}];
    });

    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                value: []
            }
        );
    })

    test('should handle photos being loaded into the store', () => {
        expect(reducer({}, loadAlbums(albums))).toEqual(
            {
                value: albums
            }
        );
    })
})