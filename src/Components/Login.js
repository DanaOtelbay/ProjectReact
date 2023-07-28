import React, { useEffect, useRef, useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = btoa(`${username}:${password}`);

      const response = await fetch(`https://api.ems.test.oxypay.dev/api/v1/auth` ,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${token}`,
        },
      });

      if (!response.ok) {
        alert('Login failed: Email or Password wrong!');
      }

      const data = await response.json();
      const authToken = data.token;

      localStorage.setItem('token', authToken);
      window.location.href = '/dashboard';

    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  return (
   <div>
        <div className="container">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-sm-12 col-md-8 col-lg-4">
              <div className="card form-bg">
                <div className="card-body text-left">
                  <h5 className="card-title">Вход в кошелёк</h5>
                  <div>
                    <form>
                      <div className="form-group">
                        <label htmlFor="LoginInput">Логин</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="LoginInput" 
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="PasswordInput">Пароль</label>
                        <input 
                          type="password" 
                          className="form-control" 
                          id="PasswordInput" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary mb-3" onClick={handleLogin}>Войти</button>
                      <div className="mt-1">
                        <a href="signup.html" className="register-link" >Создать новый кошелёк</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Login;