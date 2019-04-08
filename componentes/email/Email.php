<?php
    require_once("PHPMailer/PHPMailerAutoload.php");
    
    header("Content-type: text/html; charset=utf-8");

    class Email{
        private $mail;

        public function __construct(){
            $this->mail = New PHPMailer;
            $this->mail->isSMTP();                             // Set mailer to use SMTP
            $this->mail->Host = '#';               // Specify main and backup SMTP servers
            $this->mail->SMTPAuth = true;                      // Enable SMTP authentication
            $this->mail->Username = '#';         // SMTP username
            $this->mail->Password = '#';                // SMTP password
            $this->mail->SMTPSecure = '#';              // Enable TLS encryption, `ssl` also accepted
            $this->mail->Port = 0;
        }

        public function enviar($titulo, $mensagem, $professor){
            $this->mail->setFrom('fecitec@ufpr.br');
            $this->mail->addAddress('fecitec.ufpr@gmail.com');
            $this->mail->addAddress($professor);
            $this->mail->addBCC('xfelipesobral@gmail.com');

            $this->mail->isHTML(true); 

            $this->mail->Subject = utf8_decode("INSCRIÇÃO: $titulo");
            $this->mail->Body = utf8_decode($mensagem);
            $this->mail->AltBody = utf8_decode($mensagem);

            if($this->mail->send()){
                return true;
            }
        }

        public function enviar_teste($titulo, $mensagem, $professor){
            $this->mail->setFrom('fecitec@ufpr.br');
            $this->mail->addAddress($professor);
            $this->mail->addBCC('xfelipesobral@gmail.com');

            $this->mail->isHTML(true); 

            $this->mail->Subject = utf8_decode("INSCRIÇÃO: $titulo");
            $this->mail->Body = utf8_decode($mensagem);
            $this->mail->AltBody = utf8_decode($mensagem);

            if($this->mail->send()){
                return true;
            }
        }

    }