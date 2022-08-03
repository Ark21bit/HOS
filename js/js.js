let btn = document.querySelector(".btn_menu"),
    menu = document.querySelector(".nav_menu"),
    menuBox = menu.parentElement;   


function openMenu(menu, menuBox){
    menu.classList.toggle("nav_ms");
    menuBox.classList.toggle("header_top_box_ms");
    btn.classList.toggle("menu_closed");
}

btn.addEventListener('click', () => {
    openMenu(menu, menuBox);         
});

$( "#accordion" ).accordion({
    active: 2
});

$( "#accordion" ).accordion({
  collapsible: true
});

$( "#tabs" ).tabs({
    active: 2
});




 