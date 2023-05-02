import React from "react";
import { render, screen } from "@testing-library/react";
import { PortfolioSection } from "./PortfolioSection";

jest.mock("./Icon");

describe("PortfolioSection", function () {
  it("can render", async function () {
    render(<PortfolioSection />);

    const title = await screen.findByText("Portfolio");

    expect(title).toBeInTheDocument();
  });
});
