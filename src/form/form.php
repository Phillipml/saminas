<!doctype html>
<html lang="pt">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="form.css">
    <title>Enviando e-mail com php!</title>
  </head>
  <section class="contact-us">
    <h2>Fale Conosco</h2>
    <form method="post">
        <input type="text" class="input-large" name="name" placeholder="Nome*" required>
        <input type="text" class="input-large" name="email" placeholder="E-mail*" required>
        <input type="text" class="input-large" name="number" required placeholder="Número*">
        <textarea name="message" required placeholder="Mensagem*"></textarea>
        <p>*Campos obrigatórios</p>
        <div class="email-send" id="successMsg"></div>
        <div class="submit"><input type="submit" id="submit" name="message" onclick="contactUsSubmit()"></div>
		
    </form>
	<?php



$name = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$number = addslashes($_POST['number']);
$message = addslashes($_POST['message']);

$to = "phillip.menezes0206@gmail.com.br";
$subject = "CONTATO SITE";
$body = "Nome: ".$name. "\r\n".
		"Email: ".$email. "\r\n".
		"Telefone: ".$number. "\r\n".
	    "Mensagem: ".$message;

$header = "From: contato.phillip.menezes@gmail.com"."\r\n"."Reply-To:".$email."\r\n".
		  "X=Mailer:PHP/".phpversion();
if(mail($to,$subject,$body,$header)){
	echo 'UIHUUUUUUUUUUUUUUUL';
}else{
	echo("Email não pode ser enviado");
}

}


?>
    <script>
        $('#number').mask('(00) 0000-00000'); 
    </script>

  </body>
</html>