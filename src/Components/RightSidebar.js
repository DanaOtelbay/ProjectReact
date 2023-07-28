import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import "../Style/style.css";

const RightSidebar = () => {
   const [fullName, setFullName] = useState('');
  const [identificationStatus, setIdentificationStatus] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token"); // Replace 'YOUR_BEARER_TOKEN' with the actual bearer token

      const response = await axios.get('https://api.ems.test.oxypay.dev/api/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data;

      setFullName(userData.agent.full_name);
      setIdentificationStatus(userData.identification_status);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
   return (
      <div className="col-md-3 h-100 p-5">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" />
      <link href="../Style/style.css" rel="stylesheet" />
      <div className="font-weight-light w-100 text-truncate">
        <img src="https://cdn.glitch.global/e975cd40-3b8d-46cc-9eff-9d9052a82b16/avatar.png?v=1690344802021" alt="Avatar" style={{ width: '30px', height: '30px' }} className="img-fluid" />
        {fullName}
      </div>
      <div className="badge badge-success mt-3 mb-3">
        {identificationStatus}
      </div>

      <div className="card currensy-card mb-3">
        {/* Currency card content */}
      </div>

      <div className="card currensy-card mb-3">
        {/* Currency card content */}
      </div>

      <button type="button" className="btn btn-outline-secondary btn-block">
        Добавить кошелёк
      </button>
    </div>
  );
};

export default RightSidebar;