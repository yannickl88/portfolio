import React from "react";
import style from "./Footer.module.less";
import iconReact from "../../images/icons/react.svg";
import iconTypescript from "../../images/icons/typescript.svg";
import iconLess from "../../images/icons/less.svg";
import iconWebpack from "../../images/icons/webpack.svg";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div>Designed & Build by Yannick de Lange</div>
        <div className={style.techStack}>
          Technologies used:
          <div className={style.techs}>
            <a
              href="https://react.dev/"
              rel="noreferrer"
              target="_blank"
              className="skill-badge skill-badge-icon"
            >
              <Icon icon={iconReact} />
              React
            </a>
            <a
              href="https://www.typescriptlang.org/"
              rel="noreferrer"
              target="_blank"
              className="skill-badge skill-badge-icon"
            >
              <Icon icon={iconTypescript} />
              TypeScript
            </a>
            <a
              href="https://lesscss.org/"
              rel="noreferrer"
              target="_blank"
              className="skill-badge skill-badge-icon"
            >
              <Icon icon={iconLess} />
              Less
            </a>
            <a
              href="https://webpack.js.org/"
              rel="noreferrer"
              target="_blank"
              className="skill-badge skill-badge-icon"
            >
              <Icon icon={iconWebpack} />
              Webpack
            </a>
          </div>
          <div className={style.sourceCode}>
            Check out the source code at{" "}
            <a
              href="https://github.com/yannickl88/portfolio"
              rel="noreferrer"
              target="_blank"
            >
              github.com
            </a>
            .
          </div>
        </div>
        <div className={style.copyright}>
          &copy; 2023 &mdash; Yannick de Lange
        </div>
      </div>
    </div>
  );
}
