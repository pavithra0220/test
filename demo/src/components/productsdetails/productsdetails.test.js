import React from "react";
import { shallow } from "enzyme";
import Productsdetails from "./productsdetails";

describe("Productsdetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Productsdetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
