const get_roll = () => {
    setTimeout(() => {
        let roll = [3, 6, 8, 9]
        console.log(roll);
        setTimeout((roll_num) => {
            let obj = {
                name: "pinku",
                age: 21,
            }
            console.log(`my name is ${obj.name}  my age is ${obj.age} and my roll number is ${roll_num}`)
            setTimeout(()=>{
               let gender = "female"
                 console.log(`my gender is ${gender}`);
            },1000,)
        }, 1000, roll[1])

    }, 1000)
}
get_roll()