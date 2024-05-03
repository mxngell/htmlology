$(function() {
    $('input[name="title"]').on('input', function() {
        $('#theme-title').text($(this).val())
    })
})

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
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            [{ 'color': [] }],
            ['clean'],
        ],
    }
})

$(function() {
    $('#update-theme-form').on('submit', (e) => {
        e.preventDefault()
        $.ajax({
            type: "PATCH",
            url: "/study",
            data: {
                theme_id: $('input#theme_id').val(),
                title: $('input#title').val().trim(),
                description: $('input#description').val().trim(),
                theory: theory_editor.getSemanticHTML(),
                task: task_editor.getSemanticHTML()
            },
            success: function(response) {
                response.result == true ? createAlert('success', 'Изменения сохранены') : createAlert('warning', response.message)
            }
        })
    })
})