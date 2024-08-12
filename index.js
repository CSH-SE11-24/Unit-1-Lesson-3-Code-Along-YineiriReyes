// Code Along Norms: 
// 1. Only be on Repl.it/classroom resources
// 2. Actively follow along and engage
// 3. Ask questions and flag if you get stuck
// 4. Take notes as needed!
let name =prompt("whats your name")
//concatenation
// with a + sign, need to add a space
console.log("welcome to my game,"+ name)
//with a, sign spaces added automatically
console.log("welcome to my game,", name)
//string interpolation
//with backticks, you can input variables directly
console.log(`welcome to my game,${name}`)
let role = prompt("whar role do you want?(magician, fighter,peasant")
console.log(`okay, ${name}, your role is now ${role}`)
// prompt assumes the input is a string
let powerLevel = prompt("what is your power level?")
// to change it to a numer, use parseInt/parseFloat
powerLevel = parseInt(powerLevel)
console.log(typeof powerLevel)
//
