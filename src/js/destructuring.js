export default function specialAttacks(obj) {
  const arr = [];

  for (let item in obj.special) {
    const { id, name, description, icon } = obj.special[item];

    //if (obj.special[item].hasOwnProperty('description')) {
    if ('description' in obj.special[item]) {
      arr.push({ id, name, description, icon })
    }
    else {
      arr.push({ id, name, description: 'Описание недоступно', icon })
    }
  }

  return arr;
}