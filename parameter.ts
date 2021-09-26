type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type ParameterType1 = MyParameters<() => string>; // []

type ParameterType2 = MyParameters<(s: string) => void>; // [s: string]

type ParameterType3 = MyParameters<<T>(arg: T) => T>; // [arg: unknown]

declare function f1(arg: { a: number; b: string }): void;

type ParameterType4 = MyParameters<typeof f1>;

/*
  type ParameterType4 = [
    arg: {
      a: number;
      b: string;
    }
  ];
*/

type ParameterType5 = MyParameters<any>; // unknown[]

type ParameterType6 = MyParameters<never>; // never

// !Error. Type 'string' does not satisfy the constraint '(...args: any) => any'
type T6 = MyParameters<string>;

// !Error. Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// !Type 'Function' provides no match for the signature '(...args: any): any'
type T7 = MyParameters<Function>;
