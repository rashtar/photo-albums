import reducer, { loadPhotos, clearPhotos } from './photoSlice'

describe('photoSlice', () => {
    let photos;

    beforeEach(() => {
        const photos = [{}, {}];
    });

    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                value: []
            }
        );
    })

    test('should handle photos being loaded into the store', () => {
        expect(reducer({}, loadPhotos(photos))).toEqual(
            {
                value: photos
            }
        );
    })

    test('should handle photos being cleared', () => {
        expect(reducer({value: photos}, clearPhotos())).toEqual(
            {
                value: []
            }
        );
    })
})