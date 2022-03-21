type MyOmit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

const omitUser: MyOmit<User, "age"> = {
  firstName: "Mark",
  lastName: "Thomas",
};
