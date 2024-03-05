// // Signup.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../style.css'; 
// import signupImage from '../images/logo1.png'; // Import your signup image

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = () => {
//     if (password !== confirmPassword) {
//       alert('Passwords do not match. Please try again.');
//       return;
//     }

//     // Implement signup logic here (not implemented in this example)
//     // For simplicity, let's assume signup is successful
//     alert('Signup successful! You can now login.');
//     navigate('/login'); // Redirect to the login page after signup
//   };

//   return (
//     <div className="signup-container">
//       <img src={signupImage} alt="Signup" className="signup-image" />

//       <form>
//       <div className="electric">
//       #We are Electric
//         </div>
//         {/* <label htmlFor="email"></label> */}
//         <input
//           id="email"
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />

//         {/* <label htmlFor="password">Password:</label> */}
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />

//         {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
//         <input
//           id="confirmPassword"
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder="Confirm Password"
//         />

//         <button type="button" onClick={handleSignup}>
//         <span> Signup </span>
//         </button>
//       </form>

//       <div className="login-link">
//         Already have an account? <a href="/login">Login</a>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import signupImage from '../images/logo1.png'; // Import your signup image
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../style.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert('Signup successful! You can now login.');
      navigate('/login'); // Redirect to the login page after signup
    } catch (error) {
      console.error('Error signing up:', error.message); // Log the error message
      alert('Failed to sign up: ' + error.message); // Display the error message
    }
  };
  

  return (
    <div className="signup-container">
      <img src={signupImage} alt="Signup" className="signup-image" />

      <form>
        <div className="electric">#We are Electric</div>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />

        <button type="button" onClick={handleSignup}>
          <span>Signup</span>
        </button>
      </form>

      <div className="login-link">
  Already have an account? <Link to="/login">Login</Link>
</div>
    </div>
  );
};

export default Signup;
