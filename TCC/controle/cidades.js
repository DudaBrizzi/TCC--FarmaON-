$('.btn-add').click(function() {
    let form = `
    <form id="add">
    <div class="form-group">
        <label for="">Nome da cidade</label>
        <input type="text" name="nome" class="form-control input-lg">
    </div>
    <div class="form-group">
        <label for="">UF da cidade</label>
        <input type="text" name="nome" class="form-control input-lg">
    </div>
    <div class="form-group row">
        <div class="offset-md-8 col-md-4 col-12">
            <button class="btn btn-success btn-block btn-lg btn-save"><i class="mdi mdi-content-save"></i>Salvar</button>
        </div>
    </div>
</form>
`

    $('.modal-title').empty()
    $('.modal-body').empty()

    $('.modal-title').append('Cadastro de cidades')
    $('.modal-body').append(form)

    $('#modal-cidade').modal('show')
    $('body').append('<script src="controle/add_cidade.js"></script>')
})