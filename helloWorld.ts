
function basicLog(message) {
  console.log(message);
}

basicLog("Hello world from logging basic function!");

const objectLog = function(message) {
  console.log(message)
}

objectLog("Hello world from logging object function!")

const arrowLog = (message) => {
  console.log(message);
}

arrowLog("Hello world from logging arrow function")

function delayByCallback(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

delayByCallback(()=>{
  console.log("Delay 3 second by callback function!")
})

function delayByPromise(time) {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(null);
    }, time);
  });
}

delayByPromise(3000).then(() => {
  console.log("Delay 3 second by promise");  // executed after delayByPromise
})

function delayByAsync(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });
}

(async () => {  // await is mostly able to be used in async function
  await delayByAsync(3000);  // wait for promise by using await
  console.log("Delay 3 second by Async"); // executed after delayByAsync
})();
