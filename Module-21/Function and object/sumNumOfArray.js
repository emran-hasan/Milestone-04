function sumOfArray(numbers){

    let sum =0;
    for(let i =0; i < numbers.length; i++){
        let index =i;
        let elements = numbers[index];
        sum =sum + elements;
        console.log(index, elements, sum);
    }
    return sum;
}

const myNumberOfArray = [20,25,20,21,10];
sumOfArray(myNumberOfArray);