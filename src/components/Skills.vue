<template>
  <div class="skills-main-container" id="skills-main-container">

        <div class="skills" id="skills">

          <h1>{{ $t('skills.title') }}</h1>

           <div class="skills-icons-1"> 

            <div id="tooltip" class="d-flex justify-content-start align-items-start">
              <img :src="html_src" :alt="html_alt" id="technology-1">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">HTML</span>
            </div>

            <div id="tooltip" class="d-flex justify-content-start align-items-start">
              <img :src="css_src" :alt="css_alt" id="technology-2">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">CSS</span>
            </div>

            <div id="tooltip" class="d-flex justify-content-start align-items-start">
              <img :src="javascript_src" :alt="javascript_alt" id="technology-3">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">JavaScript</span>
            </div>                       
                                       
           </div>  

           <div class="skills-icons-2"> 

            <div id="tooltip" class="d-flex justify-content-start align-items-start">
              <img :src="vue_src" :alt="vue_alt" id="technology-4">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">Vue.js</span>
            </div>

            <div id="tooltip" class="d-flex justify-content-start align-items-start">
              <img :src="bootstrap_src" :alt="bootstrap_alt" id="technology-5">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">Bootstrap</span>
            </div>

            <div id="tooltip" class="d-flex justify-content-start align-items-start">
              <img :src="react_src" :alt="react_alt" id="technology-6">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">React</span>
            </div>         
            
           </div>  

          <div class="skills-icons-3">       
            
            <div style="opacity: 0;" id="tooltip" class="d-flex justify-content-start align-items-start">
              <img style="opacity: 0;" :src="node_src" :alt="node_alt" id="technology-8">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">TypeScript</span>
            </div>    

            <div id="tooltip" class="d-flex justify-content-start align-items-start">
              <img style="opacity: 0;" :src="express_src" :alt="express_alt" id="technology-9">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">TypeScript</span>
            </div>  

            <div id="tooltip" class="d-flex justify-content-start align-items-start">
              <img :src="typescript_src" :alt="typescript_alt" id="technology-7">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">TypeScript</span>
            </div>                                     
           
          </div>  

          <div class="skills-icons-4"> 

            <div style="opacity: 0;" id="tooltip" class="d-flex justify-content-start align-items-start">
              <img style="opacity: 0;" :src="sql_src" :alt="sql_alt" id="technology-10">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning"></span>
            </div> 

            <div style="opacity: 0;" id="tooltip" class="d-flex justify-content-start align-items-start">
              <img style="opacity: 0;" :src="bootstrap_src" :alt="bootstrap_alt" id="technology-11">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning"></span>
            </div> 

            <div style="opacity: 0;" id="tooltip" class="d-flex justify-content-start align-items-start">
              <img style="opacity: 0;" :src="bootstrap_src" :alt="bootstrap_alt" id="technology-12">
              <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning"></span>
            </div>                          
            
          </div> 

        
          <div class="skills-icons-mobile">

            <div class="container-mobile-1">

              <div id="tooltip" class="d-flex justify-content-start align-items-start">
                <img :src="html_src" :alt="html_alt" id="technology-mobile-1">
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">HTML</span>
              </div>  

              <div id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img :src="vue_src" :alt="vue_alt" id="technology-mobile-4">
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">Vue.js</span>
              </div>  

              <div id="tooltip" class="d-flex justify-content-start align-items-start">
                <img :src="typescript_src" :alt="typescript_alt" id="technology-mobile-7"> 
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">TypeScript</span>
              </div>  

              <div style="opacity: 0;" id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img style="opacity: 0;" :src="sql_src" :alt="sql_alt" id="technology-mobile-10">
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning"></span>
              </div>             
                                  
            </div>

            <div class="container-mobile-2">             
                            
              
              <div id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img :src="css_src" :alt="css_alt" id="technology-mobile-2">
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">CSS</span>
              </div>   

              <div id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img :src="bootstrap_src" :alt="bootstrap_alt" id="technology-mobile-5">
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">Boostrap</span>
              </div>  

             <div style="opacity: 0;" id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img style="opacity: 0;" :src="node_src" :alt="node_alt" id="technology-mobile-8">
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning"></span>
              </div> 

              <div style="opacity: 0;" id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img style="opacity: 0;" :src="bootstrap_src" :alt="bootstrap_alt" id="technology-mobile-11"> 
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning"></span>
              </div>   

            </div>

            <div class="container-mobile-3">

              <div id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img :src="javascript_src" :alt="javascript_alt" id="technology-mobile-3">
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">JavaScript</span>
              </div>   

              <div id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img :src="react_src" :alt="react_alt" id="technology-mobile-6">
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning">React</span>
              </div>  

             <div style="opacity: 0;" id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img style="opacity: 0;" :src="express_src" :alt="express_alt" id="technology-mobile-9">
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning"></span>
            </div> 

              <div style="opacity: 0;" id="tooltip" class="d-flex justify-content-start align-items-start">
                 <img style="opacity: 0;" :src="bootstrap_src" :alt="bootstrap_alt" id="technology-mobile-12"> 
                <span class="tooltiptext position-absolute p-2 rounded text-warning bg-dark border border-warning"></span>
              </div> 

            </div>

          </div> 



      </div>      
  </div>
</template>

<script>
export default {
  data() {
    return {
      html_src: "/img/html.webp",
      css_src: "/img/css.webp",
      javascript_src: "/img/javascript.webp",
      vue_src: "/img/vue.webp",
      react_src: "/img/react.webp",
      bootstrap_src: "/img/bootstrap.webp",   
      typescript_src: "/img/typescript.webp",   
      node_src: "/img/node.webp",
      express_src: "/img/express.webp",
      sql_src: "/img/sql.webp",
      html_alt: "HTML",
      css_alt: "CSS",
      javascript_alt: "JavaScript",
      vue_alt: "Vue.js",
      react_alt: "React",
      bootstrap_alt: "Bootstrap",
      typescript_alt: "TypeScript",
      node_alt: "Node",
      express_alt: "Express",
      sql_alt: "SQL",      
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

  },

  mounted() {
    
    this.handleSkillsObserver();
  }



};


</script>

<style scoped>

  .skills-main-container {    
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;    
    padding: 150px 0 100px 0;      
    background-color: #1b1b1f;      
  }

  .skills {    
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    padding: 300px 0 0 0; 
  }
 
  h1 {
      font-size: 1.8rem; 
      color: #fff;     
      line-height: 45px;  
  }

  .skills-icons-mobile {
      display: none;
  }

  .skills-icons-1, .skills-icons-2, .skills-icons-3, .skills-icons-4 {    
    display: flex;   
    justify-content: center;
    align-items: center;  
    flex-direction: row;       
    width: 100%;
    height: auto; 
  }

  .skills-icons-1 {    
    margin: 50px 0 0 0;    
    position: relative;
    left: -75px; 
  }

  .skills-icons-2 {  
    position: relative;
    top: -43px; 
  }

 .skills-icons-3 {
    position: relative;
    left: 74.5px;
    top: -86px; 
  }

  .skills-icons-4 {  
    position: relative;   
    top: -128px; 
  }

  .tooltiptext {    
    visibility: hidden;
    opacity: 0;
  }
  
  #tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
    z-index: 99;
    transition: 1.5s;
  }  
  
  #technology-1, #technology-2, #technology-3, #technology-4, #technology-5, #technology-6, #technology-7, #technology-8, #technology-9, #technology-10, #technology-11, #technology-12 {
    width: 150px;
    height: auto;               
  } 

  @media(max-width: 750px) {     
  
  h1 {
    font-size: 1.5rem;
  }
  
  .skills {
    padding: 200px 0 0 0;
    height: 300px; 
  }


  #technology-1, #technology-2, #technology-3, #technology-4, #technology-5, #technology-6, #technology-7, #technology-8, #technology-9, #technology-10, #technology-11, #technology-12 {
    width: 80px;      
  }

  .skills-icons-1 {    
     left: -40px;
  }

  .skills-icons-2 {    
     top: -22px;
  }

 .skills-icons-3 {
     top: -44px;
     left: 40px;
  }

.skills-icons-4 {
     top: -66px;
 }

}



  @media(max-width: 480px) {

    .skills {
      padding: 350px 0 50px 0;
      height: 600px;           
    }

     .skills-icons {
      grid-template-columns: auto auto; 
      margin: 50px 0 0 0; 
      font-size: 0.8rem;                    
     }

     h1 {
      font-size: 0.8rem; 
      z-index: 99;
      position: relative;
      width: 70%;
      top: -450px;          
      }  

    .skills-icons-1, .skills-icons-2, .skills-icons-3, .skills-icons-4 {
      display: none;              
    }

    .skills-icons-mobile {
      width: 100%;    
      height: 500px;  
      display: flex;
      justify-content: center;
      align-items: center;   
      margin: 0;   
      padding: 0;      
      position: absolute;
      left: 0;      
    }

    .container-mobile-1, .container-mobile-2, .container-mobile-3 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0;
      padding: 0;      
    }

    .container-mobile-1 {
      margin: 0;
      position: relative;
      left: 55px;                 
    }

   .container-mobile-2 {
      margin: 0;
      position: relative;
      top: 95.6px;         
    }

   .container-mobile-3 {
      margin: 0;
      position: relative;
      left: -55px;     
      top: 0;             
    }

    #technology-mobile-1, #technology-mobile-2, #technology-mobile-3, #technology-mobile-4, #technology-mobile-5, #technology-mobile-6, #technology-mobile-7, #technology-mobile-8, #technology-mobile-9, #technology-mobile-10, #technology-mobile-11, #technology-mobile-12 {
      width: 110px;
      height: auto;
      margin: 0 0 65px 0;        
    }
}

  #technology-1, #technology-mobile-1 {
      display: none;
      animation: hexagon 3s ease-out forwards;        
      animation-delay: 1s;
      opacity: 0;
      position: relative;
      top: 100px;  
      rotate: 360deg;  
      z-index: 0;
}

  #technology-2, #technology-mobile-2 {
      display: none;
      animation: hexagon 3s ease-out forwards;
      animation-delay: 2s;
      opacity: 0;
      position: relative;
      top: -100px;  
      rotate: -360deg;  
      z-index: 1;
}

  #technology-3, #technology-mobile-3 {
      display: none;
      animation: hexagon 3s ease-out forwards;
      animation-delay: 0s;
      opacity: 0;
      position: relative;
      top: 100px;  
      rotate: 360deg;  
      z-index: 0;
}

  #technology-4, #technology-mobile-4 {
      display: none;
      animation: hexagon 3s ease-out forwards;
      animation-delay: 0s;
      opacity: 0;
      position: relative;
      top: -100px;  
      rotate: -360deg;  
      z-index: 2;
}

  #technology-5, #technology-mobile-5 {
      display: none;
      animation: hexagon 3s ease-out forwards;
      animation-delay: 0s;
      opacity: 0;
      position: relative;
      top: 100px;  
      rotate: 360deg;  
      z-index: 3; 
}

  #technology-6, #technology-mobile-6 {
      display: none;
      animation: hexagon 3s ease-out forwards;
      animation-delay: 1s;
      opacity: 0;
      position: relative;
      top: -100px;  
      rotate: -360deg;
      z-index: 2;  
}

  #technology-7, #technology-mobile-7 {
      display: none;
      animation: hexagon 3s ease-out forwards;
      animation-delay: 1s;
      opacity: 0;
      position: relative;
      top: 100px;  
      rotate: 360deg;  
      z-index: 4;
}

  @keyframes hexagon {

    0% {
      opacity: 0;      
    }
    100% {
      opacity: 1;
      position: relative;
      top: 0;  
      rotate: 0deg;
    }
        
  }

</style>
