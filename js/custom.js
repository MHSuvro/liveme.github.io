// $('.banner_part_images_slider').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     nextArrow: false,
//     prevArrow: false,
//     autoplay: true,



// });

$('.banner_part_images_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.demo_pic_slider',
    autoplay: true,
});
$('.demo_pic_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.banner_part_images_slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
});



$('.our_service_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    adaptiveHeight: true,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,

});

$('.clint_pic_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,

});