//Slice
console.log('Slicing Array');

const newArray = ['Friends',  'Candles', 'Birthday', 'Cake', 'Gifts','Baloons', 'Firecrackers', ];

const arraySliced = newArray.slice(2, 5);

console.log(arraySliced);

console.log('Main Array');
console.log(newArray);

//Splice
console.log('Splicing Array');
// const arraySpliced = newArray.splice(2, 3);

const arraySpliced = newArray.splice(2, 3, 'Party', 'Music', 'Dance');

console.log(arraySpliced);

console.log('Main Array after splicing');
console.log(newArray);

