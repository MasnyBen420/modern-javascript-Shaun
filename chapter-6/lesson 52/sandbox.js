const title = document.querySelector('h2')

const artice = document.querySelector('article')

console.log(artice.children);

Array.from(artice.children).forEach(child => {
    child.classList.add('article-elements')
});

console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling);
console.log(title.previousElementSibling);



