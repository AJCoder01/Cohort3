// defining a promise is hard
// using a promise is easy
// function setTimeoutPromisified(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));

//   // it returns us a object of promise class
// }

// function callback() {
// 	console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)

function random(resolve){ // resolve is also a function
  setTimeout(resolve,3000); // when this promise is resolved/ when resolve is called jo bhi .then mein called hai vo call hota hai
}
let p = new Promise(random); // supposed to return us something eventually

function callback(){
  console.log("promise returned");
}
p.then(callback);
