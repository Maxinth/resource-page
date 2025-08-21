/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import { navLinks } from "@/components/data";
import { renderWithProviders } from "./test-utils";

vi.mock("../NavSwitch", () => ({
  default: () => <div data-testid="nav-switch" />,
}));
vi.mock("../NavAvatar", () => ({
  default: ({ toggleDrawer }: any) => (
    <button data-testid="nav-avatar" onClick={toggleDrawer} />
  ),
}));
vi.mock("../MobileNavDrawer", () => ({
  default: ({ isOpen }: any) => (
    <div data-testid="mobile-drawer" data-open={isOpen.toString()} />
  ),
}));

describe("Navbar", () => {
  it("renders the logo", () => {
    renderWithProviders(<Navbar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders desktop nav links", () => {
    renderWithProviders(<Navbar />);
    navLinks.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
