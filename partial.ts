type MyPartial<T> = { [P in keyof T]?: T[P]; }

type User = {
  firstName: string
  lastName: string
  age: number
}

const partialUser: MyPartial<User> = {
  firstName: "David",
  lastName: "Thomas",
  age: 25
}

type Product = {
  price: number
  description: string
}

const product: MyPartial<Product> = {
  price: 120000
}
