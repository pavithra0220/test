import React from "react";
import { shallow } from "enzyme";
import Functioncompents from "./functioncompents";

describe("Functioncompents", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Functioncompents />);
    expect(wrapper).toMatchSnapshot();
  });
});
