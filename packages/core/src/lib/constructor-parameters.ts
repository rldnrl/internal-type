type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

type ConstructorParametersType0 = MyConstructorParameters<ErrorConstructor>; // [message?: string]

type ConstructorParametersType1 = MyConstructorParameters<FunctionConstructor>; // string[]

type ConstructorParametersType2 = MyConstructorParameters<RegExpConstructor>; // [pattern: string | RegExp, flags?: string]

type ConstructorParametersType3 = MyConstructorParameters<any>; // unknown[]

// !Error. Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
// !Type 'Function' provides no match for the signature 'new (...args: any): any'.
type T4 = ConstructorParameters<Function>;
