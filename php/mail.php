<?php

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $content = 'Name:' . $name . 'Phone:' . $phone . 'Email: ' . $email;

    $success = mail('youremail@post.com', 'Order (Name, Email, Phone)', $content);
    if($success){
        http_response_code(200);
        echo 'Success!';
    } else {
        http_response_code(500);
        echo 'Request unavailable';
    } else {
        http_response_code(405);
        echo 'Request unavailable';
    }

} else {
    http_response_code(403);
    echo 'Request unavailable';
}