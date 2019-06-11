import React from 'react';
import { shallow, mount } from 'enzyme';
import {Link} from "./";

describe("Link Component", () => {
    it("should render", () => {
        const wrapper = shallow(<Link fontWeight={"bold"}>Some Link</Link>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should have href set to default if not provided", () => {
        const wrapper = mount(<Link fontWeight={"bold"}>Another Link</Link>);
        const elem = wrapper.find('a');
        expect(elem.props()).toHaveProperty("href", "#");
    });
});