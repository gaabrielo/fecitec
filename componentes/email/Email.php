<?php
    use PHPMailer\PHPMailer\PHPMailer;

    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    class Email{
        private $mail;

        public function __construct(){
            $this->mail = New PHPMailer(true);
            $this->mail->isSMTP();
            $this->mail->Host = 'smtp3.ufpr.br';  
            $this->mail->SMTPAuth = true;                  
            $this->mail->Username = '#';  
            $this->mail->Password = '#';             
            $this->mail->SMTPSecure = 'STATTLS';              
            $this->mail->Port = 587;  
        }

        public function enviar($titulo, $mensagem, $professor){
            $this->mail->setFrom('fecitec@ufpr.br', 'FECITEC');
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