module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBrackets = []
  let closedBrackets = []
  let matchingBrackets = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closedBrackets.push(bracketsConfig[i][1]);
    matchingBrackets[closedBrackets[i]] = openBrackets[i];
  };

  for (let char of str) {
    if (openBrackets.includes(char)) {
      if (stack.includes(char) && openBrackets.includes(char) && closedBrackets.includes(char)) {
        stack.pop();
        continue;
      }
      stack.push(char);
    } else if (closedBrackets.includes(char)) {
      if (stack.length === 0) {
        return false;
      } else if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}