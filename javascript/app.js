alert("¡Hola! Esta es una página sobre compra de componentes de computadoras.");

function mostrarProcesadores() {
    let respuestaProcesador = prompt("¿INTEL o AMD?");
    let respuestaProcesadorLower = respuestaProcesador.toLowerCase();
    if (respuestaProcesadorLower === "intel") {
        alert("Aquí te dejo una lista con los mejores procesadores Intel actualmente:");
    } else if (respuestaProcesadorLower === "amd") {
        alert("Aquí te dejo una lista con los mejores procesadores AMD actualmente:");
    } else {
        alert("Opción no válida para procesadores.");
    }
}

function mostrarMotherboards() {
    alert("Aquí te dejo una lista de motherboards: \nNo olvides revisar si el procesador de tu elección es compatible con la motherboard.");
}

function mostrarTarjetasDeVideo() {
    let respuestaTarjeta = prompt("¿NVIDIA o RADEON?");
    let respuestaTarjetaLower = respuestaTarjeta.toLowerCase();
    if (respuestaTarjetaLower === "nvidia") {
        alert("Aquí te dejo una lista de tarjetas de video de NVIDIA:");
    } else if (respuestaTarjetaLower === "radeon") {
        alert("Aquí te dejo una lista de tarjetas de video de RADEON:");
    } else {
        alert("Opción no válida para tarjetas de video.");
    }
}

function mostrarFuentesDePoder() {
    alert("Aquí te dejo una lista de fuentes de poder.");
}

function mostrarMemoriasRAM() {
    alert("Aquí te dejo una lista de memoria RAM.");
}

function mostrarDiscosDuros() {
    let respuestaMemoria = prompt("¿SSD, HDD o M.2?");
    let respuestaMemoriaLower = respuestaMemoria.toLowerCase();
    if (respuestaMemoriaLower === "ssd") {
        alert("Aquí te dejo una lista de memorias SSD:");
    } else if (respuestaMemoriaLower === "hdd") {
        alert("Aquí te dejo una lista de memorias HDD:");
    } else if (respuestaMemoriaLower === "m.2") {
        alert("Aquí te dejo una lista de memorias M.2:");
    } else {
        alert("Opción no válida para discos duros.");
    }
}

function mostrarGabinetes() {
    alert("Aquí te dejo una lista de gabinetes.");
}

function mostrarMenu() {
    return parseInt(prompt("¿Qué estás buscando? \nProcesadores. 1 \nMotherboards. 2 \nTarjetas de video. 3 \nFuentes de poder. 4 \nMemoria RAM. 5 \nDiscos duros. 6 \nGabinetes. 7 \nSalir. 8"), 10);
}

function iniciarCompra() {
    let interesComprar;
    do {
        interesComprar = mostrarMenu();

        switch (interesComprar) {
            case 1:
                mostrarProcesadores();
                break;
            case 2:
                mostrarMotherboards();
                break;
            case 3:
                mostrarTarjetasDeVideo();
                break;
            case 4:
                mostrarFuentesDePoder();
                break;
            case 5:
                mostrarMemoriasRAM();
                break;
            case 6:
                mostrarDiscosDuros();
                break;
            case 7:
                mostrarGabinetes();
                break;
            case 8:
                alert("¡Gracias por visitarnos!");
                break;
            default:
                alert("Opción no válida. Por favor elige un número entre 1 y 8.");
                break;
        }

    } while (interesComprar !== 8);
}

iniciarCompra();