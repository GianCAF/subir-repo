function ejercicio4(sueldo){
    if(sueldo<1000){
        Nuevo_sueldo = sueldo*1.15;
    }else{
        Nuevo_sueldo = sueldo*1.12;
    }
return Nuevo_sueldo.toFixed(2);
}