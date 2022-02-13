const calculateSum=require("../sumGenerator");
describe("calculateSum function",function()
{
    it("should give the sum of two numbers",function()
    {
        const sumOfNumbers=calculateSum(2,3);
        expect(sumOfNumbers).toBe(5);
    });
    
    it('should return the input directly if only 1 number is given', function() {
        const sumOfNumbers = calculateSum(2);
        expect(sumOfNumbers).toBe(2);
    });
    it('should return the sum of first two numbers', function() {
        const sumOfNumbers = calculateSum(2,3,4);
        expect(sumOfNumbers).toBe(5);
    });
    it('should give an error', function() {
        
        expect(()=>{
            calculateSum('45',2)}).toThrow('you must enter numeric values');
    });
    it('should give an error if input is an array',function(){
      
        expect(()=>{
            let arrayOfNumber=[1,2,3,4];
            calculateSum(arrayOfNumber,2)}).toThrow("Invalid input");
        
    });
  
        
    });
  