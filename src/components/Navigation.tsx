import style from "./Navigation.module.less";
import classNames from "classnames";
import React, { MutableRefObject, useEffect, useMemo, useState } from "react";
import { scrollTo } from "../lib/scroll-to";
import { Icon } from "./Icon";
import iconBars from "../../images/icons/bars.svg";
import iconClose from "../../images/icons/close.svg";

declare type ActivePageName = "home" | "about" | "portfolio" | "contact";
declare type NavigationProps = {
  refHero: MutableRefObject<HTMLElement>;
  refAbout: MutableRefObject<HTMLElement>;
  refPortfolio: MutableRefObject<HTMLElement>;
  refContact: MutableRefObject<HTMLElement>;
  onChange?: (active: ActivePageName) => void;
};
declare type MenuItemsProps = {
  refAbout: MutableRefObject<HTMLElement>;
  refPortfolio: MutableRefObject<HTMLElement>;
  refContact: MutableRefObject<HTMLElement>;
  activePage: ActivePageName;
  onNavigate?: () => void;
};

function scrollToRef(element: MutableRefObject<HTMLElement>) {
  scrollTo(element.current, 1000);
}

function MenuItems({
  refAbout,
  refPortfolio,
  refContact,
  activePage,
  onNavigate,
}: MenuItemsProps) {
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

export function Navigation({
  refHero,
  refAbout,
  refPortfolio,
  refContact,
  onChange,
}: NavigationProps) {
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activePage = useMemo<ActivePageName>(() => {
    if (refAbout.current && refPortfolio.current && refContact.current) {
      const positionAbout = refAbout.current.getBoundingClientRect().top;
      const positionPortfolio =
        refPortfolio.current.getBoundingClientRect().top;
      const positionContact = refContact.current.getBoundingClientRect().top;
      const screenHeight = window.innerHeight / 2;

      if (positionContact <= screenHeight) {
        return "contact";
      }
      if (positionPortfolio <= screenHeight) {
        return "portfolio";
      }
      if (positionAbout <= screenHeight) {
        return "about";
      }
    }
    return "home";
  }, [refAbout, refPortfolio, refContact, scroll]);

  useEffect(() => onChange(activePage), [activePage]);

  return (
    <nav className={style.navigation}>
      <div
        className={classNames(
          style.home,
          activePage === "home" ? style.active : null
        )}
        onClick={() => scrollToRef(refHero)}
      >
        Yannick
      </div>
      <div className={style.menu}>
        <a onClick={() => setMenuOpen(!menuOpen)}>
          <Icon icon={iconBars} />
        </a>
        <div
          className={classNames(
            style.flyoutContainer,
            menuOpen ? style.open : null
          )}
        >
          <div
            className={style.flyoutGlass}
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className={style.flyout}>
            <a className={style.flyoutClose} onClick={() => setMenuOpen(false)}>
              <Icon icon={iconClose} />
            </a>
            <div className={style.flyoutContent}>
              <MenuItems
                refAbout={refAbout}
                refPortfolio={refPortfolio}
                refContact={refContact}
                activePage={activePage}
                onNavigate={() => setMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.sections}>
        <MenuItems
          refAbout={refAbout}
          refPortfolio={refPortfolio}
          refContact={refContact}
          activePage={activePage}
        />
      </div>
    </nav>
  );
}
