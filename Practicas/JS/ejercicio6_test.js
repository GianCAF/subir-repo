console.log("Ejercicio 6 test");

const ejercicio6Data = [
  [2, 4, 4, 3.87],
  [4,5,6, 9.92],
  [7,8,9,26.83],
  [10,12,14,58.79],
  [16,20,24,158.75]
];

ejercicio6Data.forEach(element => {
  const superficieTest = superficie(element[0], element[1], element[2]);

  console.log(superficieTest === element[3] ? "🟢" : "❌",
    superficieTest, " | ",
    element[3]
  );
});