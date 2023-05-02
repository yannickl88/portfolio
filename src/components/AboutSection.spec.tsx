import React from "react";
import { render, screen } from "@testing-library/react";
import { AboutSection } from "./AboutSection";

describe("AboutSection", function () {
  it("can render", async function () {
    render(<AboutSection />);

    const title = await screen.findByText("About");

    expect(title).toBeInTheDocument();
  });
});
