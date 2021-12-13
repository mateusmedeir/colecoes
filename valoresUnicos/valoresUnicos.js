const Array = [10, 10, 15, 1, 20, 43, 108, 206, 682, 1]

function valoresUnicos(array){
    const mySet = new Set(array)

    return [...mySet]
}

console.log(valoresUnicos(Array))