
var requests = require('request')
var separateReqPool = { maxSockets: 20 };
var Listdata;

let countValue = new Promise(function (resolve, reject) {
    requests({ url: 'https://jsonplaceholder.typicode.com/todos', pool: separateReqPool }, function (error, response, body) {
        if (error) {
            reject(error)
        }
        else if (response) {
            resolve(body)
        }
    })
});



countValue
    .then((data) => {
        Listdata = data
        console.log(Listdata);
    })
    .catch((err) => { console.log(err); })
