module.exports=calculateSum;
function calculateSum( number1 , number2 )
{
   if(number1 && !number2)
   {
           return number1;

   }
   if ( typeof(number1) ==='string' || typeof(number2)==='string' ){
       throw new Error("you must enter numeric values");
   }
     
  if(Array.isArray(number1) || Array.isArray(number2))
    {
      throw new Error("Invalid input");
    }
        
     
    return number1+number2;

}
