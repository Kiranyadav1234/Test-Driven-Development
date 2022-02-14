const checkRepeatingWords=require('../repeatingWordChecker');
describe("checkRepeatingWords function",function(){
    it('should return true if any word is repeating',function(){
        const result=checkRepeatingWords("hi i am kiran kiran")
        expect(result).toBe(true);
    })
    it('should return false if any word is not repeating',function(){
        const result=checkRepeatingWords("hi! how r u?")
        expect(result).toBe(false);
    })
    it('should throw an error if number is given as input',function(){

        expect(()=>{checkRepeatingWords(123);
        }).toThrow("Invalid input");
    })
   it('should throw an error if an array is given as input',function(){
        expect(()=>checkRepeatingWords(['s','h','e'])).toThrow("Invalid input"); 
    })
})