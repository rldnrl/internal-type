type MyInstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;

class Point {
  x = 0;
  y = 0;
}

type InstanceType0 = MyInstanceType<typeof Point>; // Point

type InstanceType1 = MyInstanceType<any>; // any

type InstanceType2 = MyInstanceType<never>; // never

// !Error. Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
type InstanceType3 = MyInstanceType<string>;

// !Error. Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// !Error. Type 'Function' provides no match for the signature 'new (...args: any): any'.
type T4 = MyInstanceType<Function>;
