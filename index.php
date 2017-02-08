<?php

$name=$_POST['name'];
$email=$_POST['email'];
$contact=$_POST['phone'];
$message=$_POST['message'];


require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();                                   // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com;smtp.mail.yahoo.com;smtp.live.com';                    // Specify main and backup SMTP servers such as gmail,yahoo,hotmail.
$mail->SMTPAuth = true;                            // Enable SMTP authentication
$mail->Username = 'rootsentertain@gmail.com';          // SMTP username
$mail->Password = 'rootsentertainment'; // SMTP password
$mail->SMTPSecure = 'ssl';                         // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                 // TCP port to connect to

$mail->setFrom('rootsentertain@gmail.com', 'RootsEntertainment');
// $mail->addReplyTo('rootsentertain@gmail.com', 'RootsEntertainment');
$mail->addAddress($_POST['email']);   // Add a recipient
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

$mail->isHTML(true);  // Set email format to HTML

$bodyContent = '<h1>Thank you </h1>'.$name.'<h1>for sharing your response</h1>';
$bodyContent .= '<p>We will soon get back to you</b></p>';

$mail->Subject = 'Roots Entertainment';
$mail->Body    = $bodyContent;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}


$mail1 = new PHPMailer;

$mail1->isSMTP();                                   // Set mailer to use SMTP
$mail1->Host = 'smtp.gmail.com';                    // Specify main and backup SMTP servers
$mail1->SMTPAuth = true;                            // Enable SMTP authentication
$mail1->Username = 'rootsentertain@gmail.com';          // SMTP username
$mail1->Password = 'rootsentertainment'; // SMTP password
$mail1->SMTPSecure = 'ssl';                         // Enable TLS encryption, `ssl` also accepted
$mail1->Port = 465; 


$mail1->setFrom('$email','$name');
// $mail->addReplyTo('rootsentertain@gmail.com', 'RootsEntertainment');
$mail1->addAddress('rootsentertain@gmail.com');   // Add a recipient
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

$mail1->isHTML(true);  // Set email format to HTML

$bodyContent1 = '<h1>'.$name.'</h1>';
$bodyContent1 .='<h1>'.$contact.'</h1>';
$bodyContent1 .='<h1>'.$message.'</h1>';
// $bodyContent .= '<p>We will soon get back to you</b></p>';

$mail1->Subject = 'Customer';
$mail1->Body    = $bodyContent1;

if(!$mail1->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}



?>
