<?php

$url = 'http://199.15.103.22/api.php';
$fields = array(
                        'KEY' => '6555aa61af01ed41f6bf51a3242239fe',
                        'METHOD' => 'GET_UI_BUTTONS',
                );
$fields_json=json_encode($fields);

$ch = curl_init();
curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_json);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Content-Length: ' . strlen($fields_json)));
$result = curl_exec($ch);


echo $result;
curl_close($ch);

?>
