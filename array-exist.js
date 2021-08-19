function bestFriends(friends)
{

    if(Array.isArray(friends) == false) //Checking the existence of an array.
    {
        return 'Please give the valid array'
    }

    let best = friends[0];
    for(const friend of friends)
    {
        if(friend.length > best.length)
        {
            best = friend;
        }
    }
    return best;
}

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

const closeFriend = bestFriends(1234);
console.log(closeFriend);

//Checking an element
//Method(1)
if(friends.indexOf('Fox') != -1) 
{
    console.log("Arafat Exist in 'friends' Array.");
}
else
{
    console.log("This element doesn't exist in this array.")
}

//Method(2)
if(friends.includes('Pranto')) 
{
    console.log("Pranto Exist in 'friends' Array.");
}
else
{
    console.log("This element doesn't exist in this array.")
}

//Concatenation

const friendsOne = [
    'Arko',
    'Abir',
    'Likhon',
    'Sayad',
    'Sabbir'];

const friendsTwo = ['Rajnikaanth',
'Shakil',
'Arafat',
'Pranto'];

const combinedFriends = friendsOne.concat(friendsTwo);

console.log('Concatenation')

console.log(combinedFriends);