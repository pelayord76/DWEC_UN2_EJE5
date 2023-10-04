var arrayGrande = new Array(50);

console.log(arrayGrande.fill(0));
console.log(llenarArray(arrayGrande));

function llenarArray(array){
    for(let i = 0; i < array.length; i++){
        array[i] = 0;
    }
    return array;
}