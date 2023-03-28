import React, { MutableRefObject, useEffect, useRef } from "react";
import style from "./HeroSection.module.less";
import { scrollTo } from "../lib/scroll-to";
import { animateBackground } from "../lib/animateBackground";

declare type HeroSectionProps = {
  refPortfolio: MutableRefObject<HTMLElement>;
  refContact: MutableRefObject<HTMLElement>;
};

function scrollToRef(element: MutableRefObject<HTMLElement>) {
  scrollTo(element.current, 1000);
}

export function HeroSection({ refPortfolio, refContact }: HeroSectionProps) {
  const ref = useRef<HTMLCanvasElement>();

  useEffect(() => {
    if (ref.current) {
      const animation = animateBackground(ref.current);

      return () => animation.stop();
    }
  }, [ref]);

  return (
    <div className={style.section}>
      <canvas ref={ref} className={style.canvas} />
      <div>
        <h1 className={style.header}>
          <span className={style.headerText}>Hello, I'm Yannick</span>
          <span>👋</span>
        </h1>
        <div className={style.subTitle}>
          &lt; Full-Stack Web Developer /&gt;
        </div>
        <p className={style.content}>
          I specialize in creating the <strong>scalable</strong> web application
          with a great user <strong>experience</strong>. Currently, I'm focused
          on building cool things to drive online success at{" "}
          <a
            href="https://group.one/"
            target="_blank"
            rel="noreferrer"
            className="fancy-link"
          >
            group.ONE
          </a>
          .
        </p>
        <div className={style.cta}>
          <button
            type="button"
            className="button primary"
            onClick={() => scrollToRef(refContact)}
          >
            Say Hello
          </button>
          <button
            type="button"
            className="button"
            onClick={() => scrollToRef(refPortfolio)}
          >
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
