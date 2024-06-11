$('#users-table').DataTable( {
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
} );

$(function() {
    $('.js-select-status').on('change', function(e) {
        const currentTarget = $(e.currentTarget)
        const user_surname = currentTarget.closest('td').siblings('.td-user-surname').text()
        $.ajax({
            type: "PATCH",
            data: {
                user_id: currentTarget.data('user'),
                role: currentTarget.val(),
            },
            url: '/users',
            success: function (response) {
                if (response.result === true) {
                    createAlert('success', `Роль пользователя ${user_surname} успешно изменена`)
                } else {
                    createAlert('danger', response.message)
                }
            },
            error: function (xhr, status, error) {
                createAlert('danger', 'Произошла ошибка при выполнении запроса');
            }
        })
    })

    $('.js-delete-row-button').on('click', function(e) {
        const currentTarget = $(e.currentTarget)
        const user_surname = currentTarget.closest('td').siblings('.td-user-surname').text()
        $.ajax({
            type: "DELETE",
            data: {
                user_id: currentTarget.data('user')
            },
            url: '/users',
            success: function (response) {
                if (response.result === true) {
                    currentTarget.closest('tr').fadeOut(400, function() { $(this).remove() })
                    createAlert('danger', `Пользователь ${user_surname} удален/а`);
                } else {
                    createAlert('danger', response.message);
                }
            }
        })
    })
})