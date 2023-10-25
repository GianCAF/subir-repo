console.log("Ejercicio 7 test");


const golfCodeData = [
  [3, 1, "Hole-in-one!"],
  [5, 3, "Eagle"],
  [4, 3, "Birdie"],
  [4, 4, "Par"],
  [4, 5, "Bogey"],
  [4, 6, "Double bogey"],
  [4, 7, "Go Home"],
  [0, 5, "Valor no valido"],
];

golfCodeData.forEach((testCase) => {
  const [par, strokes, expected] = testCase;
  const result = golfCode(par, strokes);

  console.log(
    result === expected ? "🟢" : "❌",
     result, "|",
     expected
  );
});
