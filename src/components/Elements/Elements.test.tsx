import React from "react";
import { render } from "@testing-library/react";
import Elements from "./Elements";

const testData = {
  elements: {
    heading: { elementType: "text", value: "Staffordshire Terrier Pups" },
  },
};

describe("<Elements/>", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Elements elements={testData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
