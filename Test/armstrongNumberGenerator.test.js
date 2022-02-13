const obj = require('../armstrongNumberGenerator.js');

describe("isArmstrong function",()=>{
    it("should give true if given number is an  amstrong number",function()
    {
        const result = obj.isArmstrongNumber(153);
        expect(result).toBe(true);
    });
    it("should give false if given number is not an  amstrong number",function()
    {
        const result = obj.isArmstrongNumber(21);
        expect(result).toBe(false);
    });
     it("should throw an invalid input error if the given data is string  ",function()
    {
        
        expect(()=>{obj.isArmstrongNumber("Hey")}).toThrow("Invalid Input");
    }); 
    it("should throw an invalid input error if the given data is string  ",function()
    {
        
        expect(()=>{obj.findArmstrongNumber("Hey")}).toThrow("Invalid Input");
    }); 

})