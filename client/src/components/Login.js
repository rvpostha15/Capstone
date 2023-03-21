import React, { useState } from 'react';

const Login = ({onLoginSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signUpForm, setSignUpForm] = useState(false)
  const initialFormData = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  const [formData, setFormData] = useState(initialFormData);
  console.log(formData)

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { email, password } }),
      });

      if (response.ok) {
        // Handle successful login, store tokens, and redirect user
        const data = await response.json();
        onLoginSuccess(data.id);
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const toggleSignupForm = () => {
    setSignUpForm(true)
  }

  const cancelSignUp = () => {
    setSignUpForm(false)
  }

  const handleCreateNewTeacher = () => {
    console.log('sign me up!')
  }

  return (
    <>
    {!signUpForm ? (
    <div className='content'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label  >Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p>{error}</p>}
      </form>
        <button className='minty-button' type="submit" onClick={handleSubmit}>Login</button>
        <button className='minty-button' onClick={toggleSignupForm}>Sign-Up</button>
    </div>
    ) : (
      <div className='content'>
        <h1>SignUp</h1>
        <form onSubmit={handleCreateNewTeacher}>
          <label>First Name: </label>
          <input
            type = 'text'
            name = 'first_name'
            placeholder= 'First Name'
            value = {formData.first_name}
            onChange = {handleChange}
          />
          <label>Last Name: </label>
          <input
            type = 'text'
            name = 'last_name'
            placeholder= 'Last Name'
            value = {formData.value}
            onChange = {handleChange}
          />
          <label>Username: </label>
          <input
            type = 'text'
            name = 'username'
            placeholder= 'Username'
            value = {formData.username}
            onChange = {handleChange}
          />
          <label>Email: </label>
          <input
            type = 'text'
            name = 'email'
            placeholder= 'Email Address'
            value = {formData.email}
            onChange = {handleChange}
          />
          <label>Password: </label>
          <input
            type = 'text'
            name = 'password'
            placeholder= 'Password'
            value = {formData.password}
            onChange = {handleChange}
          />
          <label>Confirm Password: </label>
          <input
            type = 'text'
            name = 'password_confirmation'
            placeholder= 'Confirm password'
            value = {formData.password_confirmation}
            onChange = {handleChange}
          />
        </form>
        <div>
          <h2>Already have an account?</h2>
          <button className='minty-button' onClick={cancelSignUp}>Login</button>
        </div>
      </div>
    )} 
  </>
  );
};

export default Login;
