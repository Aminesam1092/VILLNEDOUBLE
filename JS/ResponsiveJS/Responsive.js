const Menu = document.querySelector('.Header__Menu');
const Snslink = document.querySelector(".Header__Snslink");
const Logoimage = document.querySelector(".Header__LogoImage");
const HambugurButton = document.querySelector(".Header__Button");

window.addEventListener('load' ,function(){
    let windowWidth = window.innerWidth;
    if(windowWidth <= 1280){
        Menu.style.display = 'none';
        Snslink.style.display = 'none';
        Logoimage.style.margin = '0 auto'
        HambugurButton.style.display = 'block';
    }
    else if(windowWidth > 1281){
        Menu.style.display = 'flex'
        Snslink.style.display = 'flex';
        Logoimage.style.margin = '0 auto 0 40px'
        HambugurButton.style.display = 'none';
    }
});

window.addEventListener('resize' ,function(){
    let windowWidth = window.innerWidth;
    if(windowWidth <= 1280){
        Menu.style.display = 'none';
        Snslink.style.display = 'none';
        Logoimage.style.margin = '0 auto'
        HambugurButton.style.display = 'block';
    }
    else if(windowWidth > 1281){
        Menu.style.display = 'flex'
        Snslink.style.display = 'flex';
        Logoimage.style.margin = '0 auto 0 40px'
        HambugurButton.style.display = 'none';
    }
});

HambugurButton.addEventListener('click' ,function(){
    
})