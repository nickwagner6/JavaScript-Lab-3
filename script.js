const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];
//2 -------------------------------------------------------------------------------------------------------------------------------------------------------
const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};
addSubmission(submissions, "Nick", 99, "11-23-2021");
console.log(submissions);

//3 -------------------------------------------------------------------------------------------------------------------------------------------------------
const deleteSubmissionByIndex = (array, index) => {
  // array.splice(2, 1);
};
deleteSubmissionByIndex(submissions);
console.log(submissions);

//4 -------------------------------------------------------------------------------------------------------------------------------------------------------
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  // array.splice(index, 1);
};
// deleteSubmissionByName(submissions, "Jack");
console.log(submissions);

//5 -------------------------------------------------------------------------------------------------------------------------------------------------------
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
editSubmission(submissions, 4, 1000);
console.log(submissions);

//6 -------------------------------------------------------------------------------------------------------------------------------------------------------
const findSubmissionByName = (array, name) => {
  return submissions.find((item) => {
    return item.name === name;
  });
};

console.log(findSubmissionByName(submissions, "Jill"));

//7 -------------------------------------------------------------------------------------------------------------------------------------------------------
const findLowestScore = (array) => {
  let currentLowest = array[0];
  array.forEach((item) => {
    if (item.score <= currentLowest) {
      currentLowest = item;
    }
  });
  return currentLowest;
};
console.log(findLowestScore(submissions));

//8 -------------------------------------------------------------------------------------------------------------------------------------------------------
const findAverageScore = (array) => {
  let sum = 0;
  array.forEach((item) => {
    sum = sum + item.score;
  });
};
console.log(findAverageScore(submissions));
