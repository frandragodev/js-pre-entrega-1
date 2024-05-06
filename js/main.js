
function sortingHat() {

    alert("Juego del Sombrero Seleccionador de Hogwarts.\n¿A qué casa perteneces?\nTendrás que elegir un número del 1 al 4 para saberlo.");

    let userName;
    while (!userName) {
        userName = prompt("Hola, ¿cómo te llamás?");
        if (!userName) {
            alert("Para continuar, ingresa tu nombre.");
        }
    }

    console.log("Estudiante de Hogwarts:" + " " + userName);

    let userNumber;
    while (!userNumber) {
        userNumber = parseInt(prompt(userName + ", soy el Sombrero Seleccionador.\n¿Quieres saber a qué casa de Hogwarts perteneces, verdad?\nElije un número del 1 al 4, y veré cuál es tu destino...\nMis respuestas nunca serán las mismas, no podrás engañarme..."));
        if (!userNumber) {
            alert("Debes ingresar un número. Recuerda, del 1 al 4.");
        }
    }

    console.log("Número elegido por" + " " + userName + ":" + " " + userNumber);

    let randomHouse;

    if (userNumber === 1) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor 🦁";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff 🦡";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw 🦅";
        } else {
            randomHouse = "Slytherin 🐍";
        }
    } else if (userNumber === 2) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor 🦁";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff 🦡";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw 🦅";
        } else {
            randomHouse = "Slytherin 🐍";
        }
    } else if (userNumber === 3) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor 🦁";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff 🦡";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw 🦅";
        } else {
            randomHouse = "Slytherin 🐍";
        }
    } else if (userNumber === 4) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor 🦁";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff 🦡";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw 🦅";
        } else {
            randomHouse = "Slytherin 🐍";
        }
    } else {
        alert(`Vuelve a intentarlo.
        Debes ingresar un número del 1 al 4`);
        return;
    }

    alert("Hmm, difícil. Esto es MUY difícil.");
    alert("Veo que tienes coraje, y una mente muy valiosa.");
    alert("Hay talento, sí. Y veo una sed de probarte a ti mismo.");
    alert("¿Pero, dónde ponerte?...");
    alert("...YA SÉ!");
    alert("Te pondré en..." + randomHouse.toUpperCase() + "!")
    console.log("El Sombrero Seleccionador decidió que tu casa tu casa es" + " " + randomHouse)

}

sortingHat();