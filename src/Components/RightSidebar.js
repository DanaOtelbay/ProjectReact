import React from 'react';

const RightSidebar = () => {
  return (
   <div className="col-md-3 h-100 p-5">
   <div className="font-weight-light w-100 text-truncate">
     <img src="https://cdn.glitch.global/e975cd40-3b8d-46cc-9eff-9d9052a82b16/avatar.png?v=1690344802021" alt="Avatar" style={{ width: '30px', height: '30px' }} className="img-fluid" />
     Константин Константинопольский
   </div>
   <div className="badge badge-success mt-3 mb-3">
     Идентифицирован
   </div>  

   <div className="card currensy-card mb-3">
     <div className="card-body">
       <div className="badge badge-currensy p-2 mb-2">
         KZT
       </div>                  
       <div className="currensy-value">0.00</div>
     </div>
   </div> 

   <div className="card currensy-card mb-3">
     <div className="card-body">
       <div className="badge badge-currensy p-2 mb-2">
         USD
       </div>                  
       <div className="currensy-value">0.00</div>
     </div>
   </div>  

   <button type="button" className="btn btn-outline-secondary btn-block">Добавить кошелёк</button>              
 </div>
  );
};

export default RightSidebar;