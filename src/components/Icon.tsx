import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { loadIcon } from "../lib/icon-loader";

declare type IconProps = { icon: string; disabled?: boolean };

export function Icon({ icon, disabled }: IconProps) {
  const [iconData, setIconData] = useState(undefined);

  useEffect(() => {
    loadIcon(icon).then((d) => setIconData(d));
  }, []);

  return (
    <div
      className={classNames("icon", disabled ? "disabled" : null)}
      dangerouslySetInnerHTML={{ __html: iconData }}
    ></div>
  );
}
