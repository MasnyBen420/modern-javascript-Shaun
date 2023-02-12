
const ul = document.querySelector('ul');
const button = document.querySelector('button')

button.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent ='something to do';
    ul.prepend(li);
});

// const items = document.querySelectorAll('li');

// items.forEach ( item =>{
// item.addEventListener('click', e =>{
//      e.target.remove();
//      e.stopPropagation();
//     console.log('event in li');
//     })
// });

ul.addEventListener('click', e=>{
    // console.log('event in ul');
    if(e.target.tagName ==='LI'){
        e.target.remove();
    }
})