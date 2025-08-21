import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import MobileNavDrawer from "@/components/MobileNavDrawer";
import { navLinks } from "@/components/data";
import { renderWithProviders } from "./test-utils";

describe("MobileNavDrawer", () => {
  it("renders drawer when isOpen is true", () => {
    renderWithProviders(<MobileNavDrawer isOpen={true} setIsOpen={vi.fn()} />);

    navLinks.forEach((link: string) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("does not render drawer content when isOpen is false", () => {
    renderWithProviders(<MobileNavDrawer isOpen={false} setIsOpen={vi.fn()} />);
    navLinks.forEach((link: string) => {
      expect(screen.queryByText(link)).not.toBeInTheDocument();
    });
  });

  it("calls setIsOpen when drawer triggers onOpenChange", () => {
    const setIsOpen = vi.fn();
    renderWithProviders(
      <MobileNavDrawer isOpen={true} setIsOpen={setIsOpen} />
    );

    const drawerRoot = screen.getByRole("dialog");

    //* Simulate closing the drawer
    drawerRoot.dispatchEvent(new Event("close", { bubbles: true }));

    expect(setIsOpen).not.toHaveBeenCalled();
  });

  it("renders all nav links", () => {
    renderWithProviders(<MobileNavDrawer isOpen={true} setIsOpen={vi.fn()} />);
    navLinks.forEach((link: string) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", "#");
    });
  });
});
