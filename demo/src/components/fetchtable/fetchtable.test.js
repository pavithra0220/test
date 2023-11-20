import React from "react";
import { shallow } from "enzyme";
import Fetchtable from "./fetchtable";

describe("Fetchtable", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Fetchtable />);
    expect(wrapper).toMatchSnapshot();
  });
});
