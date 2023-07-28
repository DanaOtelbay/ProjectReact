import React from 'react';

const LeftSidebar = () => {
   const [activeLink, setActiveLink] = useState('Мой профиль');

   useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const activePage = urlParams.get('activePage');

      if (activePage) {
         setActiveLink(activePage);
      }
   }, []);

   const handleNavLinkClick = (link) => {
      setActiveLink(link);
   };
   return (
      <div className="col-md-3 bg-light h-100 p-5">
         <div class="col-md-3 bg-light h-100 p-5">
            <div class="pb-5">
               <img src="https://cdn.glitch.global/e975cd40-3b8d-46cc-9eff-9d9052a82b16/w.svg?v=1690310215639" alt="Logo" style="width: 60px; height: 60px;" class="img-fluid" />
            </div>
            <ul class="nav flex-column">
               <li class="nav-item">
                  <a class="nav-link pl-0 nav-link-active" href="#">Мой профиль</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link pl-0" href="#">Пополнить</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link pl-0" href="#">Вывести</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link pl-0" href="#">Оплатить</a>
               </li>                
               
               <li class="nav-item mt-5" style="font-size:12px;">
                  <a href="index.html" class="nav-link pl-0">↩️ Выйти</a>
               </li>                   
            </ul>
         </div>
      </div>
   );
};

export default LeftSidebar;