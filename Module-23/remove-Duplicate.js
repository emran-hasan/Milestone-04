const names = ['emran', 'joy', 'hasan', 'emran', 'rakib', 'tonmoy, abdullah', 'nahiyan', 'abdullah', 'nahiyan', 'jack','jemy'];

function removeDuplicate (names){

    const unique = [];

    for(let i = 0; i < names.length; i++){
        const elements = names[i];
        if(unique.includes(elements) === false){
            unique.push(elements);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);