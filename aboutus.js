function sendConfirmation() {
  // Assuming the sending operation is done here
  // Show the confirmation message with animation
  const message = document.getElementById('confirmation-message');
  
  message.classList.remove('hidden');
  message.classList.add('visible');
  
  // Hide the message after 3 seconds
  setTimeout(() => {
    message.classList.remove('visible');
    message.classList.add('hidden');
  }, 1000);
}  