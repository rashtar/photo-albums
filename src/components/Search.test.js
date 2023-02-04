import {Search} from "./Search";
import {mount} from "enzyme";
import {SearchIcon} from "@chakra-ui/icons";
import React from 'react';

test('renders Search component successfully', () => {
   const search = mount(<Search/>);
   expect(search.contains(<SearchIcon color='gray.300'/>)).toBeTruthy();
});

test('onSearch call back gets invoked when the input changes', () => {
   const mockOnSearch = jest.fn();
   const setValue = jest.fn();
   const handleClick = jest.spyOn(React, "useState");
   handleClick.mockImplementation(value => [value, setValue]);

   const search = mount(<Search onSearch={mockOnSearch}/>);

   const searchString = 'Hello';
   search.find('input').simulate('change', { target: { value: searchString } });

   expect(mockOnSearch).toHaveBeenCalledWith(searchString);
   expect(setValue).toHaveBeenCalledWith(searchString);
});