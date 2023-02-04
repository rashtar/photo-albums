import {shallow} from "enzyme";
import {TitleBar} from "./TitleBar";
import {SunIcon} from "@chakra-ui/icons";

test('renders TitleBar successfully', () => {
    const titleBar = shallow(<TitleBar />);

    expect(titleBar.contains(<SunIcon/>)).toBe(true);
    expect(titleBar.text()).toContain('Albums');
});
