import React from "react";
import { shallow } from "enzyme";
import Titlebarinput from "./titlebarinput";

describe("Titlebarinput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Titlebarinput />);
    expect(wrapper).toMatchSnapshot();
  });
});
