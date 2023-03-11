let numbers = [1,2,3,4,5,6,7,8,9];
let shuffleNumbers = numbers.sort(function(a,b){
    return Math.random();
});
console.log(shuffleNumbers);