//realice un programa que lleve a cabo un descuento a los clientes de una tienda
//utilizando el siguiente criterio

function desTienda(monto){
    if(monto<500){
        return monto;
    }else if(monto >=500 && monto < 1000){
        des = monto * 0.05;
        t = monto - des;
        return t;    
    }else if(monto>=1000 && monto < 7000){
        des = monto * 0.11;
        t = monto - des;
        return t;
    }else if(monto>=7000 && monto < 15000){
        des = monto * 0.18;
        t = monto - des;
        return t;
    }else {
        des = monto * 0.25;
        t = monto - des;
        return t;
    }
}