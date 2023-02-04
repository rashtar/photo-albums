import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {MemoryRouter, Route, Routes} from 'react-router';
import {act} from "react-dom/test-utils";
import * as api from '../utils/Api';
import {getAlbums} from '../utils/Api';
import {TitleBar} from "../components/TitleBar";
import Main from "./Main";

describe('Main', () => {
    let wrapper, store, getAlbums;
    const initialState = {
        albums: {
            value: [
                {
                    id: 1,
                    title: 'My first album'
                },
                {
                    id: 2,
                    title: 'My second album'
                }
            ]
        }
    }

    beforeEach(() => {
        const mockStore = configureStore();
        store = mockStore(initialState);

        /* Mock external functions */
        getAlbums = jest.spyOn(api, 'getAlbums');
        getAlbums.mockImplementation(jest.fn(() => {
            return new Promise((resolve, reject) => {
                process.nextTick(() =>
                    resolve(initialState.albums.value)
                );
            });
        }));

        /* component wrapper */
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <Main/>
                </MemoryRouter>
            </Provider>,
        );
    });

    test('renders Main successfully', async() => {
        const titleBar = wrapper.find(TitleBar);
        expect(titleBar).toHaveLength(1);

        const routes = wrapper.find(Routes);
        expect(routes).toHaveLength(1);

        expect(wrapper.containsMatchingElement(Route)).toBe(true);
    });

    test('should call getAlbums API, and dispatch the right action', async() => {
        expect(getAlbums).toHaveBeenCalled();

        await act(() => Promise.resolve());
        const actions = store.getActions();
        const expectedPayload = { payload: initialState.albums.value, type: 'albums/loadAlbums' };
        expect(actions).toEqual([expectedPayload]);
    });
});
