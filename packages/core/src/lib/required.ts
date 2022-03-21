type MyRequired<T> = { [P in keyof T]-?: T[P] };

type User = {
  firstName?: string;
  lastName?: string;
  age?: number;
};

const requiredUser: MyRequired<User> = {
  firstName: "Mark",
  lastName: "Thomas",
  age: 23,
};
