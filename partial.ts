type Partial<T> = { [P in keyof T]?: T[P]; }

type User = {
  firstName: string
  lastName: string
  age: number
}

const partialUser: Partial<User> = {
  firstName: "David",
  lastName: "Thomas",
  age: 25
}

type Product = {
  price: number
  description: string
}

const product: Partial<Product> = {
  price: 120000
}
