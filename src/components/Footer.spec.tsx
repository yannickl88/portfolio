import React from "react";
import { render, screen } from "@testing-library/react";
import { PortfolioSection } from "./PortfolioSection";
import { Footer } from "./Footer";

jest.mock("./Icon");

describe("Footer", function () {
  it("contains a link to source code", async function () {
    render(<Footer />);

    const link = await screen.findByText(
      (content, element) =>
        element.textContent === "Check out the source code at github.com."
    );

    expect(link).toBeInTheDocument();
  });

  it("contains the copyright notice", async function () {
    render(<Footer />);

    const notice = await screen.findByText("© 2023 — Yannick de Lange");

    expect(notice).toBeInTheDocument();
  });
});
