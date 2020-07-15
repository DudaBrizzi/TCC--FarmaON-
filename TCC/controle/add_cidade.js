console.log('atualizado')
$('.btn-add').click(function(e){
    e.preventDefault()
    var dados = $('#add').serialize()
    console.log('atualizado')
    console.log(dados)
    var url = 'controle/add_cidade.php'
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        data: dados,
        success: function(dados){
            if (dados.return == true){
                Swal.fire({
                    title: 'Nova cidade!',
                    text: 'Cadastro efetuado com sucesso!',
                    type: 'success',
                    confirmButtonText: 'Feito!'
                })
                $('#cidades').modal('hide')
                $('#content').load('addcity.html')
            }else{
                Swal.fire({
                    title: 'Nova cidade!',
                    text: dados.return,
                    type: 'error',
                    confirmButtonText: 'Tentar novamente...'
                })
                $('#cidades').modal('hide')
            }
        }
    })
})