<?php
// Check for empty fields
if(empty($_POST['name'])) {
   echo("no name");
}
if(empty($_POST['email'])) {
   echo("no mail");
}
if(empty($_POST['message'])) {
   echo("no message");
}
if(!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "invalid mail";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$spam = $_POST['mail'];
   
// Create the email and send the message
$to = 'diestorymanufaktur@web.de'; // Add your email address in between the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "TechSales Pioneers Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: contact@techsales-pioneers.de\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   

// Create auto response and send response
$response_subject = "Kontaktformular TechSales Pioneers";
$response_body = "Hallo $name, \n\ndanke, dass Du uns kontaktiert hast! Wir bearbeiten Deine Anfrage so schnell wie möglich.\n\n"."Hier Deine Angaben:\n\nName: $name\n\nE-Mail: $email_address\n\nNachricht:\n$message";
$response_headers = "From: contact@techsales-pioneers.de\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$response_headers .= "Reply-To: contact@techsales-pioneers.de"; 

echo("contact folder \n");
if (empty($spam)) {
   // mail($to,$email_subject,$email_body,$headers);
   echo mail($to,$email_subject,$email_body,$headers) ? "pass\n" : 'fail\n';
   echo("Send Mail\n");
   echo mail($email_address,$response_subject,$response_body, $response_headers) ? "response pass" : 'response fail';
   echo("\nSend Response");
} else {
   echo("spam fail");
}

return true;            
?>