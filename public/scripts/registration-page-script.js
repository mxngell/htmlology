$(function() {
    let registration_form = $('.registration-block');
    registration_form.slideDown();
    
    registration_form.on('submit', function(e) {
        e.preventDefault();
        if(formValidation()) { 
            let form_data = $('#registration-form').serialize();
            $.post('/registration/', form_data, function (response) {
                response.result == true ? createAlert('success', 'Регистрация прошла успешно') : createAlert('warning', response.message)
            })
        }
    })

    $('input[name="password"]').on('input', function() {
        if( $(this).val().length > 12 ){
            $(this).val($(this).val().substr(0, 12));
        }
    })

    $('input[name="name"], input[name="surname"], input[name="middle_name"]').on('input', function() {
        if( $(this).val().length > 20 ){
            $(this).val($(this).val().substr(0, 20));
        }
    })

    function formValidation() {
        let result = true;
        let all_inputs = $('.registration-block-body-inputs input')
        let email = $('input[name="email"]');
        let password = $('input[name="password"]');
        let name = $('input[name="name"]');
        let surname = $('input[name="surname"]');
        let middle_name = $('input[name="middle_name"]');

        deleteErrors();

        all_inputs.each(function(index, element) {
            $(element).val() == "" ? createError($(element), 'Поле должно быть заполнено') : successInput($(element))
         })
        
        if(!email.parent().hasClass('input-with-error') && !email.val().trim().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gm)){
            createError(email, 'Введите правильную почту. Например: example@mail.ru');
        }

        if(!password.parent().hasClass('input-with-error')){
            if(password.val().length < 8 || password.val().length > 12){
                createError(password, 'Пароль должен содержать от 8 до 12 символов');
            } else if (!password.val().match(/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?\W)(?!.*\s)(?!.*[а-яА-Я]).{8,12}$/gm)) {
                createError(password, 'Пароль должен содержать латиницу, хотя бы одну цифру и спецсимвол без пробелов');
            }
        }

        let reg_exp = /^[А-Яа-я]{2,20}$/gm;

        if(!name.parent().hasClass('input-with-error') && !name.val().trim().match(reg_exp)){
            createError(name, 'Введите правильное имя на кириллице. Например: Василий');
        }

        if(!surname.parent().hasClass('input-with-error') && !surname.val().trim().match(reg_exp)){
            createError(surname, 'Введите правильную фамилию на кириллице. Например: Смирнов');
        }

        if(!middle_name.parent().hasClass('input-with-error') && !middle_name.val().trim().match(reg_exp)){
            createError(middle_name, 'Введите правильное отчество на кириллице. Например: Михайлович');
        }

        function createError(element, text) {
            const current_element = element.parent()
            if(current_element.hasClass('input-no-error')) current_element.removeClass('input-no-error')
            current_element.addClass('input-with-error');
            current_element.after(`<div class="input-error-message">${text}</div>`)
            result = false;
        }

        function deleteErrors() {
            $('.input-with-error').next().remove()
            $('.input-with-error').removeClass('input-with-error')
        }

        function successInput(element) {
            element.parent().addClass('input-no-error')
        }

        return result;
    }
    
})