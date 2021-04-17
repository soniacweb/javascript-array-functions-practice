const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(character => character.name)
// console.log(names)
//2. Get array of all heights
const heights = characters.map(character=> character.height)
// console.log(heights);
//3. Get array of objects with just name and height properties
const arrObj = characters.map(character=> ({name: character.name, height: character.height}))
console.log(arrObj);
//4. Get array of all first names
const firstNames = characters.map(character => character.name.split(' ')[0])
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const massSum = characters.reduce((a,b) => {return a + b.mass}, 0)
console.log(massSum)

//2. Get total height of all characters

const heightSum = characters.reduce((x,y) => {return x + y.height}, 0)
console.log(heightSum);

//3. Get total number of characters by eye color

//4. Get total number of characters in all the character names



//***FILTER***
//1. Get characters with mass greater than 100

const greaterThan100 = characters.filter(character => character.mass > 100)
console.log('greater', greaterThan100);
//2. Get characters with height less than 200
const heightLessThan200 = characters.filter(character => character.height < 200)
console.log('less than', heightLessThan200);

//3. Get all male characters
const males = characters.filter(character => character.gender === 'male')
console.log(males);

//4. Get all female characters
const females = characters.filter(character => character.gender === 'female')
console.log(females);

//***SORT***
//1. Sort by mass

const massSorting = characters.sort((a, b) => a.mass - b.mass)
console.log('sorting', massSorting);

//2. Sort by height
const heightSorting = characters.sort((a, b) => a.height - b.height)
console.log('heigt sorting', heightSorting);
//3. Sort by name
// nested ternary
const nameSorting = characters.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1:1:0)
console.log('name sorting', nameSorting);
//4. Sort by gender
const genderSorting = characters.sort((a, b) =>  a.gender < b.gender ? -1:1)
console.log('gender sorting', genderSorting);

//***EVERY***
//1. Does every character have blue eyes?
const blueEyes = characters.every(character => character.eye_color === 'blue')
console.log(blueEyes);

//2. Does every character have mass more than 40?
const massCheck = characters.every(character => character.mass > 40)
console.log(massCheck);

//3. Is every character shorter than 200?
const heightCheck = characters.every(character => character.height < 200)
console.log(heightCheck);

//4. Is every character male?
const genderCheck = characters.every(character => character.gender === 'male')
console.log(genderCheck);

//***SOME***
//1. Is there at least one male character?

const maleChar = characters.some(character => character.gender == 'male')
console.log('male?', maleChar);

//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(character => character.eye_color == 'blue')
console.log('blueEyes?', oneBlueEyes);

//3. Is there at least one character taller than 210?
const tallerthan210 = characters.some(character => character.height > 210)
console.log(tallerthan210);

//4. Is there at least one character that has mass less than 50?
const masslessthan50 = characters.some(character => character.mass < 50)
console.log(masslessthan50);