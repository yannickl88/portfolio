import React, { MutableRefObject } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";
import { scrollTo } from "../lib/scroll-to";
import { animateBackground } from "../lib/animateBackground";

jest.mock("../lib/animateBackground");
jest.mock("../lib/scroll-to");

describe("HeroSection", function () {
  const mockedAnimateBackground = jest.mocked(animateBackground);
  const mockedScrollTo = jest.mocked(scrollTo);

  let refPortfolio: MutableRefObject<HTMLElement>;
  let refContact: MutableRefObject<HTMLElement>;

  beforeEach(function () {
    const element1 = document.createElement("div");
    const element2 = document.createElement("div");

    refPortfolio = { current: element1 };
    refContact = { current: element2 };
  });

  it("renders the background animation and cleans it up", async function () {
    const animationCleanup = jest.fn();

    mockedAnimateBackground.mockImplementation(() => ({
      stop: animationCleanup,
    }));

    const container = render(
      <HeroSection refPortfolio={refPortfolio} refContact={refContact} />
    );

    expect(mockedAnimateBackground).toBeCalled();

    container.unmount();

    expect(animationCleanup).toBeCalled();
  });

  it("scrolls to contact element when clicking the CTA", async function () {
    mockedAnimateBackground.mockImplementation(() => ({
      stop: jest.fn(),
    }));

    const scrollMock = jest.fn();

    mockedScrollTo.mockImplementation(scrollMock);

    render(<HeroSection refPortfolio={refPortfolio} refContact={refContact} />);

    const button = await screen.findByText("Say Hello", { selector: "button" });

    fireEvent.click(button);

    expect(scrollMock).toHaveBeenCalledWith(refContact.current, 1000);
  });

  it("scrolls to portfolio element when clicking portfolio button", async function () {
    mockedAnimateBackground.mockImplementation(() => ({
      stop: jest.fn(),
    }));

    const scrollMock = jest.fn();

    mockedScrollTo.mockImplementation(scrollMock);

    render(<HeroSection refPortfolio={refPortfolio} refContact={refContact} />);

    const button = await screen.findByText("Portfolio", { selector: "button" });

    fireEvent.click(button);

    expect(scrollMock).toHaveBeenCalledWith(refPortfolio.current, 1000);
  });
});
