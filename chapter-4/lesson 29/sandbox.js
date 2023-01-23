// variables & block scope
const age = 30;

if(true){
    let age =40;
    let name = 'shaun';
    console.log('inside 1st code blck:' ,age , name);

    if(true){
        let age = 15
        console.log('inside 2nd code block',age,name);
    }
}
console.log('outside code blck:' ,age,name);