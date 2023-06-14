import React from "react";
import style from "./PortfolioSection.module.less";
import thumbMinimovers from "../../images/minimovers.webp";
import thumbPrentApp from "../../images/prentapp.webp";
import thumbPortfolioSite from "../../images/portfoliosite.webp";
import iconGithub from "../../images/icons/github.svg";
import iconPlaystore from "../../images/icons/playstore.svg";
import iconOpenInNew from "../../images/icons/open_in_new.svg";
import classNames from "classnames";
import { Section } from "./Section";
import { Icon } from "./Icon";
import { ToolTip } from "./ToolTip";

function Minimovers() {
  return (
    <div className={style.project}>
      <img src={thumbMinimovers} alt="Minimovers website thumbnail" />
      <div>
        <div className={style.projectBadge}>
          <span>&lt; Featured Project /&gt;</span>
        </div>
        <h3>Minimovers.nl &mdash; Full stack project</h3>
        <p>
          A website for a miniature collector of Cattepillar machines. Has a
          categorized collection, blog functionality, events calendar, and more
          features. All is manageable from a custom admin panel and in two
          languages
        </p>
        <p>
          I built the site from the ground up from an existing Figma design
          file, using Symfony as a backend framework using PHP.
        </p>
        <div className={style.projectTech}>
          <span className="skill-badge">PHP</span>
          <span className="skill-badge">TypeScript</span>
          <span className="skill-badge">Symfony</span>
        </div>
        <div className={style.projectLinks}>
          <a className={style.projectLink}>
            <ToolTip title={"Available upon request"}>
              <Icon icon={iconGithub} disabled={true} />
            </ToolTip>
          </a>
          <a
            className={style.projectLink}
            href="https://minimovers.nl/"
            target="_blank"
            rel="noreferrer"
            aria-label="Minimovers.nl home page"
          >
            <Icon icon={iconOpenInNew} />
          </a>
        </div>
      </div>
    </div>
  );
}

function PrentApp() {
  return (
    <div className={classNames(style.project, style.flipped)}>
      <img src={thumbPrentApp} alt="Prent website and app thumbnail" />
      <div>
        <div className={style.projectBadge}>
          <span>&lt; Featured Project /&gt;</span>
        </div>
        <h3>Prent.app &mdash; Comic Platform</h3>
        <p>
          A mobile app and subscription service for reading unlimited comics on
          the go. Has a tenant based backend for approved business to upload
          content. Has a revenue sharing model like that of Spotify.
        </p>
        <p>
          I built this together with a UX/UI designer as a startup idea. Mobile
          app uses Flutter for both Android and iOS targeting. Assets are stored
          in an S3 bucket and also has a CDN written in GO with local caching
          for image serving. Backend and website is build in Symfony using PHP.
        </p>
        <div className={style.projectTech}>
          <span className="skill-badge">PHP</span>
          <span className="skill-badge">Go</span>
          <span className="skill-badge">Symfony</span>
          <span className="skill-badge">Flutter</span>
          <span className="skill-badge">S3</span>
        </div>
        <div className={style.projectLinks}>
          <a className={style.projectLink}>
            <ToolTip title={"Available upon request"}>
              <Icon icon={iconGithub} disabled={true} />
            </ToolTip>
          </a>
          <a className={style.projectLink}>
            <ToolTip title={"Available upon request"}>
              <Icon icon={iconPlaystore} disabled={true} />
            </ToolTip>
          </a>
          <a
            className={style.projectLink}
            href="https://prent.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Prent.app home page"
          >
            <Icon icon={iconOpenInNew} />
          </a>
        </div>
      </div>
    </div>
  );
}

function PortfolioSite() {
  return (
    <div className={classNames(style.project)}>
      <img src={thumbPortfolioSite} alt="My portfolio website" />
      <div>
        <div></div>
        <h3>My portfolio website</h3>
        <p>
          Site you are currently viewing which is my little spot on the
          internet. Here is where I showcase my recent projects and allows me to
          link to other platforms.
        </p>
        <p>
          The site has been designed and build by myself and created as a test
          site to create something in React but ended up as the first version of
          my portfolio. It is deployed using Github actions to github pages for
          hosting.
        </p>
        <div className={style.projectTech}>
          <span className="skill-badge">React</span>
          <span className="skill-badge">TypeScript</span>
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">LESS</span>
          <span className="skill-badge">Github</span>
        </div>
        <div className={style.projectLinks}>
          <a
            className={style.projectLink}
            href="https://github.com/yannickl88/portfolio"
            target="_blank"
            rel="noreferrer"
            aria-label="Portfolio Github link"
          >
            <Icon icon={iconGithub} />
          </a>
          <a
            className={style.projectLink}
            href="https://yannickdelange.nl/"
            target="_blank"
            rel="noreferrer"
            aria-label="Portfolio home page"
          >
            <Icon icon={iconOpenInNew} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <Section title={"Portfolio"} titleNo={"02"} flipTitle={true}>
      <Minimovers />
      <div className="separator"></div>
      <PrentApp />
      <div className="separator"></div>
      <PortfolioSite />
    </Section>
  );
}
