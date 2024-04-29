$(function() {
    $('.header-burger').on('click', function() {
        $('.header-burger, .header-navigation-list').toggleClass('active')
        $('body').toggleClass('lock')
    })
})