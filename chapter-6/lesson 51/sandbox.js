// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');

// content.classList.add('success');


let paras = document.querySelectorAll('p');


paras.forEach(para =>{
if(para.textContent.match("success")){
console.log('succes');
para.setAttribute('class','success');
}else if(para.textContent.match("error")){
    console.log('error');
    para.setAttribute('class','error');

}else{
    console.log('brak');
}
});




