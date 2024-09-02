export const add = (string) => {
    if (string === "") return 0;
    let result = 0;
    const values = string.split(",");
    for (const value of values) {
      result = result + parseInt(value);
    }
    return result;
  };