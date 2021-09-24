type MyExclude<T, U> = T extends U ? never : T;

type T0 = MyExclude<string | number, number>; // string

type T1 = MyExclude<"a" | "b" | "c", "b" | "d">; // "a" | "c"

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

const excludedEmailUser: MyExclude<User, { email: string }> = {
  firstName: "Mark",
  lastName: "Thomas",
  age: 23,
};
