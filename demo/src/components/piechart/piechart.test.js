import React from "react";
import { shallow } from "enzyme";
import Piechart from "./piechart";

describe("Piechart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Piechart />);
    expect(wrapper).toMatchSnapshot();
  });
});
