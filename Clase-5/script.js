var cantidad = 0;
var salario = 0;
var extra = 0;
function Calcular(){
    cantidad = document.getElementById('idCantidad').value;
   console.log(cantidad);
  if(cantidad>=1 && cantidad <=40){
    salario = cantidad * 16000;
    document.getElementById('salario').value = salario;
    document.getElementById('salarioextra').value = 0;
    document.getElementById('total').value = salario;   
  }
  else{
    extra = cantidad - 40;
    salario = (extra*20000) + (40*16000);
    console.log(salario);
    document.getElementById('salario').value = 40*16000;
    document.getElementById('salarioextra').value = extra*20000;
    document.getElementById('total').value = salario;
  }
}