$(document).ready(function(){
    var url = 'modelo/list_city.php'
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: url,
        assync: true,
        success: function(dados){
            for(var i = 0; i < dados.lenght; i++){
                let cidade = `
            <div class="col-md-3 col-6 mt-3">
                <div class= "card">
                    <div class= "card-body">
                        <h5 class="card-title">${dados[i].nome}</h5>
                        <p class="card-text">
                        
                            <button class="btn btn-info btn-block btn-view"><i class="mdi mdi-eye"></i>Visualizar</button>

                            <button class="btn btn-primary btn-block btn-edit"><i class="mdi mdi-pencil"></i>Editar</button>

                            <button class="btn btn-danger btn-block btn-delete"><i class="mdi mdi-trash"></i>Excluir</button>
                        </p>
                    </div>
                </div>
            </div>
            `
            $('#list_city').append(cidade)
            }
        }
    })
})