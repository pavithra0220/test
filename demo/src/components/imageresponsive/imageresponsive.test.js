import React from "react";
import { shallow } from "enzyme";
import Imageresponsive from "./imageresponsive";

describe("Imageresponsive", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Imageresponsive />);
    expect(wrapper).toMatchSnapshot();
  });
});
