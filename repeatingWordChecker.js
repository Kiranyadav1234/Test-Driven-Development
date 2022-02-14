module.exports=checkRepeatingWords;
function checkRepeatingWords(str){
    if(typeof(str)==='number')
    {
        throw new Error('Invalid input');
    }
    if( Array.isArray(str))
    {
        throw new Error('Invalid input');
    } 
    let individualWords=str.split(" ");
    let mapOfWords={};
    for(let i=0;i<individualWords.length;i++){
        let currentValue=mapOfWords[individualWords[i]];
        if(currentValue)
            return true;
        mapOfWords[individualWords[i]]=1;
    }
    return false;
}
