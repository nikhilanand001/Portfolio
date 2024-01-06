let navbar = document.querySelector('nav');
let menulinks = document.getElementsByid("menu-links");
function tooglemenu(){
   menulinks.classlist.toggle('show-menu')
}

window.onscroll = function(){
    if(window.scrollY > 0){
        navbar.style.background = '#eefff9';
    }else{
        navabar.style.background = 'transparent';
    }
}