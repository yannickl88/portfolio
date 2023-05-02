import React, { MutableRefObject } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PortfolioSection } from "./PortfolioSection";
import { Navigation } from "./Navigation";
import { scrollTo } from "../lib/scroll-to";

jest.mock("./Icon");
jest.mock("../lib/scroll-to");

describe("Navigation", function () {
  const mockedScrollTo = jest.mocked(scrollTo);

  let refHero: MutableRefObject<HTMLElement>;
  let refAbout: MutableRefObject<HTMLElement>;
  let refPortfolio: MutableRefObject<HTMLElement>;
  let refContact: MutableRefObject<HTMLElement>;
  let onChange = jest.fn();

  beforeEach(function () {
    const element1 = document.createElement("div");
    const element2 = document.createElement("div");
    const element3 = document.createElement("div");
    const element4 = document.createElement("div");

    refHero = { current: element1 };
    refAbout = { current: element2 };
    refPortfolio = { current: element3 };
    refContact = { current: element4 };
  });

  it("scrolls to the hero banner when clicking Home", async function () {
    const scrollMock = jest.fn();

    mockedScrollTo.mockImplementation(scrollMock);

    render(
      <Navigation
        refHero={refHero}
        refAbout={refAbout}
        refPortfolio={refPortfolio}
        refContact={refContact}
        onChange={onChange}
      />
    );

    const button = await screen.findByText("Yannick", { selector: "div" });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(scrollMock).toHaveBeenCalledWith(refContact.current, 1000);
  });
});
