import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactSection } from "./ContactSection";

jest.mock("./Icon");

describe("ContactSection", function () {
  it("can render", async function () {
    render(<ContactSection />);

    const title = await screen.findByText("Contact");

    expect(title).toBeInTheDocument();
  });
});
