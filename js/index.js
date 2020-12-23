var cuenta = 0;
var cuenta2 = 0;
var cuenta3 = 0;
var cuenta4 = 0;

function contar() {
    if (cuenta < 2345) {
        cuenta += 5;
        document.getElementById('txt').innerHTML = addCommas(cuenta);
        setTimeout(contar, 500);
    }
    if (cuenta2 < 29) {
        document.getElementById('txt2').innerHTML = cuenta2++;
        setTimeout(contar, 300);
    }
    if (cuenta3 < 28) {
        document.getElementById('txt3').innerHTML = cuenta3++;
        setTimeout(contar, 30000);
    }
    if (cuenta4 < 100) {
        document.getElementById('txt4').innerHTML = cuenta4++ + '%';
        setTimeout(contar, 300);
    }
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
$(window).scroll(function(event) {
    var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= 200) {
        document.getElementById('test').style.backgroundColor = 'rgba(17, 33, 52,.96)';
        document.getElementById('test').style.Color = '#000';
        if (scrollTop >= 2700) {
            contar();
        }
    }

    if (scrollTop < 200) {
        document.getElementById('test').style.backgroundColor = 'transparent';
    }

});

var current = 0;
var imagenes = new Array();

$(document).ready(function() {
    var numImages = 6;
    if (numImages <= 3) {
        $('.right-arrow').css('display', 'none');
        $('.left-arrow').css('display', 'none');
    }

    $('.left-arrow').on('click', function() {
        if (current > 0) {
            current = current - 1;
        } else {
            current = numImages - 3;
        }

        $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);

        return false;
    });

    $('.left-arrow').on('hover', function() {
        $(this).css('opacity', '0.5');
    }, function() {
        $(this).css('opacity', '1');
    });

    $('.right-arrow').on('hover', function() {
        $(this).css('opacity', '0.5');
    }, function() {
        $(this).css('opacity', '1');
    });

    $('.right-arrow').on('click', function() {
        if (numImages > current + 3) {
            current = current + 1;
        } else {
            current = 0;
        }

        $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);

        return false;
    });
});
$('.carousel').carousel({
    interval: 5000
})