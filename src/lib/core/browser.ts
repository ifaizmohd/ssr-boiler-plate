export function isBrowser() {
  try {
    return window && true;
  } catch (error) {
    return false;
  }
}
