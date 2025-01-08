let ham=document.querySelector('#hamburger')

let navlist=document.querySelector('#navlist')

ham.addEventListener('click', function() {
 navlist.classList.toggle('active')
})