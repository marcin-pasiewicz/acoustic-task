import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";

describe("<Loader/>", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
