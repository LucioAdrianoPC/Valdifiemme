<?php
//error_reporting(E_ALL);

use  PHPMailer\PHPMailer\PHPMailer;
use  PHPMailer\PHPMailer\SMTP;
use  PHPMailer\PHPMailer\Exceção;

//Load Composer's autoloader 
require  'vendor/autoload.php' ;

//Variáveis

$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = "Mensagem enviada pelo site!";
$msg = $_POST['msg'];

// Compo E-mail
  $arquivo = "
  <style type='text/css'>
  body {
  margin:0px;
  font-family:Verdana;
  font-size:16px;
  color: #666666;
  }
  a{
  color: #666666;
  text-decoration: none;
  }
  a:hover {
  color: #FF0000;
  text-decoration: none;
  }
  </style>
    <html>
        <table width='510' border='0' cellpadding='0' cellspacing='0'>
  				<tr>
                 <td width='500'><b>Nome:</b> $nome</td>
                </tr><br>
                <tr>
                  <td width='500'><b>Email:</b> $email</td>
                </tr><br>
                <tr>
                  <td width='500'><b>Mensagem:</b> $msg</td>
                </tr>
            </td>
          </tr>  
        </table>
    </html>
  ";
  
 $mail = new PHPMailer();
 $mail->CharSet = "UTF-8";
 $mail->IsSMTP(); // enable SMTP
 //$mail->SMTPDebug = SMTP::DEBUG_SERVER; // debugging: 1 = errors and messages, 2 = messages only
 $mail->SMTPAuth = true; // authentication enabled
 $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
 $mail->Host = "mail.valdifiemme.com.br";
 $mail->Port = 465; // or 587
 $mail->IsHTML(true);
 $mail->Username = "contatosite@valdifiemme.com.br";
 $mail->Password = "@Alvorada";
 $mail->SetFrom("contatosite@valdifiemme.com.br");
 $mail->Subject = $assunto;
 $mail->Body = $arquivo;
 $mail->AddAddress("contato@valdifiemme.com.br");
    if(!$mail->Send()) {
       echo "<script>alert('Ops, algo deu errado, tente novamente')</script>";
	   echo "<script>window.location.replace('index.html#subscribe')</script>";
    } else {
       echo "<script>alert('Obrigado pelo contato, responderemos em breve!')</script>";
	   echo "<script>window.location.replace('index.html')</script>";
    }
?>