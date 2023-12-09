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

//
const func3 = () => {
  const table = {
    A: '4',
    E: '3',
    G: '6',
    I: '1',
    O: '0',
    S: '5',
    Z: '2',
    T: '7',
  };
  const text = lines[0];
  const reg = /[AEGIOSZT]/gi;
  const result = text.replace(reg, (t) => table[t] || t);
  console.log(result);
};
