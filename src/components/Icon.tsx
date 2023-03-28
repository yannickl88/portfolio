import React, { useEffect, useState } from "react";
import classNames from "classnames";

declare type IconProps = { icon: string; disabled?: boolean };

const iconLoaders = new Map<string, Promise<string>>();

export function Icon({ icon, disabled }: IconProps) {
  const [iconData, setIconData] = useState(undefined);

  useEffect(() => {
    let loader: Promise<string>;

    if (iconLoaders.has(icon)) {
      loader = iconLoaders.get(icon);
    } else {
      loader = fetch(icon).then((r) => {
        if (r.ok) {
          return r.text();
        }
        return Promise.reject(r.statusText);
      });

      iconLoaders.set(icon, loader);
    }

    loader.then((d) => setIconData(d));
  }, []);

  return (
    <div
      className={classNames("icon", disabled ? "disabled" : null)}
      dangerouslySetInnerHTML={{ __html: iconData }}
    ></div>
  );
}
