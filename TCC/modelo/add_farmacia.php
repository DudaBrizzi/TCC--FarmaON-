<?php
include('../../conexao/conn.php');

$sql = "INSERT INTO farmacia (nome) VALUES ('".utf8_decode($_POST['nome'])."')";

if(mysqli_query($conecta, $sql)){
    $data = array('return' => true);
} else{
    $data = array('return' => 'Erro: '.mysqli_error($conecta));
}

echo json_encode($data)
?>