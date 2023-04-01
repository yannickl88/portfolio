import React from "react";
import { Icon } from "./Icon";
import { render, screen } from "@testing-library/react";
import { loadIcon } from "../lib/icon-loader";

jest.mock("../lib/icon-loader");

describe("Icon", function () {
  const mockedLoadIcon = jest.mocked(loadIcon);

  it("can load a svg image", async function () {
    mockedLoadIcon.mockImplementation(() => Promise.resolve("ICON CONTENT"));

    render(<Icon icon={"foo"} />);

    const icon = await screen.findByText("ICON CONTENT");

    expect(icon).toBeInTheDocument();
    expect(icon.classList).toContain("icon");
  });

  it("can be marked as disabled", async function () {
    mockedLoadIcon.mockImplementation(() => Promise.resolve("ICON CONTENT"));

    render(<Icon icon={"foo"} disabled={true} />);

    const icon = await screen.findByText("ICON CONTENT");

    expect(icon.classList).toContain("disabled");
  });
});
