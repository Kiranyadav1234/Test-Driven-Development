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
    if(Array.isArray(number))
    {
        throw new Error("Invalid input");
    }
    if(number<0)
    {
        throw new Error("Invalid input");
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