import React from "react";
import { render } from "@testing-library/react";
import Date from "./Date";

describe("<Date/>", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Date value="2019-12-13T17:00:00Z" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
