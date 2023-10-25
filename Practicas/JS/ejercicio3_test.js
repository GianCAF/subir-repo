console.log("Ejercicio 3 test");

const cuadradoCuboData = [
  [7, 49, 343],
  [15, 225, 3375],
  [8, 64, 512],
  [12, 144, 1728],
  [30, 900, 27000]
];

cuadradoCuboData.forEach(element => {  
  const [cuadrado, cubo] = cuadradoCubo(element[0]);

  console.log(cuadrado === element[1] && cubo === element[2] ? "🟢" : "❌", 
              cuadrado, ", ", cubo, " | ", element[1], ", ", element[2]               
              );              
}); 