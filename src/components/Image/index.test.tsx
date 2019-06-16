import React from 'react';
import {shallow} from 'enzyme';
import StyledImage from "./";
import {borderType} from "../List";

describe("Image component", () => {
    it("is rendered", () => {
        const wrapper = shallow(<StyledImage
            src={"https://placeimg.com/640/480/any"}
            alt={"some text"}
            borderType={borderType.all}
        />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render with default border type", () => {
        const wrapper = shallow(<StyledImage
            src={"https://placeimg.com/640/480/any"}
            alt={"some text"}
        />);
        expect(wrapper.props())
            .toHaveProperty("borderType", "none");
    });
});