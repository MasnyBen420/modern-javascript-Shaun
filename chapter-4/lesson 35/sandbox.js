// callbacks & foreach 

let people= ['mario','luigi','ryu','shaun','chun-li'];

const logPerson = (person,index)=>{
    console.log(`${index} - hello ${person}`);
}

people.forEach((person, index )=> {
console.log(person, index);
});

people.forEach(logPerson)