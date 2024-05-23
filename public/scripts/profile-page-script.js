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

$('#editDataModal-form').on('submit', function(e) {
    e.preventDefault()
    if(formValidation()) return this.submit();
})

function formValidation() {
    let result = true
    let all_inputs = $('#editDataModal-form .edit-form-item input')
    let email = $('input[name="email"]');
    let name = $('input[name="name"]');
    let surname = $('input[name="surname"]');
    let middle_name = $('input[name="middle_name"]');

    deleteErrors();

    all_inputs.each(function() {
       isEmpty($(this))
    })
    
    if(!email.parent().hasClass('input-with-error')){
        if(!email.val().trim().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gm)) {
            createError(email, 'Введите правильную почту. Например: example@mail.ru');
        }
    }

    let reg_exp = /^[А-Яа-я]{2,20}$/gm;

    if(!name.parent().hasClass('input-with-error')){
        if(!name.val().trim().match(reg_exp)) {
            createError(name, 'Введите правильное имя на кириллице. Например: Василий');
        }
    }

    if(!surname.parent().hasClass('input-with-error')){
        if(!surname.val().trim().match(reg_exp)) {
            createError(surname, 'Введите правильную фамилию на кириллице. Например: Смирнов');
        }
    }

    if(!middle_name.parent().hasClass('input-with-error')){
        if(!middle_name.val().trim().match(reg_exp)) {
            createError(middle_name, 'Введите правильное отчество на кириллице. Например: Михайлович');
        }
    }

    function isEmpty(element){
        if(element.val() == "") {
            createError(element, 'Поле должно быть заполнено')
         } else {
            successInput(element);
        }
    }

    function createError(element, text) {
        const current_element = element.parent()
        if(current_element.hasClass('input-no-error')) {
            current_element.removeClass('input-no-error');
        }
        current_element.addClass('input-with-error');
        current_element.append(`<div class="input-error-message">${text}</div>`)
        result = false
    }

    function deleteErrors() {
        $('.input-with-error .input-error-message').remove()
        $('.input-with-error').removeClass('input-with-error')
    }

    function successInput(element) {
        element.parent().addClass('input-no-error')
    }

    return result
}