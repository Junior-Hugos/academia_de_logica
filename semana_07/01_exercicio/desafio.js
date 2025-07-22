const person = { name: "João", age: 17 };

const EhAdulto = (isAdult) => {
  return {
    ...person,
    isAdult: isAdult >= 18 ? true : false,
  };
};

console.log(EhAdulto(person.age));

console.log("-----------------------------------------------");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9, 10];

const combinaArray = (...arrays) => {
  return arrays.reduce((acc, curr) => {
    return [...acc, ...curr];
  }, []);
};
console.log("----------------EXEMPLOS ARRAY-------------------------------");
console.log(combinaArray(arr1, arr2));
console.log("-----------------------------------------------");
console.log(combinaArray(arr1, arr2, arr3));
console.log("-----------------------------------------------");
console.log(combinaArray(arr1, arr3));
console.log("-----------------------------------------------");
console.log(combinaArray(arr2, arr3));
