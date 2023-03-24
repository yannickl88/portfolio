import React, { useEffect, useMemo, useRef, useState } from "react";
import style from "./ToolTip.module.less";
import classNames from "classnames";

enum Positions {
  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
}

declare type ToolTipProps = {
  title: string;
  children: React.ReactNode;
};

const styleMap = [
  [style.tooltipTop, style.tooltipLeft],
  [style.tooltipTop, style.tooltipRight],
  [style.tooltipBottom, style.tooltipLeft],
  [style.tooltipBottom, style.tooltipRight],
];

export function ToolTip({ title, children }: ToolTipProps) {
  const ref = useRef<HTMLDivElement>();
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(window.scrollY);

  const position = useMemo(() => {
    if (!ref.current) {
      return Positions.TOP_LEFT;
    }

    const { top, left } = ref.current.getBoundingClientRect();
    const isAtTop = top < window.innerHeight / 2;
    const isAtLeft = left < window.innerWidth / 2;

    if (isAtTop) {
      if (isAtLeft) {
        return Positions.BOTTOM_LEFT;
      }
      return Positions.BOTTOM_RIGHT;
    }

    if (isAtLeft) {
      return Positions.TOP_LEFT;
    }
    return Positions.TOP_RIGHT;
  }, [ref, scroll]);

  useEffect(() => {
    function onScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={style.container}>
      <div
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
        ref={ref}
      >
        {children}
      </div>
      <div
        className={classNames(
          "tooltip",
          style.tooltip,
          active ? style.active : null,
          ...styleMap[position]
        )}
      >
        {title}
      </div>
    </div>
  );
}
