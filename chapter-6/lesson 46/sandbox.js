//  Querry selector 

// let para = document.querySelector('p')
// console.log(para);
// const error = document.querySelector('.error')
// console.log(error);
// const error2 = document.querySelector('div.error')
// console.log(error2);
 let paraall = document.querySelectorAll('p')
 let error = document.querySelectorAll('.error')
// console.log(paraall);

paraall.forEach(para => {
    console.log(para);    
});

console.log(error);