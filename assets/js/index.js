$( document ).ready(function() {

function onScroll(){
    let anchorTimer = setTimeout(() => {
        if( $(this).scrollTop() > 300){
            $('.up').css('display', 'flex');

            setTimeout(() => {
                $('.up').addClass('enabled');
            }, 1000)
        }else{
            $('.up').removeClass('enabled');

            setTimeout(() => {
                $('.up').css('display', 'none');
            }, 1000)
        }
    }, 1000);
}

    // Anchor 
    $(window).on('scroll', () => {
        console.log('Scroll', $(this).scrollTop());
        // clearTimeout(anchorTimer);
        onScroll();  
    });

    $('.up').click(() => {
        $("body,html").animate({
            scrollTop:0
        }, 600);
    })
});