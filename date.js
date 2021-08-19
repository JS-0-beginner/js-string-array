const newDate = new Date('1971-5-12');

const oldDate = new Date(1972,3,12,11,50,40);

if( newDate.getTime() < oldDate.getTime())
{
    console.log('Alright');
}