$(function() {
    let authorization_form = $('.authorization-block')
    let all_inputs = $('.authorization-block-body-inputs input')
    authorization_form.slideDown();

    $('input[name="password"]').on('input', function() {
        if( $(this).val().length > 12 ){
            $(this).val($(this).val().substr(0, 12));
        }
    })

    authorization_form.on('submit', function(e) {
        e.preventDefault();
        if(formValidation()) {
            let form_data = $('#authorization-form').serialize();
            $.post('/authorization/', form_data)
            .done(function (response) {
                response.access == true ? window.location.replace('/home') : createAlert('danger', response.message)
            })
            .fail(function (xhr, status, error) {
                createAlert('danger', 'Произошла ошибка при выполнении запроса');
            })
        };
    })

    function formValidation() {
        let result = true;
        deleteErrors(all_inputs);

        all_inputs.each(function(index, element) {
            if($(element).val() == "") createError($(element), 'Поле должно быть заполнено')
         })

        function createError(element, text) {
            const current_element = element.parent()
            if(current_element.hasClass('input-no-error')) current_element.removeClass('input-no-error')
            current_element.addClass('input-with-error');
            current_element.after(`<div class="input-error-message">${text}</div>`)
            result = false;
        }

        function deleteErrors(element) {
            const current_element = element.parent()
            if(current_element.hasClass('input-with-error')) {
                current_element.removeClass('input-with-error');
                current_element.next().remove();
            }
        }
        
        return result;
    }
})
