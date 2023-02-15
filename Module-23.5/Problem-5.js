function positiveNumberSearch (numbers){
    let arr =[];

    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] >= 0){
            arr.push(numbers[i]);
        }else{
            break;
        }
    }
    return arr;
}

const numbers = [10,20,30,20,-50,20,-5,100];
const result = positiveNumberSearch(numbers);
console.log(result);