console.log("Ejercicio 1");
function ejercicio1(radio,altura){
    let área = 2 * Math.PI * (radio + altura);
    let volumen = Math.PI * (radio**2) * altura;
    return [área.toFixed(2), volumen.toFixed(2)]
}
