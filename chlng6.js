function sumOfEvennumbers(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            sum +=arr[i];

        }
    }
    return sum;
}

inputArray =[38,3,2,8,31];
result=sumOfEvennumbers(inputArray);
console.log(result);
