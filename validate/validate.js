function validaSenha(event) {
  //console.log(event.target);
  let input = event.target.value;
  let NumberInput = input.split("");
  // console.log(NumberInput);
  //console.log("entrou");
  let campos = document.querySelectorAll("span.error");
  let campo = campos[1];

  if (
    (NumberInput.length < 4 || NumberInput.length > 12) &&
    NumberInput.length > 0
  ) {
    //console.log(campo[1]);
    // console.log(campo[1].classList.add("active"));
    campo.classList.add("active");
    campo.innerHTML = "A senha deve ser >4 ou <12 dígitos";
  } else {
    const error = event.target.validity;
    testError(error, 1, "senha");
  }
}

function validaEmail(event) {
  console.log(event.target.validity);
  const error = event.target.validity;
  testError(error, 0, "email");
}

function testError(error, indece, name) {
  let campos = document.querySelectorAll("span.error");
  let campo = campos[indece];
  console.log(error.typeMismatch);

  if (error.typeMismatch === true) {
    campo.classList.add("active");
    campo.innerHTML = name + " inválido";
  } else if (error.valueMissing === true) {
    campo.classList.add("active");
    campo.innerHTML = name + " obrigatório";
  } else {
    campo.classList.remove("active");
    campo.innerHTML = "";
  }
}
