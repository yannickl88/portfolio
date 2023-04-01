const iconLoaders = new Map<string, Promise<string>>();

let loader: Promise<string>;

export function loadIcon(icon: string): Promise<string> {
  if (iconLoaders.has(icon)) {
    return iconLoaders.get(icon);
  }
  loader = fetch(icon).then((r) => {
    if (r.ok) {
      return r.text();
    }

    console.warn(`Failed to load SVG icon, got error "${r.statusText}".`);
    return "";
  });

  iconLoaders.set(icon, loader);

  return loader;
}
