import React, { useEffect, useRef, useState } from 'react';
const MainContent = () => {
  return (
   <div className="col-md-6 h-100 p-5 pt-6">
   <h3 className="pb-5">Мой профиль</h3>

   <h5>Персональные данные</h5>
   <ul className="list-group list-group-flush">
     <li className="list-group-item">
       <div className="row">
         <div className="col-sm profile-label">
           Имя и фамилия
         </div>
         <div className="col-sm">
           Константин Константинопольский
         </div>
       </div>
     </li>
     <li className="list-group-item">
       <div className="row">
         <div className="col-sm profile-label">
           Эл. почта
         </div>
         <div className="col-sm">
           test@mail.com
         </div>
       </div>
     </li> 
     <li className="list-group-item">
       <div className="row">
         <div className="col-sm profile-label">
           Номер телефона
         </div>
         <div className="col-sm">
           +77776287246
         </div>
       </div>
     </li> 
     <li className="list-group-item">
       <div className="row">
         <div className="col-sm profile-label">
           Страна
         </div>
         <div className="col-sm">
           Казахстан
         </div>
       </div>
     </li> 
     <li className="list-group-item">
       <div className="row">
         <div className="col-sm profile-label">
           Адрес проживания
         </div>
         <div className="col-sm">
           Алматы. Улица, дом 1
         </div>
       </div>
     </li>                    
   </ul>

   <h5 className="mt-5">Место работы</h5>
   <ul className="list-group list-group-flush">
     <li className="list-group-item">
       <div className="row">
         <div className="col-sm profile-label">
           Компания
         </div>
         <div className="col-sm">
           ТОО "Рога и копыта"
         </div>
       </div>
     </li>
     <li className="list-group-item">
       <div className="row">
         <div className="col-sm profile-label">
           Должность
         </div>
         <div className="col-sm">
           Менеджер
         </div>
       </div>
     </li>                   
   </ul>
 </div>
  );
};

export default MainContent;