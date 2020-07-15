$(document).ready(function() {
    // Dando função ao botão ADD

    $('.btn-add').click(function() {
        let form = `
    <form id="add">
        <div class="form-group">
            <label>Nome da cidade</label>
            <input type="text" name="nome" id="" class="form-control input-lg">
    </div>
        <div class="form-group">
            <label>UF da cidade</label>
            <input type="text" name="nome" id="" class="form-control input-lg">
    </div>
    <div class="form-group row">
        <div class="offset-md-8 col-md-4 col-12">
            <button class="btn btn-outline-success btn-block btn-save"><i class="mdi mdi-content-save"></i>Salvar</button>
        </div>
    </div>
</form>
`

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Cadastro de cidades')
        $('.modal-body').append(form)
        $('#cidades').modal('show')
        $('body').append('<script src="controle/add_cidade.js"></script>')
    })
})