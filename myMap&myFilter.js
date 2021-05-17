function myFilter(arr, fn) {
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        if (fn(arr[index])) 
            newArr.push(arr[index]);
    }
    return newArr;
}   


function myMap(arr, fn) {
    let newArr = [];

    for (let index = 0; index < arr.length; index++) 
        newArr.push(fn(arr[index]))

    return newArr;
}

let arr = [1, 2, 3, 4, 5];
let fn1 = (item) => item > 3;
let fn2 = (item) => --item; // 如果写成 item--，会返回原值

console.log(myFilter(arr, fn1)) // [4, 5]
console.log(myMap(arr, fn2))    // [0, 1, 2, 3, 4]

/*
  原生 js 实现 map 和 filter 方法
*/
