export const add = (string) => {
  if (string === "") return 0;

  const result = string.split(",").reduce((sum, str) => sum + +str, 0);

  return result;
};
