<template>
  <header class="d-flex flex-row justify-content-between align-items-center" id="header">        
      
      <img class="m-3 m-lg-5 mt-lg-3 mb-lg-3" :src="logo" :alt="alt" id="logo">             
      
      <nav id="nav" class="m-0 p-0">
          <ul id="desktop-menu" class="d-none d-lg-flex m-0 fs-5 p-5 pt-0 pb-0">
            <li class="text-center m-2">         
              <a class="text-dark" @click="scrollSkills">{{ $t('nav.skills') }}</a>
            </li> 

            <li class="text-center m-2">         
              <a class="text-dark" @click="scrollToAboutMe">{{ $t('nav.aboutMe') }}</a>
            </li>   

            <li class="text-center m-2">          
              <a class="text-dark" @click="scrollToProjects">{{ $t('nav.projects') }}</a>
            </li> 

            <li class="text-center m-2">          
              <a class="text-dark" @click="scrollContacts">{{ $t('nav.contact') }}</a>
            </li>             
          </ul>
          
          <svg v-if="isVisible" @click="toggleVisibility" xmlns="http://www.w3.org/2000/svg" id="close" width="30" height="30" fill="currentColor" class="bi bi-x-lg d-block d-lg-none m-3 p-0" viewBox="0 0 16 16">
             <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
          
          <ul v-if="isVisible" id="mobile-menu" class="fs-1 p-0 d-flex d-lg-none flex-column justify-content-center align-items-center position-fixed">
            <li class="text-center mt-1">         
              <a class="text-dark" @click="scrollSkills">{{ $t('nav.skills') }}</a>
            </li> 

            <li class="text-center mt-2">         
              <a class="text-dark" @click="scrollToAboutMe">{{ $t('nav.aboutMe') }}</a>
            </li>   

            <li class="text-center mt-2">          
              <a class="text-dark" @click="scrollToProjects">{{ $t('nav.projects') }}</a>
            </li> 

            <li class="text-center mt-2">          
              <a class="text-dark" @click="scrollContacts">{{ $t('nav.contact') }}</a>
            </li>             
          </ul>
         
       </nav>
      
       <svg xmlns="http://www.w3.org/2000/svg" @click="toggleVisibility" width="50" height="50" fill="currentColor" class="bi bi-list d-block d-lg-none p-0 m-3 mt-0 mb-0" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
  </header>

</template> 


<script>

  export default {
    name: "Navbar",
    props: {
      logo: String,
    },  
    data() {
      return {      
        isVisible: false,
        screenWidth: window.innerWidth,
      }
    },  
    computed: {
      screenSizeMessage() {
        return this.screenWidth;
      },
    }, 
    methods: {

      updateScreenSize() {
        this.screenWidth = window.innerWidth;              
      },

      scrollToProjects() {
            const projectsContainer = document.querySelector('#projects-container')
            projectsContainer.scrollIntoView({ behavior: 'smooth' });  
            this.toggleVisibility();
        },
        
      scrollToAboutMe() {
            const aboutMeContainer = document.querySelector('#about-me-container')
            aboutMeContainer.scrollIntoView({ behavior: 'smooth' });  
            this.toggleVisibility();
        },
      scrollSkills() {
            const skillsContainer = document.querySelector('#skills-main-container')
            skillsContainer.scrollIntoView({ behavior: 'smooth' });  
            this.toggleVisibility(); 
        },
      scrollContacts() {
            const footerContainer = document.querySelector('#contacts')
            footerContainer.scrollIntoView({ behavior: 'smooth' });  
            this.toggleVisibility();        
        },
      addOverflowHidden() {
      document.body.style.overflow = 'hidden';
        },
      removeOverflowHidden() {
          document.body.style.overflow = '';
        },
        toggleVisibility() {
          this.isVisible = !this.isVisible;

          this.removeOverflowHidden()
          if(this.screenWidth <= 991 && this.isVisible == true) {
            this.addOverflowHidden();             
          }
        }  

    },
    mounted() {
      window.addEventListener('resize', this.updateScreenSize);
      this.updateScreenSize(); 
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.updateScreenSize);
    },  

  }

</script>

<style scoped> 

    #mobile-menu {
      z-index: 100;
      width: 100%;
      height: 100%;      
      left: 0;
      top: 0;
      animation: showMenu 1s ease-in;
      animation-delay: 0;
      animation-fill-mode: forwards;
      opacity: 0;
      background-color: #6662D9;      
    }

    #close {
      z-index: 101;
      position: fixed;
      top: 0;
      right: 0;
      animation: showMenu 1s ease-in;
      animation-delay: 1s;
      animation-fill-mode: forwards;
      opacity: 0;
    }

    @keyframes showMenu {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }

    li {
      list-style: none; 
    }

    a {
      border-bottom: solid 2px transparent;
    }

    a:hover {
      border-bottom: solid 2px transparent !important;
      color: #bbb !important;
      transition: 1s;
      cursor: pointer;
    }

    #logo {
      width: auto;
      height: 50px; 
    } 
    
    @media (max-width: 992px) {
        a:hover {
        border-bottom: solid 2px #fff !important;
        color: #fff !important;
        transition: 1s;
        cursor: pointer;
      }

      #logo {
        height: 40px;      
        outline: none;
      } 
    }




  
</style>
