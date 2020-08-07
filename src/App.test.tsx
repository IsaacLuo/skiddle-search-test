import React from "react";
import { render } from "./test-utils";
import App from "./App";

describe("test app component", () => {
  let component: any;

  test("renders logo", () => {
    component = render(<App />);
    const logo = component.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveStyle(`height: 214px`);
  });

  test("has home link", () => {
    component = render(<App />);
    const dom = component.getByTestId("homeLink");
    expect(dom).toBeInTheDocument();
    expect(dom).toHaveAttribute("href", "/");
  });
});
