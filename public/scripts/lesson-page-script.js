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
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.29 8.70994C16.383 8.80367 16.4936 8.87806 16.6154 8.92883C16.7373 8.9796 16.868 9.00574 17 9.00574C17.132 9.00574 17.2627 8.9796 17.3846 8.92883C17.5064 8.87806 17.617 8.80367 17.71 8.70994L21.71 4.70994C21.8983 4.52164 22.0041 4.26624 22.0041 3.99994C22.0041 3.73364 21.8983 3.47825 21.71 3.28994C21.5217 3.10164 21.2663 2.99585 21 2.99585C20.7337 2.99585 20.4783 3.10164 20.29 3.28994L17 6.58994L15.71 5.28994C15.6168 5.1967 15.5061 5.12274 15.3842 5.07228C15.2624 5.02182 15.1319 4.99585 15 4.99585C14.7337 4.99585 14.4783 5.10164 14.29 5.28994C14.1968 5.38318 14.1228 5.49387 14.0723 5.61569C14.0219 5.73751 13.9959 5.86808 13.9959 5.99994C13.9959 6.26624 14.1017 6.52164 14.29 6.70994L16.29 8.70994ZM21 7.99994C20.7348 7.99994 20.4804 8.1053 20.2929 8.29283C20.1054 8.48037 20 8.73472 20 8.99994V17.9999C20 18.2652 19.8946 18.5195 19.7071 18.707C19.5196 18.8946 19.2652 18.9999 19 18.9999H5C4.73478 18.9999 4.48043 18.8946 4.29289 18.707C4.10536 18.5195 4 18.2652 4 17.9999V8.40994L9.88 14.2999C10.4412 14.8566 11.1995 15.1693 11.99 15.1699C12.8004 15.1658 13.5764 14.8424 14.15 14.2699L15.87 12.5499C16.0583 12.3616 16.1641 12.1062 16.1641 11.8399C16.1641 11.5736 16.0583 11.3182 15.87 11.1299C15.6817 10.9416 15.4263 10.8358 15.16 10.8358C14.8937 10.8358 14.6383 10.9416 14.45 11.1299L12.7 12.8799C12.5131 13.0632 12.2618 13.1658 12 13.1658C11.7382 13.1658 11.4869 13.0632 11.3 12.8799L5.41 6.99994H11C11.2652 6.99994 11.5196 6.89458 11.7071 6.70705C11.8946 6.51951 12 6.26516 12 5.99994C12 5.73472 11.8946 5.48037 11.7071 5.29283C11.5196 5.1053 11.2652 4.99994 11 4.99994H5C4.20435 4.99994 3.44129 5.31601 2.87868 5.87862C2.31607 6.44123 2 7.20429 2 7.99994V17.9999C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 20.9999 5 20.9999H19C19.7956 20.9999 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 17.9999V8.99994C22 8.73472 21.8946 8.48037 21.7071 8.29283C21.5196 8.1053 21.2652 7.99994 21 7.99994Z" fill="#117C00"/>
                                    </svg>
                                </div>
                                <div class="modal-body">
                                    <h3>Тема завершена</h3>
                                    <p>Письмо с вашим ответом было отправлено <br> на  электронную  почту преподавателя.</p>
                                    <p class="teacher-info">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="8" r="4" fill="#E4E4E4" />
                                            <path d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z" fill="#E4E4E4" />
                                        </svg>                                
                                        ${response.authorSurname} ${response.authorName.charAt(0)}. ${response.authorMiddle_name.charAt(0)}.
                                        <br>
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.59 6L12.71 11.88C12.617 11.9737 12.5064 12.0481 12.3846 12.0989C12.2627 12.1497 12.132 12.1758 12 12.1758C11.868 12.1758 11.7373 12.1497 11.6154 12.0989C11.4936 12.0481 11.383 11.9737 11.29 11.88L5.41 6H18.59ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.41L9.88 13.29C10.4425 13.8518 11.205 14.1674 12 14.1674C12.795 14.1674 13.5575 13.8518 14.12 13.29L20 7.41V17Z" fill="#E4E4E4" />
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
            },
            error: function (xhr, status, error) {
                createAlert('danger', 'Произошла ошибка при выполнении запроса');
            }
        })
    })
})