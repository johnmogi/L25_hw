
let cat = { // Literal Object
    name: "Mitsi",
    age: 4
};

console.log(cat.name);
console.log(cat.age);

const str = JSON.stringify(cat);
console.log(str);
console.log(typeof cat);
console.log(typeof str);

let cat2 = JSON.parse(str);
console.log(cat2.name);
console.log(cat2.age);

console.log("---------------")

let cats = [{name: "Mitsi", age: 4}, {name: "Kitsi", age: 5}, {name: "Pitsi", age: 6}];
let arrString = JSON.stringify(cats);
let cats2 = JSON.parse(arrString);
console.log(typeof cats);
console.log(typeof arrString);
console.log(typeof cats2);

alert(cats);
alert(arrString);



