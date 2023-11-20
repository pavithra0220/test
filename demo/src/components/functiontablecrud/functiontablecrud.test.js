import React from "react";
import { shallow } from "enzyme";
import Functiontablecrud from "./functiontablecrud";

describe("Functiontablecrud", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Functiontablecrud />);
    expect(wrapper).toMatchSnapshot();
  });
});
