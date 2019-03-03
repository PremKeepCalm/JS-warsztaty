let header = document.querySelector('header');
let paragraf1 = document.querySelector('.paragraf1')
let paragraf2 = document.querySelector('.paragraf2')

colorChange = () => {
    paragraf1.style.backgroundColor = 'green';
    paragraf2.style.backgroundColor = 'blue'; 
}

header.addEventListener('click', colorChange)