import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import CardsSection from "@/components/CardsSection";
import { cardsData } from "@/components/data";
import { renderWithProviders } from "./test-utils";

describe("CardsSection", () => {
  it("renders the same number of CardItems as cardsData", () => {
    renderWithProviders(<CardsSection />);

    const secondaryTexts = screen.getAllByText("Sample Topic");
    expect(secondaryTexts.length).toBe(cardsData.length);
  });

  it("renders custom title text when provided in cardsData", () => {
    renderWithProviders(<CardsSection />);
    expect(
      screen.getByText("Taking stock of mental health in your workplace")
    ).toBeInTheDocument();
  });

  it("renders fallback category when not provided", () => {
    renderWithProviders(<CardsSection />);
    const fallbacks = screen.getAllByText("Secure Base");
    expect(fallbacks.length).toBeGreaterThan(0);
  });

  it("renders custom category when provided", () => {
    renderWithProviders(<CardsSection />);
    expect(screen.getByText("Wellbeing")).toBeInTheDocument();
  });
});
