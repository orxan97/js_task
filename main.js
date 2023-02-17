const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
//map
const map1 = persons.map((persons) => persons.name);
console.log({ map1 });
const map2 = persons.map((persons) => persons.height);
console.log({ map2 });
const map3 = persons.map((persons) => ({
  name: persons.name,
  height: persons.height,
}));
console.log({ map3 });

const map4 = persons.map((persons) => persons.name.split(" ")[0]);
console.log({ map4 });

//reduce
let mapMethod = persons.map((persons) => parseInt(persons.mass));
let reducemethod = mapMethod.reduce(function (acc, total) {
  return acc + total;
});
console.log({ reducemethod });
let heightMap = persons.map((persons) => parseInt(persons.height));
let reduceHeight = heightMap.reduce(function (acc, total) {
  return acc + total;
});
console.log({ reduceHeight });

let mapEye = persons.map((persons) => persons.eye_color);
let reduceEye = mapEye.reduce((acc, value) => acc + value);
console.log(reduceEye.length);
let mapName = persons.map((persons) => persons.name);
let reduceName = mapName.reduce((acc, value) => acc + value);
console.log(reduceName.length);

//filter
let filterMethod = persons.filter((item) => parseInt(item.mass) > 100);
console.log(filterMethod);
let filterMethod2 = persons.filter((item) => item.height <= 200);
console.log(filterMethod2);
let filterMethod3 = persons.filter((item) => item.gender=="male");
console.log(filterMethod3);
let filterMethod4 = persons.filter((item) => item.gender=="female");
console.log(filterMethod4);
//sort

let sortMethod1 = persons.sort((a, b) => b.gender.localeCompare(a.gender));
console.log({ sortMethod1 });
let sortMethod2 = persons.sort((x, y) => Number(x.height) - Number(y.height));
console.log({ sortMethod2 });
let sortMethod3 = persons.sort((x, y) => Number(x.mass) - Number(y.mass));
console.log({ sortMethod3 });
let sortMethod4 =persons.sort(item =>item.name)
console.log({sortMethod4});

//every
let everyMethod1 =persons.every((item)=>item.height < 200);
console.log({everyMethod1});

let everyMethod2 = persons.every((item) => item.eye_color === "blue");
console.log({ everyMethod2 });

let everytMethod3 =persons.every((item)=>item.mass > 40);
console.log({everytMethod3});

let everyMethod4 = persons.every((item) => item.gender === "male");
console.log({ everyMethod4 });

//some
let getBySome1 = persons.some((persons) => persons.gender === "male");
console.log({ getBySome1 });
let getBySome2 = persons.some((item) => item.mass < 50);
console.log({ getBySome2 });
let getBySome3 = persons.some((item) => item.eye_color === "blue");
console.log({ getBySome3 });
let getBySome4 = persons.some((item) => item.height > 200);
console.log({ getBySome4 });
