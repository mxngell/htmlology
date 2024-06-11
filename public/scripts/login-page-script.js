$(function() {
    let authorization_form = $('#authorization-form')
    let auth_all_inputs = $('#authorization-form .form-block-body-inputs input')

    let registration_form = $('#registration-form');
    let reg_all_inputs = $('#registration-form .form-block-body-inputs input')

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

    authorization_form.on('submit', function(e) {
        e.preventDefault();
        if(authFormValidation()) {
            let form_data = $('#authorization-form').serialize();
            $.post('/login/auth', form_data)
            .done(function (response) {
                response.access == true ? window.location.replace('/home') : createAlert('danger', response.message)
            })
            .fail(function (xhr, status, error) {
                createAlert('danger', 'Произошла ошибка при выполнении запроса');
            })
        };
    })

    registration_form.on('submit', function(e) {
        e.preventDefault();
        if(regFormValidation()) { 
            let form_data = $('#registration-form').serialize();
            $.post('/login/reg', form_data)
            .done(function (response) {
                response.result == true ? createAlert('success', 'Регистрация прошла успешно') : createAlert('warning', response.message)
            })
            .fail(function (xhr, status, error) {
                createAlert('danger', 'Произошла ошибка при выполнении запроса');
            })
        }
    })

    function authFormValidation() {
        let result = true;
        deleteErrors(auth_all_inputs);

        auth_all_inputs.each(function(index, element) {
            if($(element).val() == "") createError($(element), 'Поле должно быть заполнено')
         })

        function createError(element, text) {
            const current_element = element.parent()
            if(current_element.hasClass('input-no-error')) current_element.removeClass('input-no-error')
            current_element.addClass('input-with-error');
            current_element.after(`<div class="input-error-message">${text}</div>`)
            result = false;
        }
        
        return result;
    }

    function regFormValidation() {
        let result = true;
        let email = $('#registration-form input[name="email"]');
        let password = $('#registration-form input[name="password"]');
        let name = $('#registration-form input[name="name"]');
        let surname = $('#registration-form input[name="surname"]');
        let middle_name = $('#registration-form input[name="middle_name"]');

        deleteErrors(reg_all_inputs);

        reg_all_inputs.each(function(index, element) {
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
    
        function successInput(element) {
            element.parent().addClass('input-no-error')
        }

        return result;
    }

    function deleteErrors(element) {
        const current_element = element.parent()
        if(current_element.hasClass('input-with-error')) {
            current_element.removeClass('input-with-error');
            current_element.next().remove();
        }
    }

    $('.registration-link').on('click',  (e) => {
        authorization_form.fadeOut(300, function() {
            registration_form.fadeIn()
            deleteErrors(auth_all_inputs)
            authorization_form.trigger('reset')
            document.title = 'Регистрация'
        })
    })

    $('.authorization-link').on('click',  (e) => {
        registration_form.fadeOut(300, function() {
            authorization_form.fadeIn()
            registration_form.trigger('reset')
            deleteErrors(reg_all_inputs)
            document.title = 'Авторизация'
        })
    })

})
