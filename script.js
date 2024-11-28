// Використовуючи Promise.reject, створіть Promise, який завершується з помилкою.

// const pr1 = new Promise(( _, reject) => {
//   reject("error")
// });

// const pr2 = Promise.reject("error")

// pr2.catch((error) => {
//   console.log("erro", error)
// })


// const url = new URLSearchParams({
//   _limit: 25,
// })

// const qwe = fetch(`https://jsonplaceholder.typicode.com/comments?${url.toString()}`);

// qwe.then((res) => {
//   console.log(res);
//   return res.json();
// }).then((data) => {
//   console.log(data)
// })



// https://newsapi.org/v2/everything?
const params = new URLSearchParams({
  apiKey: `7ad8b71dda2643768ec2ca3287e4b976`,
  page: 2,
  pageSize: 3,
  q: `programming`,
});

const request = fetch(`https://newsapi.org/v2/everything?${params.toString()}`);
const articles = request
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });

  document.