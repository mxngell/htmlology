$(function() {

    $('.themes-list-item').on('mousemove', (e) => {
        $('.themes-list-item').each(function(){
            const rect = this.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
            this.style.setProperty("--mouse-x", `${x}px`);
            this.style.setProperty("--mouse-y", `${y}px`);
        })
    })

    $('input.search-input').on('input', () => {
        let query = $('input.search-input').val().trim()
        let data = $('.themes-list-item');
        if (query != '') {
            data.each((index, value) => {
                if (!$(value).children('.item-header, .item-description').text().trim().toLowerCase().includes(query.toLowerCase())) {
                    $(value).addClass('hidden-theme')
                } else {
                    $(value).removeClass('hidden-theme')
                }
            })
        } else {
            data.each((index, value) => {
                $(value).removeClass('hidden-theme')
            })
        }
    })

})