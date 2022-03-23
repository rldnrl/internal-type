type MyRecord<K extends string | number | symbol, T> = { [P in K]: T };

type CatNames = "miffy" | "boris" | "mordred";

type CatsInfo = MyRecord<CatNames, { age: number }>;

const cats: CatsInfo = {
  miffy: { age: 5 },
  mordred: { age: 2 },
  boris: { age: 5 },
};
