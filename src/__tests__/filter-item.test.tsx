import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import CheckboxList from "@/components/FilterItem";
import checkBoxInit from "@/assets/check-box-init.svg";
import checkBoxChecked from "@/assets/check-box-checked.svg";
import { renderWithProviders } from "./test-utils";

describe("CheckboxList", () => {
  const mockData = [
    { id: "1", label: "First option" },
    { id: "2", label: "Second option" },
  ];

  it("renders heading and all items", () => {
    renderWithProviders(<CheckboxList data={mockData} heading="My List" />);
    expect(screen.getByText("My List")).toBeInTheDocument();
    expect(screen.getByText("First option")).toBeInTheDocument();
    expect(screen.getByText("Second option")).toBeInTheDocument();
  });

  it("renders all checkboxes as unchecked initially", () => {
    renderWithProviders(<CheckboxList data={mockData} heading="My List" />);
    const icons = screen.getAllByAltText("check icon") as HTMLImageElement[];
    icons.forEach((icon) => {
      expect(icon.src).toContain(checkBoxInit);
    });
  });

  it("toggles checkbox to checked on click", () => {
    renderWithProviders(<CheckboxList data={mockData} heading="My List" />);
    const firstLabel = screen.getByText("First option");
    const firstIcon = screen.getAllByAltText(
      "check icon"
    )[0] as HTMLImageElement;

    //* Initially unchecked
    expect(firstIcon.src).toContain(checkBoxInit);

    //* Click label
    fireEvent.click(firstLabel);

    //* Now checked
    expect(firstIcon.src).toContain(checkBoxChecked);
  });

  it("toggles checkbox back to unchecked on second click", () => {
    renderWithProviders(<CheckboxList data={mockData} heading="My List" />);
    const firstLabel = screen.getByText("First option");
    const firstIcon = screen.getAllByAltText(
      "check icon"
    )[0] as HTMLImageElement;

    //* First click -> checked
    fireEvent.click(firstLabel);
    expect(firstIcon.src).toContain(checkBoxChecked);

    //* Second click -> unchecked
    fireEvent.click(firstLabel);
    expect(firstIcon.src).toContain(checkBoxInit);
  });
});
