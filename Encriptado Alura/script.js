// Función para verificar si el texto solo contiene letras minúsculas sin acentos ni caracteres especiales
function esTextoValido(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Función para mostrar una advertencia si el texto no es válido
function mostrarAdvertencia(mostrar) {
    const warning = document.getElementById("warning");
    warning.classList.toggle("oculto", !mostrar);
}

// Función de cifrado César básico para encriptar el texto
function encriptarTexto(texto) {
    let resultado = "";
    const desplazamiento = 3;
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charCodeAt(i);
        if (char >= 97 && char <= 122) {
            char = ((char - 97 + desplazamiento) % 26) + 97;
        }
        resultado += String.fromCharCode(char);
    }
    return resultado;
}

// Función de cifrado César básico para desencriptar el texto
function desencriptarTexto(texto) {
    let resultado = "";
    const desplazamiento = 3;
    for (let i = 0; i < texto.length; i++) {
        let char = texto.charCodeAt(i);
        if (char >= 97 && char <= 122) {
            char = ((char - 97 - desplazamiento + 26) % 26) + 97;
        }
        resultado += String.fromCharCode(char);
    }
    return resultado;
}

// Event listeners para los botones de encriptar y desencriptar
document.getElementById("botonEncriptar").addEventListener("click", function() {
    const textoEntrada = document.getElementById("textoEntrada").value;
    if (esTextoValido(textoEntrada)) {
        const textoEncriptado = encriptarTexto(textoEntrada);
        document.getElementById("textoResultado").value = textoEncriptado;
        document.getElementById("botonCopiar").classList.remove("oculto");
        mostrarAdvertencia(false);
        document.getElementById("mensajeInicial").classList.add("oculto");
    } else {
        mostrarAdvertencia(true);
    }
});

document.getElementById("botonDesencriptar").addEventListener("click", function() {
    const textoEntrada = document.getElementById("textoEntrada").value;
    if (esTextoValido(textoEntrada)) {
        const textoDesencriptado = desencriptarTexto(textoEntrada);
        document.getElementById("textoResultado").value = textoDesencriptado;
        document.getElementById("botonCopiar").classList.remove("oculto");
        mostrarAdvertencia(false);
        document.getElementById("mensajeInicial").classList.add("oculto");
    } else {
        mostrarAdvertencia(true);
    }
});

// Event listener para el botón de copiar el resultado
document.getElementById("botonCopiar").addEventListener("click", function() {
    const textoResultado = document.getElementById("textoResultado");
    textoResultado.select();
    document.execCommand("copy");
});
