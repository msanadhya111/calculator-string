export const add = (string) => {
    if (string === "") return 0;
    const numArray = string
    .split(/[,\n]/)
    .map((str) => +str)
    .filter((num) => !isNaN(num));
    const result = numArray.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    return result
  };