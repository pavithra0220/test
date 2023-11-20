import React from "react";
import { shallow } from "enzyme";
import Fetchlist from "./fetchlist";

describe("Fetchlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Fetchlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
