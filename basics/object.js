//singleton
// Object.create()

// example for using symbol
const mysymb = Symbol("key1")

const jsObj = {
    user:"Ankit",
    email:"abc@gmail.com",
    age:18,
    isLoggedIn:false,
    [mysymb]:"Symbol Testing" // symbol can be used in []
}



console.log(jsObj.user)
console.log(jsObj.email)

console.log(jsObj[mysymb]) // this is how you access a symbol property in object
