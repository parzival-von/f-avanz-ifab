const numeriArray: number[] =[1,2,3,4,5];
numeriArray.push(6);

const numeriArray2 = [...numeriArray]

numeriArray2.push(7)

//console.log(numeriArray)
//console.log(numeriArray2)

const numeriArray3 = numeriArray.map(valorem=> (valorem *2.34565).toFixed(1)); //.toFixed(valor) numero de decimales que queires

//console.log(numeriArray3)