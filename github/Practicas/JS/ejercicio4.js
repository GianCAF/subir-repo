console.log("Ejercicio 4");
/* 

 */

function distancia(x1,y1,x2,y2) {
    let d = Math.sqrt(((x1-x2)**2)+((y1-y2)**2));

    return  [[x1,y1,x2,y2], d.toFixed(2)];
}