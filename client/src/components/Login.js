import React, { useState } from 'react';


const Login = ({onTeacherLoginSuccess, onStudentLoginSuccess}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false)
  const [error, setError] = useState('');
  const [signUpForm, setSignUpForm] = useState(false)
  const [signUpErrors, setSignUpErrors] = useState('');

  const initialFormData = {
    lehrer: true,
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  const [formData, setFormData] = useState(initialFormData);
  // console.log("formdata:", formData)

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login credentials:", isTeacher, email, password);
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { email, password, lehrer: isTeacher? 1 : 0 } }),
      });
      const responseBody = await response.json().catch(() => null);
      if (response.ok && responseBody) {
        // Handle successful login, store tokens, and redirect user
        if (responseBody.lehrer) {
          onTeacherLoginSuccess(responseBody.id);
        } else {
          onStudentLoginSuccess(responseBody.id);
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  const toggleSignupForm = () => {
    setSignUpForm(true)
  }

  const cancelSignUp = () => {
    setSignUpForm(false)
  }

  const handleNewUser = (e) => {
    e.preventDefault()
    fetch('/teachers', {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({teacher: formData})
    })
    .then(r => {
      if (r.ok) {
        setSignUpForm(false) 
        return r.json();
      } else {
        return r.json().then((error) => {
          throw error;
        })
      }  
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      const formattedErrors = [];
      for (const key in error.errors) {
        error.errors[key].forEach((errorMessage) => {
          formattedErrors.push(`${key} ${errorMessage}`);
        });
      }
      setSignUpErrors(formattedErrors);
    });
  }
  
  return (
    <>
    {!signUpForm ? (
    <div className='content'>
      <h1 className='title off-center'>Login</h1>
      <form className='login-container' onSubmit={handleSubmit}>
        <div>
          <label className='login'>Are you a teacher?</label>
          <input 
            type='checkbox'
            checked={isTeacher}
            onChange={(e) => setIsTeacher(e.target.checked)}
          />
        </div>
        <div>
          <label className='login' >Email: </label>
          <input
            className='input-field' 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} required 
          />
        </div>
        <div>
          <label className='login'>Password: </label>
          <input
            className='input-field' 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} required 
          />
        </div>
        {/* Conditionally Display Login Error */}
        {error && <li className='errors'>{error}</li>}
      </form>
      <div className='button-container'>
        <button className='minty-button' type="submit" onClick={handleSubmit}>Login</button>
        <button className='minty-button' onClick={toggleSignupForm}>Sign-Up</button>
      </div>
    </div>
    ) : (
      <div className='content'>
        <h1 className='title off-center'>SignUp</h1>
        <form className='login-container' onSubmit={handleNewUser}>
          <label className='login'>First Name: </label>
          <input
            className='input-field' 
            type = 'text'
            name = 'first_name'
            placeholder= 'First Name'
            value = {formData.first_name}
            onChange = {handleChange}
          />
          <label className='login'>Last Name: </label>
          <input
            className='input-field' 
            type = 'text'
            name = 'last_name'
            placeholder= 'Last Name'
            value = {formData.last_name}
            onChange = {handleChange}
          />
          <label className='login'>Username: </label>
          <input
            className='input-field'
            type = 'text'
            name = 'username'
            placeholder= 'Username'
            value = {formData.username}
            onChange = {handleChange}
          />
          <label className='login'>Email: </label>
          <input
            className='input-field'
            type = 'email'
            name = 'email'
            placeholder= 'Email Address'
            value = {formData.email}
            onChange = {handleChange}
          />
          <label className='login'>Password: </label>
          <input
            className='input-field'
            type = 'password'
            name = 'password'
            placeholder= 'Password'
            value = {formData.password}
            onChange = {handleChange}
          />
          <label className='login'>Confirm Password: </label>
          <input
            className='input-field'
            type = 'password'
            name = 'password_confirmation'
            placeholder= 'Confirm password'
            value = {formData.password_confirmation}
            onChange = {handleChange}
          />
          {/* Conditionally Display SignUp Errors */}
          <input className='minty-button' type='submit' value='Sign-Up'/>
        </form>
          {signUpErrors.length > 0 && (
            <ul>
              {signUpErrors.map((error, index) => (
                <li className='errors' key={index}>{error}</li>
              ))}
            </ul>
          )}
        <div>
          <h2 className='off-center'>Already have an account?</h2>
          <div className='button-container'>
            <button className='minty-button' onClick={cancelSignUp}>Login</button>
          </div>
        </div>
      </div>
    )} 
  </>
  );
};

export default Login;
