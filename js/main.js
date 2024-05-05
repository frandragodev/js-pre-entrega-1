
function sortingHat() {

    let userName = prompt('Hola, ¿cómo te llamás?');

    let userNumber = parseInt(prompt(
        userName + `, soy el Sombrero Seleccionador.
        ¿Quieres saber a qué casa de Hogwarts perteneces, verdad?
        Elije un número del 1 al 4, y veré cuál es tu destino...
        Mis respuestas nunca serán las mismas, no podrás engañarme...`
    ));

    let randomHouse;

    if (userNumber === 1) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw";
        } else {
            randomHouse = "Slytherin";
        }
    } else if (userNumber === 2) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw";
        } else {
            randomHouse = "Slytherin";
        }
    } else if (userNumber === 3) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw";
        } else {
            randomHouse = "Slytherin";
        }
    } else if (userNumber === 4) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw";
        } else {
            randomHouse = "Slytherin";
        }
    } else {
        alert(`Vuelve a intentarlo.
        Debes ingresar un número del 1 al 4`);
        return;
    }

    alert("Hmm, difícil. Esto es MUY difícil.");
    alert("Veo que tienes valor, y una mente muy valiosa.");
    alert("Hay talento, sí. Y veo una sed de probarte a ti mismo.");
    alert("¿Pero dónde ponerte?...");
    alert("YA SÉ!");
    alert("Te pondré en..." + randomHouse.toUpperCase() + "!")
    console.log("Tu casa es" + " " + randomHouse)

}

sortingHat();