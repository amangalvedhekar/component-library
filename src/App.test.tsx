import React from 'react';
import { shallow, mount } from 'enzyme';
import App from "./App";

describe("should render", () => {
    it("submit button as disabled in initial state", () => {
        const wrapper = mount(<App/>);
        expect(wrapper.find("button").first().props()).toHaveProperty("disabled", true)
    });
});