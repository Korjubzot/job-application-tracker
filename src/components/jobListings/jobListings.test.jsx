/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import { test, expect } from "vitest";
import JobListings from "./jobListings";

test("finds the table row headers", () => {
  let testData = [
    {
      id: 0,
      company: "Lionbridge",
      role: "QA Engineer",
      salary: "25PLN/hr",
    },
  ];

  render(<JobListings data={testData} />);
  const companyTableHeader = screen.getByText("Company");
  const roleTableHeader = screen.getByText("Role");
  const salaryTableHeader = screen.getByText("Salary");

  expect(companyTableHeader).toBeInTheDocument();
  expect(roleTableHeader).toBeInTheDocument();
  expect(salaryTableHeader).toBeInTheDocument();
});

test("checks that dummy data is passed correctly", () => {
  let testData = [
    {
      id: 0,
      company: "Lionbridge",
      role: "QA Engineer",
      salary: "25PLN/hr",
    },

    {
      id: 1,
      company: "Starlike",
      role: "Consultant",
      salary: "10,000GBP/m",
    },

    {
      id: 2,
      company: "Vertigo",
      role: "Chef",
      salary: "9.50GBP/hr",
    },
    {
      id: 3,
      company: "The Vurger Co.",
      role: "Kitchen Manager",
      salary: "14GBP/hr",
    },
  ];

  render(<JobListings data={testData} />);

  // TODO figure out how to test a mapped array in a table
});
