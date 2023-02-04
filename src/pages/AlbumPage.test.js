import {mount} from 'enzyme';
import {AlbumPage} from "./AlbumPage";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import * as router from 'react-router';
import {Search} from "../components/Search";
import {PhotoList} from "../components/PhotoList";
import {act} from "react-dom/test-utils";
import * as utilsApi from "../utils/Utils";
import * as api from '../utils/Api';

describe('AlbumPage', () => {
    let wrapper, store, album, photos, formatPhotoTitleMock, getAlbumPhotosMock;
    const initialState = {
        photos: {
            value: [
                {
                    id: 1,
                    title: 'My first image'
                },
                {
                    id: 2,
                    title: 'My second image'
                }
            ]
        }
    }

    beforeEach(() => {
        const mockStore = configureStore();
        store = mockStore(initialState);
        album = {albumId: 12};
        photos = [{}, {}];

        /* Mock external functions */
        getAlbumPhotosMock = jest.spyOn(api, 'getAlbumPhotos');
        formatPhotoTitleMock = jest.spyOn(utilsApi, 'formatPhotoTitle');

        getAlbumPhotosMock.mockImplementation(jest.fn(() => {
            return new Promise((resolve, reject) => {
                process.nextTick(() =>
                    resolve(photos)
                );
            });
        }));
        formatPhotoTitleMock.mockImplementation(jest.fn((searchString, title) => title));

        /* Spies */
        jest.spyOn(router, 'useParams').mockReturnValue(album);

        /* component wrapper */
        wrapper = mount(
            <Provider store={store}>
                <AlbumPage/>
            </Provider>,
        );
    });

    test('renders AlbumPage successfully', async() => {
        const search = wrapper.find(Search);
        expect(search).toHaveLength(1);

        const photoList = wrapper.find(PhotoList);
        expect(photoList).toHaveLength(1);
        expect(photoList.props().albumId).toBe(album.albumId);
        expect(photoList.props().photos.length).toEqual(initialState.photos.value.length);
    });

    test('should call getAlbumPhotos API, and dispatch the right action', async() => {
        expect(getAlbumPhotosMock).toHaveBeenCalledWith(album.albumId);

        await act(() => Promise.resolve());
        const actions = store.getActions();
        const expectedPayload = { payload: photos, type: 'photos/loadPhotos' }
        expect(actions).toEqual([expectedPayload]);
    });

    test('should dispatch a clearPhotos action when unmounted', async() => {
        wrapper.unmount();
        await act(() => Promise.resolve());
        const latestAction = store.getActions()[0];
        const expectedPayload = { type: 'photos/clearPhotos' }
        expect(latestAction).toEqual(expectedPayload);
    });

    test('renders AlbumPage successfully with searchString', () => {
        const search = wrapper.find(Search);
        act(() => {
            search.props().onSearch('FiRSt');
        });
        wrapper.update();

        const photoList = wrapper.find(PhotoList);
        expect(photoList).toHaveLength(1);
        expect(photoList.props().albumId).toBe(album.albumId);
        expect(photoList.props().photos.length).toEqual(initialState.photos.value.length - 1);
    });

    test('renders AlbumPage successfully with searchString with different character case', () => {
        const search = wrapper.find(Search);
        act(() => {
            search.props().onSearch('SEC');
        });
        wrapper.update();

        const photoList = wrapper.find(PhotoList);
        expect(photoList).toHaveLength(1);
        expect(photoList.props().albumId).toBe(album.albumId);
        expect(photoList.props().photos.length).toEqual(initialState.photos.value.length - 1);
    });

});
