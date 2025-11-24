function factorial() {
    let entrada = document.getElementById("numero").value;
    let numero = Number(entrada);

    // Validar
    if (entrada.trim() === "" || isNaN(numero)) {
        document.getElementById("resultado").innerText = "Ingresa un número válido.";
        return;
    }

    // Calcular factorial
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    document.getElementById("resultado").innerText =
        `El factorial de ${numero} es: ${resultado}`;
}