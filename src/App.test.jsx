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

test("finds the paragraph", () => {
  render(<App />);
  const paragraph = screen.getByText(
    "You can use this tracker to input data on your job applications. Add the company, role, salary, and current status."
  );
  expect(paragraph).toBeInTheDocument();
});
