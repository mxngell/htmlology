$('#statistic-table').DataTable( {
    paging: false,
    searching: true,
    ordering: true,
    responsive: true,
    "bInfo" : false,
    language: {
        "decimal":        "",
        "emptyTable":     "Нет доступных данных",
        "loadingRecords": "Загрузка...",
        "processing":     "",
        "search":         "Поиск:",
        "zeroRecords":    "По запросу ничего не найдено",
    }
});

MicroModal.init({
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    openClass: 'is-open',
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
});

$(function() {
    $('textarea[name="note"]').on('input', function() {
        $(this).val($(this).val().substring(0,$(this).next().children('span.max-count').text()))
        $(this).next().children('span.character-count').text($(this).val().trim().length)
    })

    $('.js-delete-row-button').on('click', (e) => {
        e.preventDefault()
        let current_element = $(e.currentTarget)
        $.ajax({
            type: "DELETE",
            data: {
                stat_id: current_element.data('stat')
            },
            url: '/statistic',
            success: function (response) {
                if (response.result === true) {
                    $(current_element).closest('tr').fadeOut(400, function() { $(this).remove() })
                    createAlert('danger', `Оценка удалена`);
                } else {
                    createAlert('danger', response.message);
                }
            }
        })
    })
})