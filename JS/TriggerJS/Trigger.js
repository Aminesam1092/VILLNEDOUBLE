const FeedIn = document.querySelector('.NEWSCAMPAINconteiner');

FeedIn.getBoundingClientRect().top + window.pageYOffset;
window.addEventListener('scroll' , function(){
    if(window.pageYOffset > FeedIn.getBoundingClientRect().top + window.pageYOffset - window.innerHeight + 100){
        FeedIn.style.opacity = '1';
    }
});
console.log(window.pageYOffset);
