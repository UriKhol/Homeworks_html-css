$(document).ready(function (){
    $('.menu-toggle').click(function () {
        $(this).toggleClass('-active')
        $('.menu').slideToggle()
    })
    $('.gallery').slickLightbox()
    $('.section-about_slider').slick({
        arrows: true
    })
    $('.section-welcome_select').select2({
        allowClear: true,
        placeholder: 'Chose your class',
        minimumResultsForSearch: -1,
        selectionCssClass: 'custom-select',
        width: '100%'
    });
});