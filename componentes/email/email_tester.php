<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    $mail = new PHPMailer(true);

    try {
        
        $mail->SMTPDebug = 2;
        $mail->isSMTP();
        $mail->Host = "smtp3.ufpr.br";
        $mail->SMTPAuth = true;
        $mail->Username = '#';        
        $mail->Password = '#';             
        $mail->SMTPSecure = 'STATTLS';
        $mail->Port = 587;

        //Recipients
        $mail->setFrom('fecitec@ufpr.br', 'FECITEC');
        $mail->addAddress('xfelipesobral@gmail.com');
        
        $mail->isHTML(true);
        $mail->Subject = "TESTE";
        $mail->Body = "teste...";
        $mail->AltBody = "teste2";

        $mail->send();
        echo "Email enviado!";

    } catch (Exception $e){
        echo "não deu";
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }