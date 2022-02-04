import './header.css';

function HeaderComponent(){
    return(
       <header className="header-section">
           <ul>
<li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish"><img src="./foto/download.png" /></a></li>
<li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish"><ion-icon name="desktop-outline"></ion-icon></a></li>
<li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish"><ion-icon name="phone-portrait-outline"></ion-icon></a></li>
           </ul>
           <ul>
               <li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish">Click edit and create your own amazing website</a></li>
               <li><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish">Read me more</a></li>
               <li className="header--btn"><a href="https://pdp.uz/course-play/loyihani-githubga-yuklash-va-deploy-qilish">Edit this site</a></li>
           </ul>
       </header> 
    )
}

export default HeaderComponent;