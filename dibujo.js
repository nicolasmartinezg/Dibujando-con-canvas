var d= document.getElementById("dibujito");
var lienzo= d.getContext("2d");

var texto= document.getElementById("numLineas");
var boton= document.getElementById("btn");

boton.addEventListener("click",dibujoPorClick);
 




function dibujoPorClick(){
    var txt = texto.value;
  

    for(var i=0;i<txt;i++){
        var yi= 10*i;
        var xf= 10*(i+1);
        dibujarLinea("#AAF",0,yi,xf,500);
        dibujarLinea("red",yi,500,0,xf);
    }
    
    for(var i=0;i<txt;i++)
    {
        var yi1= 10*i;
        var xf1= 500-(i*10)
        dibujarLinea("yellow",0,yi1,xf1,0);
        dibujarLinea("green",yi1,500,500,xf1);
    }
    dibujarLinea("#AAF",1,1,1,499);
    dibujarLinea("#AAF",1,499,499,500);
    
    dibujarLinea("red",499,1,1,1);
    dibujarLinea("red",500,499,499,1);
}


function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    //PASOS PARA DIBUJAR EN EL CANVAS
    lienzo.beginPath();
    //COLOR DE LA LINEA
    lienzo.strokeStyle= color;
    //PUNTO DONDE INICIA
    lienzo.moveTo(xinicial,xfinal);
    //PUNTO DONDE FINALIZA 
    lienzo.lineTo(yinicial,yfinal);
    //TRAZA LA LINEA 
    lienzo.stroke();
    //TERMINA DE DIBUJAR
    lienzo.closePath();
}

