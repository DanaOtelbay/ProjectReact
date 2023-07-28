import React, { useEffect, useRef, useState } from 'react';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber || !fullName || !password) {
      setErrMsg("Fields shouldn't be empty");
      return;
    }
    var raw = JSON.stringify({
      "phone_number": `${phoneNumber}`,
      "username": `${phoneNumber}`,
      "password": `${password}`,
      "full_name": `${fullName}`,
      "owner_id": 1,
      "currency": 1
    });
    try {
      const response =  await fetch(`https://api.ems.test.oxypay.dev/api/v1/register` ,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },  
        body: raw,
      });
      if(!response.ok){
        console.error('Response Status:', response.status);
        console.error('Response Text:', await response.text());
        setErrMsg("Registration failed");
        return;
      }
      setSuccess(true); 
    } catch (err) {
      console.error("Registration failed:", err);
      setErrMsg("Registration failed");
    }
  };

  return (
    <div class="container">
      {success ? (
          <section>
            <h1>success!</h1>
            <p>
              <a href="#">Sign in</a>
            </p>
          </section>
        ) : (
        <div class="row justify-content-center align-items-center vh-100">
          <div class="col-sm-12 col-md-8 col-lg-4">
            <div class="card form-bg">
              <div class="card-body text-left">
                <h5 class="card-title">Регистрация</h5>
                <div>
                  <form>
                    <div class="form-group">
                      <label for="LoginInput">Номер телефона</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="LoginInput" 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                      />
                    </div>
                    <div class="form-group">
                      <label for="NameInput">Ваше имя и фамилия</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="NameInput" 
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="PasswordInput">Пароль</label>
                      <input 
                        type="password" 
                        class="form-control" 
                        id="PasswordInput"  
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button 
                      type="submit" 
                      class="btn btn-primary mb-3"
                      onClick={handleSubmit}
                    > 
                      Создать кошелек
                    </button>
                    <div class="mt-1">
                      <a 
                        href="page.html" 
                        class="register-link"
                      >
                        Войти в существующий
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;