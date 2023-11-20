import React from "react";
import { shallow } from "enzyme";
import Ecommerce from "./ecommerce";

describe("Ecommerce", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ecommerce />);
    expect(wrapper).toMatchSnapshot();
  });
});
