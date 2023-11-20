document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      // Sign in the user with email and password
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          // Redirect to the home page after successful login
          window.location.href = 'home.html';
        })
        .catch((error) => {
          console.error('Error signing in:', error);
          // Handle login errors if needed (e.g., display an error message)
        });
    });
  });
  