/* 

/////////// Simple Function \\\\\\\\\\\\\
function addNumbers(num1, num2)
{
    
    const result = num1 + num2;
    return result;
}

const sum = addNumbers(23, 45);
console.log(sum);

///////// User is angry with his input \\\\\\\\\\\\\
function addNumbers(num1, num2)
{
    
    const result = num1 + num2;
    return result;
}

const sum = addNumbers(23, 45, 67, 89);
console.log(sum);

 */
/* 
/////////// Array Like Object \\\\\\\\\\\\\
function addNumbers(num1, num2)
{
    console.log(arguments);
    const result = num1 + num2;
    return result;
}

const sum = addNumbers(23, 45, 67, 89);
console.log(sum); 
*/

/* 
////////// Showing parameter's value by Arguments index \\\\\\\\\\\\\
function addNumbers(num1, num2)
{
    console.log(arguments[2]);
    const result = num1 + num2;
    return result;
}

const sum = addNumbers(23, 45, 67, 89);
console.log(sum); 
*/

/* 
////////// Push-Pop they don't work in arguments \\\\\\\\\\\\\
function addNumbers(num1, num2)
{
    console.log(arguments);
    arguments.push(45); //it will not work
    arguments.pop(45); //it will not work
    const result = num1 + num2;
    return result;
}

const sum = addNumbers(23, 45, 67, 89);
console.log(sum); 
*/

/*  
/////////// Elements of Arguments \\\\\\\\\\\\
function addNumbers(num1, num2)
{
    console.log(arguments);
    for(const num of arguments)
    {
        console.log(num);
    }
    const result = num1 + num2;
    return result;
}

const sum = addNumbers(23, 45, 67, 89);
console.log(sum); 
 */


/////////// adding numbers with arguments \\\\\\\\\\\\
function addNumbers(num1, num2)
{
    let result = 0;
    for(const num of arguments)
    {
        result = result + num;
    }
    return result;
}

const sum = addNumbers(23, 45, 67, 89);
console.log(sum);

/////// another example \\\\\\\\\\

function getBothOne(firstOne, lastOne)
{
//    const bothOne = firstOne + ' ' + lastOne;

    let bothOne = '';
    for(const part of arguments)
    {
        bothOne = bothOne + part + ' ' ;
    }
    
    return bothOne;
}

const bothOne = getBothOne('Friends',  'Candles', 'Birthday', 'Cake', 'Gifts','Baloons', 'Firecrackers');
console.log(bothOne);













