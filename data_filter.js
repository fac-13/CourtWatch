const cd = require('./courts_dump');

const courtNamesArr = cd.courts.map(item => item.name);

const courtNamesSet = new Set(courtNamesArr);

const uniqueCourtNames = Array.from(courtNamesSet);

console.log(uniqueCourtNames === courtNamesArr);

console.log(courtNamesArr.length, uniqueCourtNames.length);

const sortedCourtNames = courtNamesArr.slice().sort();

const results = [];
for (let i = 0; i < sortedCourtNames.length - 1; i += 1) {
  if (sortedCourtNames[i + 1] === sortedCourtNames[i]) {
    results.push(sortedCourtNames[i]);
  }
}

console.log(results);

// const falseCourts = cd.courts
//   .map(item => [item.name, item.display])
//   .filter(subArr => subArr[1] === false);

// console.log(falseCourts.length);
