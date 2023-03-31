import React from "react";
import { Section } from "./Section";
import style from "./ContactSection.module.less";
import iconGithub from "../../images/icons/github.svg";
import iconLinkedin from "../../images/icons/linkedin.svg";
import { Icon } from "./Icon";
import classNames from "classnames";

export function ContactSection() {
  return (
    <Section title={"Contact"} titleNo={"03"}>
      <div className={style.splitBanner}>
        <div>
          <p>
            I'm currently not actively looking for new opportunities, but if you
            want to reach with a question or just want to say hello; Drop
            something in the form here.
          </p>
          <p>
            If you interested in my <strong>resume</strong> or other
            work-related information. I recommend checking out my LinkedIn page.
          </p>
          <div className={style.socials}>
            <a
              href="https://www.linkedin.com/in/yannick-de-lange/"
              className="button button-icon"
              rel="noreferrer"
              target="_blank"
            >
              <Icon icon={iconLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/yannickl88"
              className="button button-icon"
              rel="noreferrer"
              target="_blank"
            >
              <Icon icon={iconGithub} />
              <span>Github</span>
            </a>
          </div>
        </div>
        <div className={classNames("separator", style.separator)}></div>
        <div>
          <form className="form" action={CONTACT_FORM_URL} method="POST">
            <div className="form-row">
              <input
                type="email"
                title="email"
                placeholder="&lt; E-mail /&gt;"
              />
            </div>
            <div className="form-row">
              <textarea
                title="message"
                placeholder="&lt; Epic Message /&gt;"
              ></textarea>
            </div>
            <div className="form-row">
              <button type="submit" className="button primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
