console.log("Ejercicio 8 test");


const swiData = [
  [1,10,1000],
  [2,3,1000000],
  [1, 5, 500],
  [2, 5, 10000000000],
  [3, 5, 20],
  [4, 5, 0],
  [0, 5, 0],
  [-1, 5, 0],
];

swiData.forEach(element => {
 const swiTest = devVal(element[0],element[1],element[2]);

 console.log(swiTest === element[2] ? "🟢" : "❌",
 swiTest, " | ",
 element[2]
);
});

