var myBooks = [20,222,180,500,22,90,100,120,199,170];

for(var i = 0; i < myBooks.length; i++){
    var calculate = (myBooks[i]);
    if(calculate > 200){
        continue;
    }
    console.log(calculate);
}