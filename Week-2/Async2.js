// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));


//Promises in JS
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
    console.log("3 seconds have passed");
}

setTimeoutPromisified(3000)
    .then(callback)
    .then(() => console.log("This will be executed after 3 seconds"))

//callback Hell
setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
      console.log("hello");
      setTimeoutPromisified(5000).then(function () {
        console.log("hello there");
      });
    });
  });
  
//ALT syntax (Promise Chaining)
setTimeoutPromisified(1000)
  .then(function () {
    console.log("1 Second");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("3 Seconds");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("5 Seconds");
  });

  function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  //Async-Await
  async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi1");
    await setTimeoutPromisified(3000);
    console.log("hello2");
    await setTimeoutPromisified(5000);
    console.log("hi there3");
  }
  
  solve();