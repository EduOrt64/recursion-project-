function fib(n){

let array = [0,1];

for (let i = 2; i < n; i++ ){

let result = array[i - 1] + array[i -2]

array.push(result)

}

};


console.log(fib(8));