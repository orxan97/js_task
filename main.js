const persons = [
  {
    id: 1,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 2,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 3,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041,
  },
  {
    id: 4,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "female",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012,
  },
];

const foundId = persons.find(item=> item.id==2)
console.log(foundId, 2)

const getByGender = persons.filter((item) => item.gender == "male");

console.log({ getByGender });

const objData = {
  id: 0,
  firstname: "orxan",
  lastname: "aslanov",
  image: "url",
  birthday: "08.19.1997",
  gender: "male",
  hobbie: ["football", "run"],
  nationality: "canda",
  friends: [35435, 32536],
  residence: 1234,
};

persons.unshift(objData);
console.log({ persons });

const pushData = {
  id: 5,
  firstname: "hemid",
  lastname: "jamilli",
  image: "url",
  birthday: "08.03.1995",
  gender: "male",
  hobbie: ["football", "run"],
  nationality: "canda",
  friends: [35435, 32536],
  residence: 1234,
};
persons.push(pushData);
console.log({ persons });

const arraySome = persons.some((item) => item.gender == "female");
console.log({ arraySome });
const arrayEvery = persons.every((item) => item.gender == "female");
console.log({ arrayEvery });
