// const xhr = new XMLHttpRequest
// xhr.open('GET', 'https://api.github.com/users')
// xhr.onload = event => console.log (JSON.parse(event.target.responseText))
// xhr.send()
// var promise = new Promise (
//     function (resolve, reject) {
//         const xhr = new XMLHttpRequest
//         xhr.open('GET', 'https://api.github.com/users')
//         xhr.onload = event => resolve(JSON.parse(event.target.responseText))
//         xhr.onerror = err => reject (err)
//         xhr.send()
//     }
// )
// promise.then(
//     response => console.log(response),
//     err => console.error(err)
// )


// new Promise(
//     (resolve, reject) => {
//       const time = Math.random() * 5000;
//       Math.random() > 0.5
//         ? setTimeout(
//           () => resolve(time),
//         )
//         : reject('rejected')
//     }
//   ).then(response => console.log(response), err => console.log(err))

// 


fetch('index.html')
    .then(response => response.text())
        .then(response => console.log(response))

fetch('script.js')
    .then(response => response.text())
        .then(response => console.log(response))

fetch('script.json')
    .then(response => response.json())
        .then(response => console.log(response))
