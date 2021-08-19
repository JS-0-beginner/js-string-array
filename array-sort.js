console.log('');

const numbers = [4,5,3,8,7,1,9,6,2];
const sortedNumbers = numbers.sort();

console.log('Sorted in Reverse');
const reversedNumbers = numbers.reverse();

// console.log(sortedNumbers);
console.log(reversedNumbers);

const friends = [
    'Arko',
    'Abir',
    'Likhon',
    'Sayad',
    'Sabbir',
    'Rajnikaanth',
    'Shakil',
    'Arafat',
    'Pranto'
];

const sortedFriends = friends.sort();
console.log('Sorted in Ascending Order')
console.log(sortedFriends);
const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedFriends);
console.log('Sorted in Reverse');
console.log(sortedReversedFriends);

//For Large Number 

const largeNumbers = [65, 45, 78, 101, 302, 56, 96, 89, 10]

const sortedLargeNumbers = largeNumbers.sort(); //It will sort all the numbers from initializing first number of each numbers

console.log(sortedLargeNumbers);

/* const sortedLargeNumbers = largeNumbers.sort(function(a,b)
{
    return a - b;
});

console.log(sortedLargeNumbers); */



