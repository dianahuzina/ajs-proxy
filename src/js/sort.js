export default function orderByProps(obj, arr) {
  const propsArr = [];
  const objArr = [];

  for (let prop in obj) {
    if (!arr.includes(prop)) {
      objArr.push({ key: prop, value: obj[prop] });
    }
    else {
      propsArr.push({ key: prop, value: obj[prop] });
    }
  }
  
  objArr.sort((a,b) => {
    if (a.key > b.key) return 1;
    if (a.key < b.key) return -1;
  });

  const result = [...propsArr, ...objArr];

  return result;
}