<?php
  $name = htmlspecialchars($_GET['fullname']);
  $email = htmlspecialchars($_GET['email']);
  $phone = htmlspecialchars($_GET['phone']);
  $comment = htmlspecialchars($_GET['comment']);
  if(!empty($email) && !empty($comment)){
    $subject = "From: $name <$email>";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$comment,\n$name";
    mail("remither@remitherrien.com",$subject,$body);
    header("Location: https://remitherrien.com/contact.html ");

  }else{
    echo "Email and message field is required!";
  }
?>