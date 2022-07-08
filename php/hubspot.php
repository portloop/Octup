        
<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];


$arr = array(
  'properties' => array(
    array(
      'property' => 'email',
      'value' => $email
    ),
    array(
      'property' => 'firstname',
      'value' => $name
    ),
    array(
      'property' => 'phone',
      'value' => $phone
    )
  )
);
$post_json = json_encode($arr);
$endpoint = 'https://api.hubapi.com/contacts/v1/contact?hapikey=eu1-e9f1-7eae-48ef-bb6e-55d5e9b5b996';
$ch = @curl_init();
@curl_setopt($ch, CURLOPT_POST, true);
@curl_setopt($ch, CURLOPT_POSTFIELDS, $post_json);
@curl_setopt($ch, CURLOPT_URL, $endpoint);
@curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
@curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = @curl_exec($ch);
$status_code = @curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curl_errors = curl_error($ch);
@curl_close($ch);
echo "curl Errors: " . $curl_errors;
echo "\nStatus code: " . $status_code;
echo "\nResponse: " . $response;
?>
    