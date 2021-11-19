const New = new Promise(function (resolve, reject) {
    if (false) {
        resolve()
    } else {
        reject()
    }
})
New.then((data) => (console.log("priyanka")))
    .catch((data) => (console.log("sharma")))


async function check(){
    let New ;
    
}