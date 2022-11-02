function getFullname(firstname, surname, useFormalName, gender) {
  const fullName = `${firstname} ${surname}`;
  if (useFormalName) {
    if (gender === 'male') {
      let formalName = `Lord ${fullName}`;
      return formalName;
    }
    return `Lady ${fullName}`;
  } else {
    return fullName;
  }
}

const fullname1 = getFullname('John', 'Doe', false, 'male');
const fullname2 = getFullname('Jane', 'Doe', true, 'female');

console.log(fullname1);
console.log(fullname2);
