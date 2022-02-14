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
    it('should throw invalid input when array is given as input', () => {
        expect(
        () => obj.isArmstrongNumber([1,2])
        ).toThrow('Not a valid input type.')
      })
    it('should throw invalid input when boolean is given as input', () => {
        expect(
        () => obj.isArmstrongNumber(true)
        ).toThrow('Not a valid input type.')
      })
    /* it('should throw invalid input when decimal number is given as input', () => {
        expect(
        () => obj.isArmstrongNumber(3.5)
        ).toThrow('Not a valid input type.')
      }) */
    it('should throw invalid input when negative number is given as input', () => {
        expect(
        () =>obj.isArmstrongNumberr(-5)
        ).toThrow('Negative number is an invalid input.')
      })

})