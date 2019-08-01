// setTimeout(()=>{
//     console.log('To seconds are up');
// }, 2000)

// const names = ['Andrew', 'Jane', 'Jess'];
// const shortNames = names.filter((name)=>{
//     name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(()=>{
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     },2000)
// }

// geocode('Philadelphia', (data) =>{
//     console.log(data)
// })

const add = (op1, op2, callback) => {
    setTimeout(()=>{
        callback(op1 + op2)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})