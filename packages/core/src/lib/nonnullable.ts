type MyNonNullable<T> = T extends null ? never : T;

type User = {
  firstName: string;
  lastName: string;
  age: 23;
  email: string | null;
};

const nonNullableUser: MyNonNullable<User> = {
  firstName: "Mark",
  lastName: "Thomas",
  age: 23,
  email: "test@test.com",
};

type Product = {
  name: string;
  price: number;
  description?: string;
};

const nonUndefinedProduct: MyNonNullable<Product> = {
  name: "MacBook Pro",
  price: 2100000,
  description: "This is MacBook Pro",
};
