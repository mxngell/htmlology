$(function() {

    $(window).on('scroll', () => {
        var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
        $("#progress-bar").width (ratio + "%");
    })

    $('#end-btn').on('click', function(e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: "/study/send-answer",
            data: {
                answer: $('#answer-textarea').val(), 
                user_id: $('#answer-textarea').attr('user-id'), 
                theme_id: $('#answer-textarea').attr('theme-id')
            },
            beforeSend: function() {
                $('main').append('<div id="loading-screen"><div class="spinner-border" role="status"></div></div>')              
            },
            complete: function() {
                $('#loading-screen').remove()
            },
            success: function(response) {
                if(response.result == true) {
                    $('main').append(`
                        <div id="complete-modal" class="complete-modal">
                            <div class="complete-modal-content">
                                <div class="modal-icon">
                                    <svg viewBox="0 0 308 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="146" cy="146" r="115.5" stroke="#117C00" stroke-width="14"/>
                                        <path d="M102.667 154L141.167 192.5L205.333 115.5" stroke="#117C00" stroke-width="14"/>
                                    </svg>                            
                                </div>
                                <div class="modal-body">
                                    <h3>Тема пройдена</h3>
                                    <p>Письмо с вашим ответом было отправлено <br> на  электронную  почту преподавателя.</p>
                                    <p class="teacher-info">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="8" r="4" fill="#E4E4E4" fill-opacity="0.5"/>
                                            <path d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z" fill="#E4E4E4" fill-opacity="0.5"/>
                                        </svg>                                
                                        ${response.authorSurname} ${response.authorName.charAt(0)}. ${response.authorMiddle_name.charAt(0)}.
                                        <br>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="4" y="6" width="16" height="12" rx="2" stroke="#E4E4E4" stroke-opacity="0.5" stroke-width="2"/>
                                            <path d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9" stroke="#E4E4E4" stroke-opacity="0.5" stroke-width="2"/>
                                        </svg>                                
                                        ${response.authorEmail}
                                    </p>
                                    <a id="complete-btn" href="/study">Продолжить</a>                        
                                </div>
                            </div>
                        </div>
                    `) 
                } else {
                    if(!$('#answer-textarea').hasClass('answer-is-empty')) {
                        $('#answer-textarea').addClass('answer-is-empty');
                        $('#answer-textarea').after(`<p class="answer-error">${response.message}</p>`)
                    }
                }
            }
        })
    })
})