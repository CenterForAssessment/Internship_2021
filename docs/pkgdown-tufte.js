$(window).scroll(function(){
    if($(window).scrollTop() > 35) {
        $('.navbar').addClass("shrink");
        $('.navbar-brand').addClass("shrink");
        $('.navbar-label').addClass("shrink");
    } else {
        $('.navbar').removeClass("shrink");
        $('.navbar-brand').removeClass("shrink");
        $('.navbar-label').removeClass("shrink");
    }
});
