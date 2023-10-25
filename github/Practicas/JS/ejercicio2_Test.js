console.log("Ejercicio 2 test");

const promedioStudentData = [
  [10211233, [100, 70, 82, 50, 30, 90], "10211233 70.33"],
  [222223345, [95, 80, 59, 72, 65, 72], "222223345 73.83"],
  [22011981, [67, 19, 31, 94, 89, 99], "22011981 66.50"],
  [220111027, [57, 88, 98, 85, 69, 0], "220111027 66.17"]
];


promedioStudentData.forEach(element => {  
  const cadTest = promedioStudent(element[0], element[1]);

  console.log(cadTest === element[2] ? "🟢" : "❌", 
              cadTest, " | ", 
              element[2] 
              );              
});