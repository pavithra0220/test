import React from "react";
import { shallow } from "enzyme";
import Crud from "./crud";

describe("Crud", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Crud />);
    expect(wrapper).toMatchSnapshot();
  });
});
