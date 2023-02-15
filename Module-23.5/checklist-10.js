const arr = [10,20,23,50,40,60,80,120,100,920];

function largeNumber(arr){
    for(let i =0; i < arr.length; i++){
        const element =arr[i];
        if(element > 80 ){
            console.log(element);
        }
    }
}
largeNumber(arr);