import React from "react";
import { shallow } from "enzyme";
import Titlebar from "./titlebar";

describe("Titlebar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Titlebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
