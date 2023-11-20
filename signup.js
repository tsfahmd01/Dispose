document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded event fired');
  const signUpForm = document.getElementById('signUpForm');
  const signUpError = document.getElementById('signUpError');

  // Ensure Firebase is initialized
  firebase.initializeApp(firebaseConfig);

  // Check authentication state
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('User is signed up:', user);
      // Optionally, you can redirect here if needed
    } else {
      console.log('No user signed up');
    }
  });

  // Change the event from 'click' to 'submit'
  signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    // Sign up the user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Redirect to the login page after successful signup
        window.location.href = 'login.html';
      })
      .catch((error) => {
        console.error('Error signing up:', error);

        // Display the signup error message
        signUpError.textContent = error.message;
      });
  });
});
