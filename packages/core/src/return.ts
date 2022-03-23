type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

declare function f1(): { a: number; b: string };

type ReturnType0 = MyReturnType<() => string>; // string

type ReturnType1 = MyReturnType<(s: string) => void>; // void

type ReturnType2 = MyReturnType<<T>() => T>; // unknown

type ReturnType3 = MyReturnType<<T extends U, U extends number[]>() => T>; // number[]

/*
  type T4 = {
    a: number;
    b: string;
  }
*/
type ReturnType4 = MyReturnType<typeof f1>;

type ReturnType5 = MyReturnType<any>; // any

type ReturnType6 = MyReturnType<never>; // never

// !Error. Type 'string' does not satisfy the constraint '(...args: any) => any'.
type ReturnType7 = MyReturnType<string>;

// !Error. Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// !Type 'Function' provides no match for the signature '(...args: any): any'.
type ReturnTypeT8 = MyReturnType<Function>;
