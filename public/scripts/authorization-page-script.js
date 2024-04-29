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
        if(formValidation(authorization_form) == true) {
            let form_data = $('#authorization-form').serialize();
            $.post('/authorization/auth-user', form_data, function (response) {
                if(response.access == true) {
                    window.location.replace('/home')
                } else {
                    createAlert('danger', response.message)
                }
            })
        };
    })

    function formValidation(form) {
        let result = true;
        deleteErrors(all_inputs);
        all_inputs.each(function() {
            isEmpty($(this))
         })
        function isEmpty(element){
            if(element.val() == "") {
                createError(element, 'Поле должно быть заполнено')
            }
        }
        function createError(element, text) {
            const current_element = element.parent()
            if(current_element.hasClass('input-no-error')) {
                current_element.removeClass('input-no-error');
            }
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
