const size = 50;
const defaultValue = 0;

var arrayGrande = new Array(size);

console.log(arrayGrande.fill(defaultValue));
console.log(llenarArray(arrayGrande));

function llenarArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = defaultValue;
    }
    return array;
}