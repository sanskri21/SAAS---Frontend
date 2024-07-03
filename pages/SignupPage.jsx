import React from 'react';
import SignupForm from '../components/Auth/SignupForm';
import './Authpage.css';

function SignupPage() {
  return (
    <div className="auth-page">
      <h2>Signup</h2>
      <SignupForm />
    </div>
  );
}

export default SignupPage;
