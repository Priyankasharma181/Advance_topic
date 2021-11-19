const outerFun = (a) => {
    let b = 4
    const inner = () => {
        sum = a + b
        console.log(`sum is ${sum}.`);
    }
    return inner;
}
const f = outerFun(5)
f()