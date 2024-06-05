import { render } from '@czechitas/render';
import '../global.css';
import './index.css';



document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('messageForm');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const messageInput = document.getElementById('message');
      const message = messageInput.value;
      const name = nameInput.value;
      

      fetch('https://czechichat.deno.dev/api/send-message', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: name, message: message })

          
      })

      messageInput.value = '';
  });
});