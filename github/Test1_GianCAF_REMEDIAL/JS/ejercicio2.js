function ejercicio2(segundos) {
    HH = Math.floor(segundos / 3600);
    MM = Math.floor((segundos % 3600) / 60);
    SS = segundos % 60;
  
    return HH.toString() + ":" + MM.toString() + ":" + SS.toString();
  }

