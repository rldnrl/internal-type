type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

const readonlyUser: MyReadonly<User> = {
  firstName: "Mark",
  lastName: "Thomas",
  age: 25,
};

// !Error. Cannot assign to 'firstName' because it is a read-only property
readonlyUser.firstName = "Test First Name"
