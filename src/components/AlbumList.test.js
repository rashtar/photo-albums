import {shallow} from "enzyme";
import {AlbumList} from "./AlbumList";
import {Text} from "@chakra-ui/react";

test('Renders AlbumList', () => {
    shallow(<AlbumList/>);
});

test('Renders AlbumList with list of Albums', () => {
    const albums = [
        <Text key={1}>Album 1</Text>,
        <Text key={2}>Album 2</Text>,
    ]

    const albumList = shallow(<AlbumList albums={albums}/>);

    expect(albumList.find('Text').children().length).toBe(2);
    expect(albumList.contains(albums[0])).toBeTruthy();
    expect(albumList.contains(albums[1])).toBeTruthy();
});

