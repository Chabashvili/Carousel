document.querySelector('.next').addEventListener('click', function(){
    let active  = document.querySelector('.active');
    if (active.nextElementSibling != null) {
         active.classList.remove('active');
    active.nextElementSibling.classList.add('active')
    }else{
        active.classList.remove('active');
        document.querySelector('.parent').firstElementChild.classList.add('active')
    }
})

document.querySelector('.prev').addEventListener('click', function(){
    let active  = document.querySelector('.active');
    if (active.previousElementSibling != null) {
         active.classList.remove('active');
    active.previousElementSibling.classList.add('active')
    }else{
        active.classList.remove('active');
        document.querySelector('.parent').lastElementChild.classList.add('active')
    }
})