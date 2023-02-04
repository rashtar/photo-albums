import {shallow} from "enzyme";
import {PhotoList} from "./PhotoList";
import {Text} from "@chakra-ui/react";

test('PhotoList renders', () => {
    shallow(<PhotoList/>)
});

test('Renders PhotoList with list of Albums', () => {
    const photos = [
        <Text key={1}>Photo 1</Text>,
        <Text key={2}>Photo 2</Text>,
    ]

    const photoList = shallow(<PhotoList photos={photos}/>);

    expect(photoList.find('Text').children().length).toBe(2);
    expect(photoList.contains(photos[0])).toBeTruthy();
    expect(photoList.contains(photos[1])).toBeTruthy();
});

