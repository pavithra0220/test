import React from "react";
import { shallow } from "enzyme";
import Inputtask from "./inputtask";

describe("Inputtask", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Inputtask />);
    expect(wrapper).toMatchSnapshot();
  });
});
