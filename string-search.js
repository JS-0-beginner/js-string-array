const products = [
    'Nokia Phone',
    'Lenovo Laptop',
    'Single laptop',
    'Single waterproof phone',
    'Single Blue shirt',
    'Red Linux',
    'Single Black Shirt',
    'Deep red single',
    'Damaged laptop'
];

const search = 'laptop'; //Includes, endsWith
// const search = 'single'; //startsWith

const output = [];
/* 
for(const product of products)
{
    if(product.toLowerCase().indexOf(search.toLowerCase()) != -1)
    {
        output.push(product);
    }
    
}
console.log(output); 
*/
/* 
//Includes
for(const product of products)
{
    if(product.toLowerCase().includes(search.toLowerCase()))
    {
        output.push(product);
    }
    
}
console.log(output);  
*/
/* 
//Starts-With
for(const product of products)
{
    if(product.toLowerCase().startsWith(search.toLowerCase()))
    {
        output.push(product);
    }
    
}
console.log(output); 
 */

//ends-With
for(const product of products)
{
    if(product.toLowerCase().endsWith(search.toLowerCase()))
    {
        output.push(product);
    }
    
}
console.log(output); 