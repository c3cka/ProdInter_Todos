import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate, isAuthenticated } from 'utils/auth';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('todo@productive.io');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const isButtonDisabled = !email || !password;

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/todos');
    }
  });

  function onLoginFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (email === 'todo@productive.io' && password === '123456') {
      authenticate();
      navigate('/todos');
    } else {
      setIsError(true)
    }
  }

  return (
    <div className="login-root">
      <form
        className="login-form"
        onSubmit={onLoginFormSubmit}
      >
        <h1 className="login-title"> Login </h1>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />

        <button
          className="login-button"
          type="submit"
          disabled={isButtonDisabled}
        >
          Login
        </button>

        {isError &&
          <p className="login-error">
            Invalid credentials! Try todo@productive.io / 123456 ;D
          </p>
        }
      </form>
    </div>
  )
}
