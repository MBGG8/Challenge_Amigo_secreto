// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo");
  if (nombre.value.trim() === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombre.value);
    console.log(amigos);
    nombre.value = "";
    actulizarLista();
  }
}

function actulizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    alert("Recuerda, primero ingresa nombres de amigos");
    return;
  } else {
    let indice = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML += "<li>" + amigos[indice] + "</li>";

    console.log("Amigo elegido:", indice);
  }
}
