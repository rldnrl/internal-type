type MyExtract<T, U> = T extends U ? T : never;

type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

const user: MyExtract<User, { firstName: string; lastName: string }> = {
  firstName: "Mark",
  lastName: "Thomas",
  age: 23,
  email: "test@test.com",
};
