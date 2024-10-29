// Використовуючи Promise.reject, створіть Promise, який завершується з помилкою.

// const pr1 = new Promise(( _, reject) => {
//   reject("error")
// });

const pr2 = Promise.reject("error")

pr2.catch((error) => {
  console.log("erro", error)
})