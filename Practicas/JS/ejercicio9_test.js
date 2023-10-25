console.log("Ejercicio 9 test");


const tienData = [
  [499,499],
  [500,475],
  [1000,890],
  [7000,5740],
  [15000, 11250]
];

tienData.forEach(element => {
 const tienTest = desTienda(element[0]);

 console.log(tienTest === element[1] ? "🟢" : "❌",
 tienTest, " | ",
 element[1]
);
});

