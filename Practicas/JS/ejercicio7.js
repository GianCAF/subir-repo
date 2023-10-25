
function golfCode(par, Strokes){
    if ((par, Strokes)== false){
        return "Valor no valido"; 
    }

    if (Strokes == 1){
        return "Hole-in-one!";
    }else if(Strokes == 0 || par <=0){
        return"Valor no valido"
    }
    else if (Strokes <= par - 2){
        return"Eagle";
    }
    else if (Strokes == par-1){
        return "Birdie";
    }
    else if (Strokes == par){
        return"Par";
    }
    else if (Strokes == par + 1){
        return "Bogey";
    }
    else if (Strokes == par + 2){
        return "Double bogey";
    } 
    else if (Strokes >= par + 3 ){
        return "Go Home";
    }
}
