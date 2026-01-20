// alert("Hola mundo hermoso y maravilloso");

function sumar() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    let resultado = 0;
    resultado = numero1 + numero2;


    let objResultado = document.getElementById("resultado");
    objResultado.innerHTML = resultado;
    // // alert(resultado);

}