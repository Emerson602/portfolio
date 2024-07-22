<template>
  <div id="skills-main-container" class="pb-3 pt-5">

    <h1 class="fs-1 mt-5 mb-0">{{ $t('skills.title') }}</h1>

        <div class="mt-5 d-flex flex-row justify-content-center align-items-center" id="skills">
          <div class="col-12 col-md-10 col-xl-8 d-flex flex-row justify-content-center align-items-center flex-wrap">
              <div id="tooltip" class="m-2 p-2 d-flex justify-content-center align-items-center position-relative rounded">
                <img :src="html_src" :alt="html_alt" id="technology-1">
                <span class="tooltiptext p-2 rounded d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100">HTML</span>
              </div>

              <div id="tooltip" class="m-2 p-2 d-flex justify-content-center align-items-center position-relative rounded">
                <img :src="css_src" :alt="css_alt" id="technology-2">
                <span class="tooltiptext p-2 rounded d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100">CSS</span>
              </div>

              <div id="tooltip" class="m-2 p-2 d-flex justify-content-center align-items-center position-relative rounded">
                <img :src="javascript_src" :alt="javascript_alt" id="technology-3">
                <span class="tooltiptext p-2 rounded d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100">JavaScript</span>
              </div>
              
              <div id="tooltip" class="m-2 p-2 d-flex justify-content-center align-items-center position-relative rounded">
                <img :src="typescript_src" :alt="typescript_alt" id="technology-7">
                <span class="tooltiptext p-2 rounded d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100">TypeScript</span>
              </div>  

              <div id="tooltip" class="m-2 p-2 d-flex justify-content-center align-items-center position-relative rounded">
                <img :src="vue_src" :alt="vue_alt" id="technology-4">
                <span class="tooltiptext p-2 rounded d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100">Vue.js</span>
              </div>

              <div id="tooltip" class="m-2 p-2 d-flex justify-content-center align-items-center position-relative rounded">
                <img :src="nuxt_src" :alt="nuxt_alt" id="technology-4">
                <span class="tooltiptext p-2 rounded d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100">Nuxt</span>
              </div>

              <div id="tooltip" class="m-2 p-2 d-flex justify-content-center align-items-center position-relative rounded">
                <img :src="bootstrap_src" :alt="bootstrap_alt" id="technology-5">
                <span class="tooltiptext p-2 rounded d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100">Bootstrap</span>
              </div> 

              <div id="tooltip" class="m-2 p-2 d-flex justify-content-center align-items-center position-relative rounded">
                <img :src="tailwind_src" :alt="tailwind_alt" id="technology-5">
                <span class="tooltiptext p-2 rounded d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100">Tailwind</span>
              </div> 

              <div id="tooltip" class="m-2 p-2 d-flex justify-content-center align-items-center position-relative rounded">
                <img :src="sass_src" :alt="sass_alt" id="technology-5">
                <span class="tooltiptext p-2 rounded d-flex justify-content-center align-items-center position-absolute top-0 left-0 w-100 h-100">Sass</span>
              </div> 
          </div>
      </div>         
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      html_alt: "html",
      css_alt: "css",
      javascript_alt: "javascript",
      typescript_alt: "typescript",
      vue_alt: "vue", 
      nuxt_alt: "nuxt",   
      bootstrap_alt: "bootstrap",   
      sass_alt: "sass",
      tailwind_alt: "tailwind",
      html_src: "/img/html.webp",
      css_src: "/img/css.webp",
      javascript_src: "/img/javascript.webp",
      typescript_src: "/img/typescript.webp",
      vue_src: "/img/vue.webp", 
      nuxt_src: "/img/nuxt.webp",   
      bootstrap_src: "/img/bootstrap.webp",   
      sass_src: "/img/sass.webp",
      tailwind_src: "/img/tailwind.webp",                 
    };
  },

  methods: {      

      startAnimation() {
        
          let totalSkills = 7
          
          for (let count = 0; count <= totalSkills; count++) {
              let skillsDesktop = document.querySelector(`#technology-${count}`);  
              let skillsMobile = document.querySelector(`#technology-mobile-${count}`);

              if (skillsDesktop) {
                
                skillsDesktop.style.display = 'block';        
              }

              if (skillsMobile) {    

                skillsMobile.style.display = 'block';        
              }
          }
      },


      handleSkillsObserver() {

        const skillsContainer = document.querySelector('#skills');

        const skillsObserver = new IntersectionObserver((elements) => {
          if (!elements[0].isIntersecting) {             
            return;
          }

         this.startAnimation();    
         
          skillsObserver.unobserve(skillsContainer);        
         
        }, {});

           skillsObserver.observe(skillsContainer);
      },

      openPDF() {    
        
        let lang = ''   
        let currentLang = localStorage.getItem("lang") || '' 
        
        if(currentLang === 'italian') {
          lang = 'it'
        } else if(currentLang === 'portoghese') {
          lang = 'pt'
        } else {
          lang = 'pt'
        }
        const pdfURL = `/cv/${lang}.pdf`;      
        window.open(pdfURL, '_blank');
    }

  },

  mounted() {
    
    this.handleSkillsObserver();
  }



};


</script>

<style scoped> 

  #skills-main-container {
    background-color: #f4f5fa !important;
    width: 100%;
    height: auto;
  }

  #tooltip {
    background-color: #fff;  
    box-shadow: 2px 2px rgba(0, 0, 0, 0.37);     
  }

  .tooltiptext {    
    visibility: hidden;
    opacity: 0;
  }
  
  #tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    z-index: 99;
    transition: 1s;
  }  
  
  #tooltip span {
    color: #fff;
    background-color: #F2727D;      
  }

  #tooltip img {
    width: 100px;
    height: 100px;     
  } 

</style>
