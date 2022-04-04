export type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T
