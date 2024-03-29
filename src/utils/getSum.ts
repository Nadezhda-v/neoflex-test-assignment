export const getSum = <T extends number>(arr: Array<T>): number =>
  arr.reduce((prev, next) => prev + next, 0);
