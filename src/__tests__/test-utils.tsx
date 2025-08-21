import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { TestProvider } from "./TestProvider";

export function renderWithProviders(ui: ReactElement, options = {}) {
  return render(<TestProvider>{ui}</TestProvider>, options);
}
