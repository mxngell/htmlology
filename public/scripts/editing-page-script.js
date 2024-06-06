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
    $('input[name="title"]').on('input', function() {
        $('#theme-title').text($(this).val())
    })
    
    $('#update-theme-form').on('submit', (e) => {
        e.preventDefault()
        $.ajax({
            type: "PATCH",
            url: "/themes",
            data: {
                theme_id: $('input#theme_id').val(),
                title: $('input#title').val().trim(),
                description: $('input#description').val().trim(),
                theory: theory_editor.getSemanticHTML(),
                task: task_editor.getSemanticHTML()
            },
            success: function(response) {
                response.result == true ? createAlert('success', 'Изменения сохранены') : createAlert('warning', response.message)
            },
            error: function (xhr, status, error) {
                createAlert('danger', 'Произошла ошибка при выполнении запроса');
            }
        })
    })

    $('input[name="title"]').next().children('span.character-count').text($('input[name="title"]').val().trim().length)
    $('input[name="description"]').next().children('span.character-count').text($('input[name="description"]').val().trim().length)
    $('input[name="title"], input[name="description"]').on('input', function() {
        $(this).val($(this).val().substring(0,$(this).next().children('span.max-count').text()))
        $(this).next().children('span.character-count').text($(this).val().trim().length)
    })
})