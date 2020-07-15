<?php
include('../../conexao/conn.php');

$qryLista = mysqli_query($conecta, "SELECT * FROM cidade");
while($resultado = msqli_fetch_assoc($qryLista)){
    $result[] = array_map('utf8_encode', $resultado);
}

echo json_encode($result);

?>