const myEmail = "krutayasosiska2011@gmail.com"
const dog = "@"
console.log(myEmail.endsWith("@gmail.com"));// для большей проверки

console.log(
  `The "${dog}" ${
    myEmail.includes(dog) ? "is" : "is not"
  } in your Email.`
);
// я этот пример нашел на https://developer.mozilla.org/ и просто под задание подстроил
// вот как мы учили 
 console.log(myEmail.includes(dog))