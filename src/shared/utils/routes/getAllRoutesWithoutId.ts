export const getAllRoutesWithoutId = (path: string) => {
  if (path.trim() === "/") {
    return ["/"];
  }
  return path
    .split("/")
    .map((_, i, routes) => routes.slice(0, i + 1).join("/"));
};
