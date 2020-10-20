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
    campo.innerHTML = "Campo invalido";
  } else {
    campo.classList.remove("active");
    campo.innerHTML = "";
  }
}
