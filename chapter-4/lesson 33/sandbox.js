//regular function  

// const calcArea = function(radius){
//     return Math.round(Math.PI,2) * radius**2;
// }

//arow function


// const calcArea = radius => Math.round(Math.PI,2) * radius**2;





// const area = calcArea(5);
// console.log('area is: ', area);





//practise arrow functions

// const greet= function(){
//     return 'hello world';
// }

// const greet = () =>'hello world';

// let result= greet()
// console.log(result);



// const bill = function(products, tax){
// let total =0;
// for(let i=0;i<products.length;i++){
//     total += products[i] + products[i]*tax;
// }
// return total;
// };  



const bills = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
      total += products[i] + products[i]*tax;
    }
    return total;
};


const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
      total += products[i]  + products[i] * tax;
    }
    return total;
  }

console.log(bills([10,15,30], 0.2));
console.log(bill([10,15,30], 0.2));

