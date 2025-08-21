import { describe, it, expect, beforeEach } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import FiltersSection from "@/components/FiltersSection";

describe("FiltersSection", () => {
  beforeEach(() => {
    renderWithProviders(<FiltersSection />);
  });

  it("renders desktop heading", () => {
    expect(screen.getByText("Filters")).toBeInTheDocument();
  });

  it("renders all filter items by default", () => {
    expect(screen.getByText("Key Foundational Principles")).toBeInTheDocument();
    expect(screen.getByText("Document type")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
  });

  it("shows 'Hide Filters' in mobile toggle when open", () => {
    expect(screen.getByText("Hide Filters")).toBeInTheDocument();
  });

  it("toggles to 'Show Filters' and hides items when clicked", () => {
    const toggle = screen.getByText("Hide Filters");

    // click to hide
    fireEvent.click(toggle);

    expect(screen.getByText("Show Filters")).toBeInTheDocument();
    expect(
      screen.queryByText("Key Foundational Principles")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Document type")).not.toBeInTheDocument();
    expect(screen.queryByText("Categories")).not.toBeInTheDocument();
  });

  it("toggles back to 'Hide Filters' and shows items again", () => {
    const toggle = screen.getByText("Hide Filters");

    //* click twice
    fireEvent.click(toggle);
    fireEvent.click(screen.getByText("Show Filters")); //* Show

    expect(screen.getByText("Hide Filters")).toBeInTheDocument();
    expect(screen.getByText("Key Foundational Principles")).toBeInTheDocument();
    expect(screen.getByText("Document type")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
  });
});
