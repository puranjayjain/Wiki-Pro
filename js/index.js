/**
* Returns a random integer between min (inclusive) and max (inclusive)
* Using Math.round() will give you a non-uniform distribution!
*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var imgs = ["../img/152259oq2a3aa56s8mdm5z.jpg",
    "../img/Dewy-Morning.jpg",
    "img/London-Eye.jpg",
    "../img/Serenity-Outer-Space-Planets.jpg"
];

$('.credits').on('click', function () {
    $('.wrap, .credits').toggleClass('active');
    $('.morphsearch').toggleClass('overwrap');
    $('.overlay').toggleClass('clickable');
    return false;
});

$('.overlay').on('click', function () {
    $('.wrap, .credits').removeClass('active');
    $('.morphsearch').removeClass('overwrap');
    $('.overlay').removeClass('clickable');
    return false;
});


//load random images
$("body").css({ 'background': '#c1c1c1 url(' + imgs[getRandomInt(0, imgs.length - 1)] + ') no-repeat center bottom' });