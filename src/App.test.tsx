import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders logo img", async () => {
  render(<App />);
  const linkElement = await screen.findByAltText("vektorprogrammet logo");
  expect(linkElement.tagName).toBe("IMG");
});
