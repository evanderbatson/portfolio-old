var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

console.log("Hello, nice to meet you. I'm Evander. Wanna #code together? Email me at evanderbatson@gmail.com");

//hero

if (iOS==false){

    var hero = $('#hero'),
    heroHeight = hero.height();

    $(window).scroll(function() {
        if ($(this).scrollTop() <= heroHeight / 2) {
            hero.css({
                height: -($(this).scrollTop() - heroHeight)
            });
        } else {
            hero.css({
                height: heroHeight / 2
            });
        }
    }).scroll();

}

//clicks

$('.i').click(function() {
    infoBox();
});

$('.x').click(function() {
    infoBox();
});

function infoBox(){
    $('.i').toggleClass('hidden');
    $('.myName').toggleClass('hidden');
    $('.info').toggleClass('hidden');
}

//logo

if (iOS==false){
    $( document ).on( "mousemove", function( event ) {

        var screenWidth = $(window).width();
        var mousePosition = event.pageX;
        var max = 20;
        var value = Math.round((mousePosition / screenWidth) * max);

        $("#logo").css("background-image","url('/portfolio/assets/logo/"+value+".png')");

    });

    preload('/portfolio/assets/logo/0.png,/portfolio/assets/logo/1.png,/portfolio/assets/logo/2.png,/portfolio/assets/logo/3.png,/portfolio/assets/logo/4.png,/portfolio/assets/logo/5.png,/portfolio/assets/logo/6.png,/portfolio/assets/logo/7.png,/portfolio/assets/logo/8.png,/portfolio/assets/logo/9.png,/portfolio/assets/logo/10.png,/portfolio/assets/logo/11.png,/portfolio/assets/logo/12.png,/portfolio/assets/logo/13.png,/portfolio/assets/logo/14.png,/portfolio/assets/logo/15.png,/portfolio/assets/logo/16.png,/portfolio/assets/logo/17.png,/portfolio/assets/logo/18.png,/portfolio/assets/logo/19.png,/portfolio/assets/logo/20.png');

    function preload(images) {
    if (document.images) {
        var i = 0;
        var imageArray = new Array();
        imageArray = images.split(',');
        var imageObj = new Image();
        for(i=0; i<=imageArray.length-1; i++) {
            document.write('<img src="' + imageArray[i] + '" width="0" height="0" style="display:none"/>'); 
            imageObj.src=imageArray[i];
            }
        }
    }
}

$("img").error(function () { 
    $(this).hide();
    $(this).css({visibility:"hidden"}); 
});