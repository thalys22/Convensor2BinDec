function validaEntrada(input) {
  var valor = input.value;
  var validacao = /^[01]+$/; // A expressão regular para aceitar pelo menos um 0 ou 1

  !validacao.test(valor)
    ? (alert('Insira somente números 0 ou 1.'),
      (input.value = valor.slice(0, -1)))
    : null;
}
function converter() {
  var numeroInput = document.getElementById('input');
  var valor = numeroInput.value;

  // Se a validação passar, converter para decimal e atualizar o texto
  var numeroDecimal = parseInt(valor, 2);
  var textoAtual = document.getElementById('r');
  textoAtual.textContent = numeroDecimal;
}
