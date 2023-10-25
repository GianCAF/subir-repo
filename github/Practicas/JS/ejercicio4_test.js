const distanciaData = [
    [[6,8,   4,-8,],   16.49],
    [[9,3,   -5,7,],   14.14],
    [[2,9,   0,7,],   2.83],
   [[-8,9,   6,8,],   14.14]
]

distanciaData.forEach(element => {  
        const DTest = distancia(element[0]);
      
        console.log(DTest === element[1] ? "🟢" : "❌", 
                    DTest, " | ", 
                    element[1] 
                    );              
      });


