import React from "react";
import { shallow } from "enzyme";
import Functionfetch from "./functionfetch";

describe("Functionfetch", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Functionfetch />);
    expect(wrapper).toMatchSnapshot();
  });
});
