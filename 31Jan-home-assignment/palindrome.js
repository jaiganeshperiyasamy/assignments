let input='mam mam mam'
let reversed=""
console.log("===PALINDROME===")
let inputlowercase=input.toLowerCase()
console.log("The Entered String is :"+inputlowercase)

//let reversedusingfunction=inputlowercase.split("").reverse().join('')
//console.log("The Reversed String is :"+reversedusingfunction)

for(let i=inputlowercase.length-1;i>=0;i--)
{
reversed=reversed+inputlowercase[i]
}
console.log("The Reversed String is :"+reversed)
if(inputlowercase === reversed)
{
    console.log("Output: Entered string is PALINDROME")
}
else
console.log("Output: Entered string is NOT-PALINDROME")