import React from "react";
import { shallow } from "enzyme";
import Pagination from "./pagination";

describe("Pagination", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper).toMatchSnapshot();
  });
});
