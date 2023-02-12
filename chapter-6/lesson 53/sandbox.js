// const button = document.querySelector('button');


// button.addEventListener('click', ()=>{
//     console.log('you clicked the button');
// });


const items = document.querySelectorAll('li');

console.log(items);

items.forEach ( item =>{
item.addEventListener('click', e =>{
    // console.log("item clicked");
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    const target = e.target;
    console.log(e.target);
    target.style.textDecoration ='line-through';
})
});