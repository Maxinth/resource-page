import { render, screen } from "@testing-library/react";
import CardItem from "@/components/CardItem";
import "@testing-library/jest-dom";
import { TestProvider } from "./TestProvider";

describe("CardItem", () => {
  const mockImg = "/test-image.png";
  const mockIcon = "/test-icon.svg";

  it("renders with provided text and category", () => {
    render(
      <TestProvider>
        <CardItem
          img={mockImg}
          icon={mockIcon}
          text="Custom Card Title"
          category="Wellbeing"
        />
      </TestProvider>
    );

    // Icon should render with correct alt text
    const icon = screen.getByRole("img", { name: "icon" });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", mockIcon);

    // Title should render the provided text
    expect(screen.getByText("Custom Card Title")).toBeInTheDocument();

    // Subtitle should always render
    expect(screen.getByText("Sample Topic")).toBeInTheDocument();

    // Category should render the provided category
    expect(screen.getByText("Wellbeing")).toBeInTheDocument();
  });

  it("renders fallback text and category when not provided", () => {
    render(
      <TestProvider>
        <CardItem img={mockImg} icon={mockIcon} />
      </TestProvider>
    );

    // Default title
    expect(
      screen.getByText("The ultimate guide to Workplace Chat")
    ).toBeInTheDocument();

    // Default category
    expect(screen.getByText("Secure Base")).toBeInTheDocument();
  });

  it("applies background image style", () => {
    render(
      <TestProvider>
        <CardItem img={mockImg} icon={mockIcon} />
      </TestProvider>
    );

    const card = screen.getByRole("img", { name: "icon" }).closest("div");

    expect(card).toHaveStyle(`background-image: url(${mockImg})`);
  });
});
