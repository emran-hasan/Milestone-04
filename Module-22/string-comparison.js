function caseConversion(){
    
    var firstNamer = 'Emran Hasan';
    var userName = 'Hasan Emran';

    console.log(firstNamer.toLowerCase());
    console.log(userName.toLowerCase());
    console.log(userName.localeCompare);

    if(firstNamer == userName){
        console.log('Valid name');
    }else{
        console.log('Invalid name');
    }
}
caseConversion();