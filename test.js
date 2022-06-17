let data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

// let highestExpense = data.reduce((acc, cur) => {
//     return cur.amount > acc ? acc = cur.amount : acc;
// }, 0)

// console.log(highestExpense);

let today = new Date();
let todayIs = today.getDay();
let days = data.map(item => item.day);
let dayOfWeek = days[todayIs - 1];
console.log(todayIs);