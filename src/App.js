// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/signUp';
import Login from './components/login';
import Dashboard from './components/dashboard';
import UserListView from './components/employeeList';
import firebase from 'firebase/compat/app';


function App() {
   // Initialize Firebase when the component mounts
   useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyC69Ufv3A1ySPLkk6Vv9Kn2rviWrpVTAZg",
      authDomain: "greendzine-4e96d.firebaseapp.com",
      databaseURL: "https://greendzine-4e96d-default-rtdb.firebaseio.com",
      projectId: "greendzine-4e96d",
      storageBucket: "greendzine-4e96d.appspot.com",
      messagingSenderId: "843018441684",
      appId: "1:843018441684:web:3f8b261ac16c27a8c23c41",
      measurementId: "G-94S6R933JM"
    };
    firebase.initializeApp(firebaseConfig);
  }, []);
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"  element={<Dashboard/>} />
        <Route path="/employee-list"  element={<UserListView/>} />
      </Routes>
    </Router>
  );
}

export default App;
