// task 1
function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

const prom = [
  delayedPromise("A", 1000),
  delayedPromise("B", 2000),
  delayedPromise("C", 1500),
  delayedPromise("D", 3000),
  delayedPromise("E", 2500),
];

Promise.all(prom).then((results) => {
  console.log("Усі проміси виконано:", results);
});
// task 2
function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000; 
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

const promRac = [
  randomDelay("X"),
  randomDelay("Y"),
  randomDelay("Z"),
  randomDelay("W"),
  randomDelay("V"),
];

Promise.race(PromRac).then((result) => {
  console.log("Найшвидший проміс вирішено:", result);
});