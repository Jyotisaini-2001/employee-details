// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../style.css'; 
// import loginImage from '../images/logo1.png'; // Import your signup image
// import firebase from 'firebase/compat/app'
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const isAuthenticated = validateCredentials(email, password);

//     if (isAuthenticated) {
//       localStorage.setItem('isLoggedIn', 'true');
//       navigate('/dashboard');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   const validateCredentials = (enteredEmail, enteredPassword) => {
//     return enteredEmail === 'user@example.com' && enteredPassword === 'password';
//   };

//   return (
//     <div className="login-container">
//       <img src={loginImage} alt="Login" className="login-image" />
     
//       <form>

//         <div className="electric">
//         #We are Electric
//         </div>

//         <label htmlFor="email"></label>
//         <input
//           id="email"
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="E-mail"
//         />
        
//         <label htmlFor="password"></label>
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
        
//         <button type="button" onClick={handleLogin} >
//         <span>Login</span> 
//         </button>
//       </form>
//       <div className="forgot-password">
//         Forgot Password?
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../images/logo1.png'; // Import your signup image
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../style.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Logged in!');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <img src={loginImage} alt="Login" className="login-image" />

      <form>
        <div className="electric">#We are Electric</div>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />

        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="button" onClick={handleLogin}>
          <span>Login</span>
        </button>
      </form>
      <div className="forgot-password">Forgot Password?</div>
    </div>
  );
};

export default Login;
