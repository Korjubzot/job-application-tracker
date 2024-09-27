/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("finds the header", () => {
  render(<App />);
  const header = screen.getByText("Job Application Tracker");
  expect(header).toBeInTheDocument();
});
