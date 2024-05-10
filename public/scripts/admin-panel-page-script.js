$(function() {

    $('#users-table-table').DataTable( {
        paging: false,
        searching: true,
        ordering: true,
        responsive: true,
        "bInfo" : false,
        language: {
            "decimal":        "",
            "emptyTable":     "Нет доступных данных!",
            "loadingRecords": "Загрузка...",
            "processing":     "",
            "search":         "Поиск:",
            "zeroRecords":    "По запросу ничего не найдено",
        }
    } );


    $('.js-delete-row-button').on('click', (e) => {
        e.preventDefault()
        let current_element = $(e.currentTarget)
        let user_surname = current_element.closest('td').siblings('.js-user-surname').text()
        $.ajax({
            type: "DELETE",
            data: {
                user_id: current_element.data('user')
            },
            url: '/users',
            success: function (response) {
                if (response.result === true) {
                    $(current_element).closest('tr').fadeOut(400, function() { $(this).remove() })
                    createAlert('danger', `Пользователь ${user_surname} удален/а`);
                } else {
                    createAlert('danger', 'Произошла ошика! Повторите действие еще раз');
                }
            }
        })
    })

    $('.js-update-row-button').on('click', (e) => {
        e.preventDefault()
        let current_element = $(e.currentTarget)
        let current_row = e.target.closest('tr')
        let select_element_val = $(current_row).find('select').val()
        $.ajax({
            type: "PATCH",
            data: {
                user_id: current_element.data('user'),
                role: select_element_val,
            },
            url: '/users',
            success: function (response) {
                if (response.result === true) {
                    createAlert('success', 'Изменения сохранены')
                } else {
                    createAlert('danger', 'Произошла ошика! Повторите действие еще раз')
                }
            }
        })
    })
})