import {mount} from "enzyme";
import {AlbumRow} from './AlbumRow';
import {MemoryRouter} from "react-router-dom";

test('Renders AlbumRow', () => {
    mount(
        <MemoryRouter>
            <AlbumRow/>
        </MemoryRouter>
    );
});

test('Given an AlbumRow with a photo, elements are rendered properly and href is set', () => {
    const album = {
        id: '1',
        title: 'My Album'
    };

    const albumRow = mount(
        <MemoryRouter>
            <AlbumRow album={album}/>
        </MemoryRouter>
    );

    const link = albumRow.find('a');

    expect(albumRow.text()).toBe(album.title);
    expect(link.props().href).toBe('/albums/' + album.id);
});