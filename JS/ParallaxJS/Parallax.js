const image = document.getElementsByClassName('OURSTORYconteiner__Catchsecondimage');
const secondimage = document.getElementsByClassName('OURSTORYconteiner__Catchimage');

new simpleParallax(image, {
    overflow: true,
    orientation: 'left'
});

new simpleParallax(secondimage, {
    overflow: true,
    orientation: 'right'
});

