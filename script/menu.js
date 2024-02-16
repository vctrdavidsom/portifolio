let btnMenu = document.getElementById('btn-abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrirMenu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrirMenu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrirMenu')
})

