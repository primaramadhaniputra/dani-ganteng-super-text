declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css?raw' {
  const css: string;
  export default css;
}