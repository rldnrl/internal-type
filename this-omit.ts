type MyOmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T;

function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: MyOmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());
