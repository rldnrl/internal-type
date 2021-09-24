type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

type User = {
  firstName: string;
  lastName: string;
  age: number;
};

const readonlyUser: MyReadonly<User> = {
  firstName: "David",
  lastName: "Thomas",
  age: 25,
};

// !Error. Cannot assign to 'firstName' because it is a read-only property
// readonlyUser.firstName = "Test First Name"
// readonlyUser.lastName = "Test Last Name"
// readonlyUser.age = 10
