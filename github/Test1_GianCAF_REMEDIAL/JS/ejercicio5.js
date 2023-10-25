function ejercicio5(Precio_basico){
    if(Precio_basico<=20){
        Precio_Total = Precio_basico;
    }else if(Precio_basico<=40){
        impuesto = Precio_basico * .3;
        Precio_Total = Precio_basico + impuesto;
    }else if(Precio_basico<=500){
        impuesto = Precio_basico * .4;
        Precio_Total = Precio_basico + impuesto;
    }else{
        impuesto = Precio_basico * .5;
        Precio_Total = Precio_basico + impuesto;
    }
    return Precio_Total.toFixed(2);
}


