import React from "react";
import { shallow } from "enzyme";
import Student1 from "./student1";

describe("Student1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Student1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
