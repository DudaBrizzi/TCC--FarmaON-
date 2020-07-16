<?php
include('../conexao/conn.php');
print_r($_REQUEST);
exit;

$qryLista = mysqli_query($conecta, "INSERT INTO cidade");
while($resultado = msqli_fetch_assoc($qryLista)){
    $result[] = array_map('utf8_encode', $resultado);
}

echo json_encode($result);

?>