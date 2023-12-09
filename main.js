//
const func1 = () => {
  const data = 'input';
  const txt = data;
  const reg = /[aiueo]/gi;
  const result = txt.replace(reg, '');
  console.log(result);
};

//
const func2 = () => {
  const length = lines[0].length;
  const array = Array.from({ length: length + 2 }, () => '+');
  console.log(array.join(''));
  console.log('+' + lines[0] + '+');
  console.log(array.join(''));
};
