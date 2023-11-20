import React from "react";
import { shallow } from "enzyme";
import Images from "./images";

describe("Images", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Images />);
    expect(wrapper).toMatchSnapshot();
  });
});
