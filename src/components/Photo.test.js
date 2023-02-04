import {Photo} from "./Photo";
import {shallow} from "enzyme";
import {Image} from "@chakra-ui/react";
import * as utilsApi from '../utils/Utils';
import React from "react";


describe('Photo.test.js', () => {
    let formatPhotoTitleMock;
    beforeEach(() => {
        formatPhotoTitleMock = jest.spyOn(utilsApi, 'formatPhotoTitle');
        formatPhotoTitleMock.mockImplementation(jest.fn((searchString, title) => title));
    });

    test('renders Photo component with no props successfully', () => {
        shallow(<Photo/>);
    });

    test('renders Photo successfully', () => {
        const image = {
            thumbnailUrl: 'test.jpg',
            title: 'Test JPG'
        };

        const photo = shallow(<Photo photo={image}/>);

        expect(photo.contains(<Image src={image.thumbnailUrl} alt={image.title}/>)).toBe(true);
        expect(photo.text()).toBe(image.title);
    });

    test('renders Photo with searchString and title successfully', () => {
        const image = {
            thumbnailUrl: 'test.jpg',
            title: 'Test JPG'
        };
        const searchString = 'jp';

        const photo = shallow(<Photo photo={image} searchString={searchString} />);

        expect(photo.contains(<Image src={image.thumbnailUrl} alt={image.title}/>)).toBe(true);
        expect(photo.text()).toBe(image.title);
    });

    test('renders Photo with JSX formattedString succesfully', () => {
        const image = {
            thumbnailUrl: 'test.jpg',
            title: 'Test JPG'
        };
        const searchString = 'tes';

        formatPhotoTitleMock.mockImplementation(jest.fn((searchString, title) => {
            return ([<i key='1'><strong>Test </strong></i>, 'JPG']);
        }));

        const photo = shallow(<Photo photo={image} searchString={searchString} />);

        expect(photo.contains(<Image src={image.thumbnailUrl} alt={image.title}/>)).toBe(true);
        expect(photo.text()).toBe(image.title);
    });

});
