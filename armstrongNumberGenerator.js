function findArmstrongNumber(range)
{
    if( typeof(range) === 'string')
    {
       throw  new Error("Invalid Input");
    }
    for(let index=1;index<=range;index++)
    {
        console.log(isArmstrongNumber(index));
        if(isArmstrongNumber(index))
           console.log(index);

    }
       
}  
function isArmstrongNumber(number)
{
    if( typeof(number) === 'string')
    {
       throw  new Error("Invalid Input");
    }
    if( Array.isArray(number))
    {
        throw new Error("Not a valid input type.");
    }
    if(typeof(number)==="boolean")
    {
        throw new Error('Not a valid input type.');
    }
    if(number<0)
    {
        throw new Error("Negative number is an invalid input.");
    }
    let temp = number;
    let sum = 0;
    while(temp>0)
    {

        let remainder = temp%10;
        sum +=remainder*remainder*remainder;
        temp =parseInt(temp/10);

    }
    return (sum === number);  
}

module.exports={isArmstrongNumber,findArmstrongNumber};