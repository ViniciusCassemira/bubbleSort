function bubbleSort(lista){
    const tam = lista.length;
    for(let i = 0; i < tam; i++){
        for(let j = 0; j < tam - 1 - i; j++){
            if (lista[j] > lista[j+1]){
                let temp = lista[j+1];
                lista[j+1] = lista[j];
                lista[j] = temp;
            }
        }
    }
    return lista
}

const lista = [10,2,18,0,13,8,47,23,63,7];
console.log(`Lista original: ${lista}`);

const listaOrdenada = bubbleSort(lista); //o bubble sort altera o array original
console.log("Lista ordenada:",bubbleSort(lista));