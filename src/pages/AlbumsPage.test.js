import AlbumsPage from "./AlbumsPage";
import {mount, shallow} from "enzyme";
import {AlbumList} from "../components/AlbumList";
import {MemoryRouter} from "react-router-dom";
import {AlbumRow} from "../components/AlbumRow";
import React from "react";

test('renders AlbumsPage successfully', () => {
    shallow(<AlbumsPage/>);
});

test('renders AlbumsPage with albums successfully', () => {
    const albums = [{id: 1}, {id: 2}]
    const albumsElements = [
        <AlbumRow key={1} album={albums[0]}/>,
        <AlbumRow key={2} album={albums[1]}/>
    ];

    const albumsPage = mount(<MemoryRouter><AlbumsPage albums={albums}/></MemoryRouter>);

    expect(albumsPage.find('Text').children().length).toBe(albums.length);
    expect(albumsPage.find(AlbumList).props().albums.length).toBe(albums.length);
    expect(albumsPage.contains(albumsElements[0])).toBeTruthy();
    expect(albumsPage.contains(albumsElements[1])).toBeTruthy();
});
