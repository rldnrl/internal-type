type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

type Product = {
  price: number;
  description: string;
  company: string;
};

type PickProduct = MyPick<Product, "price" | "description">;

const pickProduct: PickProduct = {
  price: 100000,
  description: "MacBook Pro",
};
