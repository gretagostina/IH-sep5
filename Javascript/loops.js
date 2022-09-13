// Intro

// for
// while
// forEach
// map
// do while
// for in
// for of

// FOR LOOP

const animals = ["dog", "cat", "parrot", "cow", "cheetah", "horse"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i].toUpperCase());
}

// WHILE LOOP
let i = 0;
while (i < animals.length) {
  console.log(animals[i].toUpperCase());
  i++;
}

// FOR EACH
animals.forEach((element) => {
  console.log(element.toUpperCase());
});

// MAP;
const newAnimals = animals.map((element) => {
  const animalUpperCase = element.toUpperCase();
  console.log(animalUpperCase);
  return animalUpperCase;
});

// DO WHILE
let index = 0;
do {
  console.log(animals[index].toUpperCase());
} while (index > animals.length);

// FOR OF
for (const element of animals) {
  console.log(element.toUpperCase());
}

// FOR IN

const animals2 = {
  1: "Dog",
  2: "Cat",
  3: "Parrot",
  4: "Cow",
  5: "Cheetah",
  6: "Horse",
};
for (const key in animals) {
  console.log(animals[key].toUpperCase());
}
