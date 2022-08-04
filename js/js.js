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
  collapsible: true
});

$( "#tabs" ).tabs({
    active: 2
});

$("body").on('click', '[href*="#"]', function(e){
    let fixedOffset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixedOffset }, 1000);
    e.preventDefault();
});

const testimonials = document.querySelector('.testimonials');
        const scroller = testimonials.querySelector('.scroller');
        const nextBtn = document.querySelector('.btn_next');
        const prevBtn = document.querySelector('.btn_prev');
        const itemWidth = testimonials.getElementsByClassName('scroller')[0].clientWidth;

        nextBtn.addEventListener('click', scrollToNextItem);
        prevBtn.addEventListener('click', scrollToPrevItem);

        function scrollToNextItem() {           
            scroller.scrollBy({left:1, top: 0, behavior:'smooth'});
        } 
        function scrollToPrevItem() {
            if(scroller.scrollLeft != 0)
                // The scroll position is not at the beginning of first item
                scroller.scrollBy({left: -1, top: 0, behavior:'smooth'});
            else{
                // This is the first item. Go to last item by setting scroll position to scroller width
                scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior:'smooth'});
            }            
        }


        





 