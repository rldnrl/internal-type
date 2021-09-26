type MyThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;

function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: MyThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}
