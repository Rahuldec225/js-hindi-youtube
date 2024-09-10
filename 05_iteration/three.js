//   for of

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }


// const greeting = "hello world!"
// for(const greet of greeting){
//     console.log(`each char is ${greet}`)
// }

// maps

const map =  new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', "france")


console.log(map);


for (const [key, value] of map) {
    console.log(key, '=>', value)
}


const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}


// for(const [key, value] of myObject){
//     console.log(key ,"=>", value)
// }