<template>
  <nav class="navbar navbar-expand-sm navbar-dark" id="nav">
    <div class="container-fluid">
      
      <div>
          <img class="navbar-brand" :src="logo" :alt="alt" id="logo">
      </div>     

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="collapsibleNavbar">

        <ul class="navbar-nav">     
          
          <li class="nav-item">          
            <router-link to="/SendSuccessfullyView" class="nav-link">teste</router-link>
          </li>

          <li class="nav-item">         
            <a class="nav-link" @click="scrollToAboutMe">{{ $t('nav.aboutMe') }}</a>
          </li>   

          <li class="nav-item">         
            <a class="nav-link" @click="scrollSkills">{{ $t('nav.skills') }}</a>
          </li> 

          <li class="nav-item">          
            <a class="nav-link" @click="scrollToProjects">{{ $t('nav.projects') }}</a>
          </li> 

          <li class="nav-item">          
            <a class="nav-link" @click="scrollContacts">{{ $t('nav.contact') }}</a>
          </li> 
          
        </ul>
      </div>
    </div>
  </nav>

</template>


<script>

  export default {
    name: "Navbar",
    props: {
      logo: String,
    },  
    data() {
      return {      
        
      }
    },   
    methods: {
      scrollToProjects() {
            const projectsContainer = document.querySelector('#projects-container')
            projectsContainer.scrollIntoView({ behavior: 'smooth' });   
        },
        
      scrollToAboutMe() {
            const aboutMeContainer = document.querySelector('#about-me-container')
            aboutMeContainer.scrollIntoView({ behavior: 'smooth' });   
        },
      scrollSkills() {
            const skillsContainer = document.querySelector('#skills-main-container')
            skillsContainer.scrollIntoView({ behavior: 'smooth' });   
        },
      scrollContacts() {
            const footerContainer = document.querySelector('#footer')
            footerContainer.scrollIntoView({ behavior: 'smooth' });   
        },

        
    },   

  }

</script>

<style scoped> 
 
    #nav {     
      width: 100%;
      backdrop-filter: blur(10px);
      box-shadow: 10px 0 15px rgb(0 0 0 / 60%);  
      background-color: #1b1b1f; 
      position: absolute;
      z-index: 2;
    }

    #logo {
      width: auto;
      height: 50px; 
      margin: 10px 0 10px 30px;     
    } 
    
    .navbar-nav {
      margin-left: auto;
      padding: 0 30px 0 30px;
    }

    #collapsibleNavbar {
      font-size: 1rem;
    }

    @media(max-width: 700px) {
      
      #logo {
        height: 40px;
        margin: 10px 0 10px 15px;
        outline: none;
      }
      .navbar-nav {        
        padding: 0 10px 0 30px;
      }
      
      #collapsibleNavbar {
        font-size: 0.9rem;
      }
      
    }

    a:hover {
      cursor: pointer;
      transition: 2s;
      color: #F29F05;
    }
  
</style>
