import React from 'react';
import { shallow, mount } from 'enzyme';
import SomeButton from "./Button";

describe("Button component", () => {
    it("should render", () => {
        const wrapper = shallow(<SomeButton>Hello Button</SomeButton>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should call click", () => {
        const handleClick = jest.fn();
        const wrapper = mount(<SomeButton onClick={handleClick}>Hello Button</SomeButton>);
        wrapper.find("button").simulate("click");
        expect(handleClick).toBeCalled();
    });
});
