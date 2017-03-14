<?php

$name=$_POST['name'];
$email=$_POST['email'];
$contact=$_POST['phone'];
$message=$_POST['message'];


require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();                                // Set mailer to use SMTP


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
