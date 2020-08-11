export const isEmpty = (obj: any) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
