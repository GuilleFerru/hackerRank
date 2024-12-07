// Mapeo del patrón
const map = {
    'h': 'j', 'o': 's', 'l': 'p', 'a': 'a',
    'm': 'm', 'u': 'f', 'n': 'l', 'd': 'h', 'o': 's',
    's': 'ñ', 'i': 'g', 'y': 't', 'b': 'n', 'r': 'o', 'e': 'd',
    'y': 't', 'g': 'u',
};

// Función para cifrar un string
function cifrarTexto(input) {

    return input.split('').map(char => {
        if (/[A-Z]/.test(char)) {
            const lowerCase = char.toLowerCase();
            const mappedChar = map[lowerCase] || char;
            return mappedChar.toUpperCase();
        } else {
            return map[char] || char;
        }

    }).join('');
}

// Ejemplo de uso
const entrada = ["Hola Mundo", "Si hay hambre", "Ayhungry", "El chef hizo un merge y salió una pizza con piña"];

entrada.forEach(entrada => {
    const salida = cifrarTexto(entrada);
    console.log(`Entrada: ${entrada} --- Salida: ${salida}`);


})


