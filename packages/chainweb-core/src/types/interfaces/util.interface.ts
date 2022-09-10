export type SubSet<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};

export type Equal<T, U> = (<G>() => G extends T ? true : false) extends <G>() => G extends U
  ? true
  : false
  ? true
  : false;

export type If<T, R, U = never> = T extends true ? R : U;
