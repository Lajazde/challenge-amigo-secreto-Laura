// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

//Recuerda revisar que variables ya se están usando en tu archivo HTML

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert ("Debes ingresar un nombre para continuar");
        return;
    }
//Se ira agregando la información
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    redenrizarAmigos();
}

function redenrizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
//Apartir de aquí es como se empieza a mostrar el nombre agregado en la pantalla.
    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);

    }
}

function sortearAmigo(){
    if (amigo.length === 0) {
        alert("No tienes amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

}