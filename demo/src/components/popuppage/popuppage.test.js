import React from "react";
import { shallow } from "enzyme";
import Popuppage from "./popuppage";

describe("Popuppage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Popuppage />);
    expect(wrapper).toMatchSnapshot();
  });
});
