import React, { useState } from 'react';

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login and Signup forms

  return (
    <div style={styles.pageLoginContainer}>
      <div style={styles.card}>
        <h1>{isSignup ? 'Signup Page' : 'Login Page'}</h1>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label>Email</label>
            <input type="email" style={styles.input} placeholder="Enter your email" required />
          </div>
          <div style={styles.formGroup}>
            <label>Password</label>
            <input type="password" style={styles.input} placeholder="Enter your password" required />
          </div>
          {!isSignup && (
            <div style={styles.formGroup}>
              <label>Remember Me </label>
              <input type="checkbox" />
            </div>
          )}
          <button type="submit" style={styles.button}>
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div style={styles.toggleText}>
          <span onClick={() => setIsSignup(!isSignup)} style={styles.toggleLink}>
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageLoginContainer: {
    // marginTop: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height to center the card
    backgroundColor: '#f4f4f9', // Light background color for the page
  },
  card: {
    width: '400px',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
    // border:"2px solid blue"
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  toggleText: {
    marginTop: '15px',
    fontSize: '14px',
  },
  toggleLink: {
    color: '#007BFF',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default LoginSignup;
