type Required<T> = { [P in keyof T]-?: T[P]; }

type User = {
  firstName?: string
  lastName?: string
  age?: number
}

const requiredUser: Required<User> = {
  firstName: "David",
  lastName: "Thomas",
  age: 23
}
