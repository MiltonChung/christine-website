export const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

export const toKebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
