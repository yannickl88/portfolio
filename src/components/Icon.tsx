import React from "react";
import classNames from "classnames";

declare type IconProps = { icon: string; disabled?: boolean };

export function Icon({ icon, disabled }: IconProps) {
  return (
    <div
      className={classNames("icon", disabled ? "disabled" : null)}
      dangerouslySetInnerHTML={{ __html: icon }}
    ></div>
  );
}
