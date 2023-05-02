import React, { MutableRefObject } from "react";
import classNames from "classnames";
import style from "./Navigation.module.less";
import { scrollTo } from "../lib/scroll-to";

export type ActivePageName = "home" | "about" | "portfolio" | "contact";

type Props = {
  refAbout: MutableRefObject<HTMLElement>;
  refPortfolio: MutableRefObject<HTMLElement>;
  refContact: MutableRefObject<HTMLElement>;
  activePage: ActivePageName;
  onNavigate?: () => void;
};

function scrollToRef(element: MutableRefObject<HTMLElement>) {
  scrollTo(element.current, 1000);
}

export function MenuItems({
  refAbout,
  refPortfolio,
  refContact,
  activePage,
  onNavigate,
}: Props) {
  function scrollTo(element: MutableRefObject<HTMLElement>) {
    scrollToRef(element);
    onNavigate?.();
  }

  return (
    <>
      <a
        className={classNames(
          style.section,
          activePage === "about" ? style.active : null
        )}
        onClick={() => scrollTo(refAbout)}
      >
        <span className={style.sectionNumber}>01.</span>
        <span>About</span>
      </a>
      <a
        className={classNames(
          style.section,
          activePage === "portfolio" ? style.active : null
        )}
        onClick={() => scrollTo(refPortfolio)}
      >
        <span className={style.sectionNumber}>02.</span>
        <span>Portfolio</span>
      </a>
      <a
        className={classNames(
          style.section,
          activePage === "contact" ? style.active : null
        )}
        onClick={() => scrollTo(refContact)}
      >
        <span className={style.sectionNumber}>03.</span>
        <span>Contact</span>
      </a>
    </>
  );
}
