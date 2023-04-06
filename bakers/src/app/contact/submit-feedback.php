<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Validate the form data
if (empty($name) || empty($email) || empty($message)) {
  echo "Please fill out all fields.";
  exit;
}

// Set up the email parameters
$to = "your-email@example.com";
$subject = "New Feedback Submission";
$body = "Name: $name\nEmail: $email\nMessage: $message";
$headers = "From: $email";

// Send the email
if (mail($to, $subject, $body, $headers)) {
  echo "Thank you for your feedback!";
} else {
  echo "There was an error sending your feedback. Please try again later.";
}
?>
