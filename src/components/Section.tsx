import React from "react";
import style from "./Section.module.less";
import classNames from "classnames";

declare type SectionProps = {
  title: string;
  titleNo: string;
  flipTitle?: boolean;
  children: React.ReactNode;
};

export function Section({ children, title, titleNo, flipTitle }: SectionProps) {
  return (
    <div className={style.section}>
      <h2
        className={classNames(
          style.header,
          flipTitle ? style.headerTitleRight : style.headerTitleLeft
        )}
      >
        <span className={style.headerNumber}>{titleNo}.</span> {title}
      </h2>

      <div className={style.content}>{children}</div>
    </div>
  );
}
