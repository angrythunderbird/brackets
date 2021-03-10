module.exports = function check(str, bracketsConfig) {

  bracketsConfig.forEach(function (i) {
    return i.reverse();
  });

  const bracesObj = Object.fromEntries(bracketsConfig);

  const bracesClose = Object.keys(bracesObj);
  const bracesOpen = Object.values(bracesObj);

  return str.split('').reduce((stack, item) => {
    bracesClose.includes(item) && stack[stack.length - 1] === bracesObj[item] ? stack.pop() : stack.push(item);
    return stack;
  }, []).length === 0;

};
