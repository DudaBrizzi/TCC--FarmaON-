$('.btn-save').click(function(e) {
    e.preventDefault()
    var dados = $('#add_farmacia').serialize()
    var url = 'farmacia/modelo/add_farmacia.php'
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados) {
            if (dados.return == true) {
                Swal.fire({
                    title: 'Nova Farmácia!',
                    text: 'Cadastro efetuado com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!'
                })
                $('#farmacia').modal('hide')
                $('#content').load('farmacia/visao/farmacia.html')
            } else {
                Swal.fire({
                    title: 'Nova Farmácia',
                    text: dados.return,
                    type: 'error',
                    confirmButtonText: 'Tentar novamente...'
                })
                $('#farmacia').modal('hide')
            }
        }
    })
})