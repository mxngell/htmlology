const theory_editor = new Quill('#theory_editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],      
            [{ 'align': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            [{ 'color': [] }],
            ['clean'],
        ],
    }
})

const task_editor = new Quill('#task_editor', {
    theme: 'snow',
    modules: {
        toolbar: [
            ['bold', 'italic', 'underline'],  
            [{ 'align': [] }],    
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            [{ 'color': [] }],
            ['clean'],
        ],
    }
})

$(function() {
    $('#create-theme-form').on('submit', (e) => {
        e.preventDefault()
        $.ajax({
            type: "POST",
            url: "/themes",
            data: {
                title: $('input#title').val().trim(),
                description: $('input#description').val().trim(),
                theory: theory_editor.getSemanticHTML(),
                task: task_editor.getSemanticHTML()
            },
            success: function(response) {
                response.result == true ? createAlert('success', 'Новая тема успешно создана') : createAlert('warning', response.message)
            }
        })
    })

    $('.action-delete').on('click', (e) => {
        $.ajax({
            type: "DELETE",
            url: "/themes",
            data: { theme_id: $(e.currentTarget).data('theme') },
            success: function(response) {
                if(response.result == true) {
                    $(e.currentTarget).closest('.list-item').addClass('deleted').fadeOut(350, function() { $(this).remove() })  
                    createAlert('danger', 'Тема удалена') 
                } else {
                    createAlert('danger', 'Произошла ошибка при удалении темы') 
                }
            }
        })
    })

    $('#create-theme-form input[type="reset"]').on('click', (e) => {
        task_editor.deleteText(0, task_editor.getLength())
        theory_editor.deleteText(0, theory_editor.getLength())
        createAlert('warning', 'Форма очищена')
    })    

    $('input[name="title"], input[name="description"]').on('input', function() {
        $(this).val($(this).val().substring(0,$(this).next().children('span.max-count').text()))
        $(this).next().children('span.character-count').text($(this).val().trim().length)
    })
})

