window.onload = function (){
    const menu_button = document.querySelector('.burger')
    const mobile_menu = document.querySelector('.mobile_nav')
    const exitMenu = document.querySelector('.exitMenu')

    menu_button.addEventListener('click', function(){
        // menu_button.classList.toggle('is-active')
        mobile_menu.classList.toggle('is-active')
    })

    exitMenu.addEventListener('click', function(){
        mobile_menu.classList.toggle('is-active')
    })
}