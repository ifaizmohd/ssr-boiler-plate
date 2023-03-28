export function getNameWithoutExtension(name: string) {
  if (!name) return "";
  return name?.split(".")[0];
}
