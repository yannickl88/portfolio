import React from "react";
import style from "./AboutSection.module.less";
import classNames from "classnames";
import gif from "../../images/parrot-party.gif";
import avatar from "../../images/avatar.webp";
import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section title={"About"} titleNo={"01"}>
      <div className={style.content}>
        <div className={classNames(style.splitBanner, style.splitBanner1)}>
          <div>
            <p>
              When it comes to creating the best web applications, I like to
              focus on <strong>usability</strong> and <strong>quality</strong>.
              This means working closely together with{" "}
              <strong>UX and UI designers</strong>, talking with{" "}
              <strong>Product Managers</strong>, and delivering code which has
              been <strong>tested</strong> both by <strong>unit tests</strong>{" "}
              and <strong>QA testers</strong>.
            </p>
            <p>
              I feel most comfortable in an environment that gives me the trust
              to build the right thing, I will take care of the rest by reaching
              out to stakeholder to get the right information and building what
              is needed.
            </p>
            <p>
              Also, I put animated gifs in PowerPoint presentations.{" "}
              <img
                src={gif}
                alt="Dancing parrot animated gif"
                className={style.gif}
              />
            </p>
          </div>
          <div>
            <p className={style.skillsTitle}>&lt; Toolbelt /&gt;</p>
            <div className={style.skills}>
              <span className="skill-badge">PHP</span>
              <span className="skill-badge">Symfony</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">Angular</span>
              <span className="skill-badge">Less</span>
              <span className="skill-badge">HTML</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Java</span>
              <span className="skill-badge">MySQL</span>
              <span className="skill-badge">CSS</span>
              <span className="skill-badge">OpenAPI</span>
              <span className="skill-badge">Go</span>
              <span className="skill-badge">Unit Testing</span>
            </div>
          </div>
        </div>

        <div className={classNames(style.splitBanner, style.splitBanner2)}>
          <div className={style.avatar}>
            <img src={avatar} alt="Photo of me" />
          </div>
          <div>
            <p>
              Besides all the technical stuff, I live in The Netherlands. I love
              traveling to explore different cultures and food. When at home I
              like to cook a good meal for friends and family, or just lay back
              and watch a good movie or tv-show.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
