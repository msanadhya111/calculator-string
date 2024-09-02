export const add = (string) => {
    if (string === "") return 0;
    const delimiterPattern = /\/\/(.+)\n/;

    const delimiterMatch = string.match(delimiterPattern);
  
    let splitPattern = /[,\n]+/;
  
    if (delimiterMatch) {
      const delimiterString = delimiterMatch[1];
      splitPattern = new RegExp(`[${delimiterString}\\n]+`);
      string = string.replace(delimiterPattern, "");
    }
  
    const numbersArray = string
      .split(splitPattern)
      .filter((str) => str.trim() !== "")
      .map((str) => parseFloat(str));
  
      const negativeNumbers = [];
      const result = numbersArray.reduce((acc, cur) => {
        if (cur < 0) negativeNumbers.push(cur);
        return acc + cur;
      }, 0);
      if (negativeNumbers.length > 0)
        throw new Error(`negative numbers not allowed ${negativeNumbers}`);
    return result;
  };