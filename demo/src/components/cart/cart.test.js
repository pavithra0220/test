import React from "react";
import { shallow } from "enzyme";
import Cart from "./cart";

describe("Cart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cart />);
    expect(wrapper).toMatchSnapshot();
  });
});
