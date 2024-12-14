<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        exit;

    case "POST":
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $message = $params->message;

        $recipient = 'CONTACT@YOUR-WEBSITE.COM';  
        $subject = "Contact From <$email>";
        $message = "From:" . $name . "<br>" . "E-Mail:" . $email . "<br>" . "<br>" . $message;

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: CONTACT@YOUR-WEBSITE.COM";

        mail($recipient, $subject, $message, implode("\r\n", $headers));
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}
