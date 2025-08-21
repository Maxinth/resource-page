import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import ResourcesSection from "@/components/ResourcesSection";
import { renderWithProviders } from "./test-utils";
describe("ResourcesSection", () => {
  it("renders the main heading", () => {
    renderWithProviders(<ResourcesSection />);
    const heading = screen.getByRole("heading", { name: /Resources/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the description text", () => {
    renderWithProviders(<ResourcesSection />);
    const text = screen.getByText(/Consectetur adipiscing elit/i);
    expect(text).toBeInTheDocument();
  });

  it("renders the search input with correct placeholder", () => {
    renderWithProviders(<ResourcesSection />);
    const input = screen.getByPlaceholderText("Search by title or keyword");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders the search icon image", () => {
    renderWithProviders(<ResourcesSection />);
    const icon = screen.getByAltText("search-icon");
    expect(icon).toBeInTheDocument();
  });
});
