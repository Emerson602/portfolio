<template>
  <div id="contacts" class="m-0 pt-5 pb-5 d-flex flex-column flex-lg-row justify-content-center align-center">
    <nav class="col-12 col-lg-4 d-flex justify-content-center align-items-center">
      <ul id="footer-menu" class="m-0 fs-5 p-5 pt-0 pb-0 text-center text-lg-start">
            <li class="m-2">         
              <a class="text-dark fw-bold" @click="scrollSkills">{{ $t('nav.skills') }}</a>
            </li> 

            <li class="m-2">         
              <a class="text-dark fw-bold" @click="scrollToAboutMe">{{ $t('nav.aboutMe') }}</a>
            </li>   

            <li class="m-2">          
              <a class="text-dark fw-bold" @click="scrollToProjects">{{ $t('nav.projects') }}</a>
            </li> 

            <li class="m-2">          
              <a class="text-dark fw-bold" @click="scrollContacts">{{ $t('nav.contact') }}</a>
            </li>             
          </ul>
    </nav>
    <div id="container-contacts" class="col-12 col-lg-4 mt-5 mt-lg-0 d-flex flex-column justify-content-center align-items-center text-center"> 
        <div class="">
            <div>  
                <span class="d-block fs-5 fw-bold">Whatsapp:</span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-whatsapp text-success m-2" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>

                <a :href="whatsapp_href" target="_blank" class="text-light align-middle fs-6 fs-sm-5" id="whatsapp">+55 (82) 99397-5054</a> 
            </div> 

            <div class="mt-2 p-0"> 
              <span class="d-block fs-5 fw-bold">E-mail:</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-envelope m-2 text-secondary" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              <a class="text-light align-middle fs-6 fs-sm-5" href="mailto:wemerson.azevedo@iqb.ufal.br" target="_blank" id="email">wemerson.azevedo@iqb.ufal.br</a>
            </div>
        </div>   
    </div> 
   

  </div>
</template>

<script>

export default {
 name: 'Contacts',

 data() {
    return {
      linkedin_href: "https://www.linkedin.com/in/wemerson-nicacio-0633b623b/",
      github_href: "https://github.com/Emerson602",  
      whatsapp_href: "https://api.whatsapp.com/send?phone=5582993975054",        
    };
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
      const footerContainer = document.querySelector('#contacts')
      footerContainer.scrollIntoView({ behavior: 'smooth' });      
    },

  },

  mounted() {
    
  }

};

</script>

<style scoped>

#contacts {
  background-color: #f4f5fa;    
} 

li {
list-style: none;  
}

a {
  border-bottom: solid 2px transparent;
  color: #141414 !important;
}

a:hover {
  border-bottom: solid 2px transparent !important;
  color: #6662D9 !important;
  transition: 1s;
  cursor: pointer;
}


</style>  
