MicroModal.init({
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    openClass: 'is-open',
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
});

$('.filter-button').on('click', function(){
    $('.filter-button').removeClass('active')
    $(this).addClass('active')
    const score = $(this).text();
    const statItems = $('.statistic-item');
    statItems.each((i, item) => {
        if(score === 'Все' || $(item).find('.statistic-item-score').text().trim() == score) {
            $(item).show()
        } else {
            $(item).hide()
        }
    })
})