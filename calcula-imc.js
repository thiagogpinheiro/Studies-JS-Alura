// peso / altura*altura


/*var peso2 = document.getElementById("peso-2");
var altura2 = document.getElementById("altura-2");

var paciente2 = {"peso" : peso2.textContent, "altura" : altura2.textContent};

var peso1 = document.getElementById("peso-1");
var altura1 = document.getElementById("altura-1");

var paciente1 = {"peso" : peso1.textContent, "altura" : altura1.textContent};


var pacientes = [paciente1,paciente2];
*/
var nossosTrs = document.getElementsByClassName("paciente");

for(var posicaoDoTrAtual = 0; posicaoDoTrAtual <= nossosTrs.length - 1; posicaoDoTrAtual++){
    var trAtual = nossosTrs[posicaoDoTrAtual];
    var nomeTd = trAtual.getElementsByClassName("info-nome")[0]; // pega tr do nome do paciente atual
    var pesoTd = trAtual.getElementsByClassName("info-peso")[0]; // pega tr do peso do paciente atual
    var alturaTd = trAtual.getElementsByClassName("info-altura")[0]; // pega tr do altura do paciente atual
    var imcTd = trAtual.getElementsByClassName("info-imc")[0]; // pega tr do imc do paciente atual

    var paciente = {
        nome : nomeTd.textContent,
        peso : pesoTd.textContent,
        altura : alturaTd.textContent
    }

    if(paciente.altura != 0){
        var imcDoPaciente = paciente.peso / (paciente.altura * paciente.altura);

        imcTd.textContent = imcDoPaciente;

        console.log(imcDoPaciente); // 25
    }else{
        console.log("Não posso executar uma divisão por 0!");
    }

}
	



