$(document).ready(function() {
    $('.new-task-button').on('click', function() {
        let tarefa = $('.new-task-input').val().trim();
        if (tarefa !== '') {
            const linha = $('<li>' + tarefa + '</li>');
            $('ul.pendentes').append(linha);
            $('.new-task-input').val('');
        }
    });

    $('ul.pendentes').on('click', 'li', function() {
        $(this).toggleClass('concluida');
        $('ul.concluidas').append($(this));
    });
});
