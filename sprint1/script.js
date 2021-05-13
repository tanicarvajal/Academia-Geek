var cantidad = 0;
var descuentouno = 0.15;
var descuentodos = 0.25;
var descuentotres = 0.35;
var nodescuento = 0;
var textodescuento = "";
var descuento = 0;

function Calcular(){
    cantidad = document.getElementById("idCantidad").value;
    console.log(cantidad);
    precio = 820000;
    
    valorcompra = cantidad * precio;
    console.log('Valor de compra es: '+valorcompra)
    document.getElementById('valor_compra').value = valorcompra;

    if(valorcompra >=precio*2 && valorcompra <=precio*4){
        descuento = valorcompra * descuentouno;
        textodescuento = "Su descuento fue de 15%";
    }
    else if(valorcompra > precio*4 && valorcompra <=precio*8){
        descuento = valorcompra * descuentodos;
        textodescuento = "Su descuento fue de 25%";
    }
    else if(valorcompra > precio*8 && valorcompra <= precio*12){
        descuento = valorcompra * descuentotres;
        textodescuento = "Su descuento fue de 35%";
    }
    else{
        descuento =  nodescuento;
        textodescuento = "Descuento no disponible";
    }

    document.getElementById('valordescuento').value = descuento;
    document.getElementById("porcentajedescuento").innerHTML= textodescuento;

    total = valorcompra - descuento;
    document.getElementById('total').value = total;
}