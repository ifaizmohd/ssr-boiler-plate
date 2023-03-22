export function promised(entity: any) {
  function promisified(res: Function, rej: Function) {
    if (entity) {
      res(entity);
    } else {
      rej(null);
    }
  }
  return new Promise(promisified);
}
