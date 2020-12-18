$(window).scroll(function(event) {
    var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 200) {
        document.getElementById('test').style.backgroundColor = 'rgba(127, 206, 208,1)';
        document.getElementById('test').style.Color = '#000';
    }

    if (scrollTop < 200) {
        document.getElementById('test').style.backgroundColor = 'transparent';
    }

});