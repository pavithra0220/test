import React from "react";
import { shallow } from "enzyme";
import Homewebsite from "./homewebsite";

describe("Homewebsite", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Homewebsite />);
    expect(wrapper).toMatchSnapshot();
  });
});
