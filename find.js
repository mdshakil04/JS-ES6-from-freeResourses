let numbers = [2, 4, 6, 7, 8, 10, 12, 15];

let targetedValue = numbers.find(function(currentValue){
    return currentValue > 8;
})
// console.log(numbers)
// console.log(targetedValue)
function evenNumbersSum(nums){
    // console.log("Function got his parametars",nums)
    let sum = 0;
    for(const num of nums){
        // console.log(num)
        if(num % 2 === 0){
            // console.log(num)
            sum = sum + num;
            // console.log(sum)
        }
    }return sum;
}
const result = evenNumbersSum(numbers)
console.log(result)