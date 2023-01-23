//functions declaration
let i = 1;
let k = 1;
greet();
greet();
greet();

speak();
speak();
speak();
speak();




function greet (){

console.log('hello there', i);
i++;
}


//functions expressions

const speak = function(){
    console.log('good day',k);
    k++
}
