import footer from "../partials/footer.hbs";
document.body.insertAdjacentHTML("beforeend", footer());

import items from './menu.json';
import './styles.css';

import Halyna from './images/Halyna.jpg';
import Denis from './images/Denis.jpg';
import Oleg from './images/Oleg.jpg';
import Luda from './images/Luda.jpg';
import Ivan from './images/Ivan.jpg';
import Viktoriia from './images/Viktoriia.jpg';
import George from './images/George.jpg';  
import Julia from './images/Julia.jpg';
import fb from './images/facebook.svg';
import insta from './images/instagram.svg';
import linkedin from './images/linkedin-logo.svg';

 
  const teamMarkup = items
    .map(item => {
      return teamCardTemplate(item);
    })
    .join('');
  
  const list = document.querySelector('.footer-description__link');
  
  list.addEventListener('click', showCards);
  
  function showCards() {
    const galleryList = document.querySelector('.js-gallery_list');
    galleryList.innerHTML = markup;
  }

const markup = `<section class="cards">
<div class="container">
    <h2 class="services_title">наша команда</h2>
    <ul class="services-list">

    <li class="services-item">
    <div class="pic">
        <img class="services-img" src="${Halyna}" alt="Halyna" width="260" height="300">
    </div>
    <div class="content">
        <h3 class="services-item__title">Halyna Khyzhynska</h3>
        <p class="services-item__description">Team Lead</p>
        <p class="services-item__email">gal4enock86@gmail.com</p>                  
        <ul class="social">
        <li class="cl_li">
            <a target="_blank" href="#" class="fa fa-facebook">
                <img class="" src="${insta}" width="36" height="16" alt="image description">
            </a>
        </li>
        <li class="cl_li">
            <a target="_blank" href="#" class="fa fa-twitter">
                <img class="" src="${fb}" width="16" height="16" alt="image description">
            </a>
        </li>
        <li class="cl_li">
            <a target="_blank" href="#" class="fa fa-linkedin">
                <img class="" src="${linkedin}" width="16" height="16" alt="image description">
            </a>
        </li>
    </ul>
    </div>                                    
</li>
        
        <li class="services-item">
            <div class="pic">
                <img src="${Oleg}" alt="Oleg" width="260" height="300" class="services-img" >
            </div>
            <div class="content">
                <h3 class="services-item__title">Oleg Shablii</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">cilcksensead@gmail.com</p>                  
                <ul class="social">
            <li class="cl_li">
                <a target="_blank" href="https://www.instagram.com/" class="fa fa-facebook">
                    <img class="" src="${insta}" width="36" height="16" alt="">
                </a>
            </li>
            <li class="cl_li">
                <a target="_blank" href="https://www.facebook.com/" class="fa fa-twitter">
                    <img class="" src="${fb}" width="16" height="16" alt="">
                </a>
            </li>
            <li class="cl_li">
                <a target="_blank" href="https://www.linkedin.com/" class="fa fa-linkedin">
                    <img class="" src="${linkedin}" width="16" height="16" alt="">
                </a>
            </li>
        </ul>
            </div>
           
        </li>

       

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Denis}" alt="Denis" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Denis Daniieliyan</h3>
                <p class="services-item__description">Scrum Master</p>
                <p class="services-item__email">d3n1x1@gmail.com</p>                  
                <ul class="social">
            <li class="cl_li">
                <a target="_blank" href="https://www.instagram.com/" class="fa fa-facebook">
                    <img class="" src="${insta}" width="36" height="16" alt="image description">
                </a>
            </li>
            <li class="cl_li">
                <a target="_blank" href="https://www.facebook.com/" class="fa fa-twitter">
                    <img class="" src="${fb}" width="16" height="16" alt="image description">
                </a>
            </li>
            <li class="cl_li">
                <a target="_blank" href="https://www.linkedin.com/in/" class="fa fa-linkedin">
                    <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                </a>
            </li>
        </ul>
            </div>
            
        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Luda}" alt="Luda" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Ludmyla Mychta</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">ljuda12@gmail.com</p>                 
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100005991458680" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.instagram.com/liudmilamychta/" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>
        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${George}" alt="George" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">George Vasylenko</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">georgevbuisness@gmail.com</p>                 
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="https://www.instagram.com/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.facebook.com/" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.linkedin.com/" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Viktoriia}" alt="Viktoriia" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Viktoriia Nazaruk</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">nazaruk.v92@gmail.comoiyiyi</p>                  
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="https://www.instagram.com/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.facebook.com/" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Ivan}" alt="Ivan" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Ivan Rybachuk</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">pro100gon12@gmail.com"</p>                  
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="https://www.instagram.com/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.facebook.com/" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.linkedin.com/" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="$Julia}" alt="Julia" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Julia Artemenko</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">juliaartemenko93@gmail.com</p>                  
                <ul class="social">
                <li class="cl_li">
                    <a target="_blank" href="https://www.instagram.com/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="https://www.facebook.com/" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a target="_blank" href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

    </ul>
</div>
</section>`;
