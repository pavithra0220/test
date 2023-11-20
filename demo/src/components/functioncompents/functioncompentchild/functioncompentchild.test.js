import React from "react";
import { shallow } from "enzyme";
import Functioncompentchild from "./functioncompentchild";

describe("Functioncompentchild", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Functioncompentchild />);
    expect(wrapper).toMatchSnapshot();
  });
});
