const myIcon = document.querySelector('.fa-bars')

const myUl = document.querySelector('ul') 

myIcon.addEventListener("click", myFunction)

function myFunction() {
    myUl.classList.toggle('active')
}