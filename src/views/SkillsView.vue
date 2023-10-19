<template>
  <div class="skills-main-container">

        <div class="skills">

          <h1>{{ $t('skills.title') }}</h1>

           <div class="skills-icons-1"> 

            <img :src="html_src" :alt="html_alt" id="technology-1">              
            <img :src="css_src" :alt="css_alt" id="technology-2">
            <img :src="javascript_src" :alt="javascript_alt" id="technology-3">                             
           
           </div>  

           <div class="skills-icons-2"> 

            <img :src="vue_src" :alt="vue_alt" id="technology-4"> 
            <img :src="bootstrap_src" :alt="bootstrap_alt" id="technology-5">
            <img :src="nuxt_src" :alt="nuxt_alt" id="technology-6">                                           
           
           </div>  

          <div class="skills-icons-3">

            <img style="opacity: 0;" :src="node_src" :alt="node_alt" id="technology-8">
            <img style="opacity: 0;" :src="express_src" :alt="express_alt" id="technology-9"> 
            <img :src="typescript_src" :alt="typescript_alt" id="technology-7">                                      
           
          </div>  

          <div class="skills-icons-4"> 

            <img style="opacity: 0;" :src="sql_src" :alt="sql_alt" id="technology-10">              
            <img style="opacity: 0;" :src="bootstrap_src" :alt="bootstrap_alt" id="technology-11">
            <img style="opacity: 0;" :src="bootstrap_src" :alt="bootstrap_alt" id="technology-12">                    
           
          </div> 

          <div class="skills-icons-mobile">
            <div>
              <img :src="html_src" :alt="html_alt" id="technology-mobile-1">
              <img :src="vue_src" :alt="vue_alt" id="technology-mobile-4">               
              <img :src="typescript_src" :alt="typescript_alt" id="technology-mobile-7"> 
              <img style="opacity: 0;" :src="sql_src" :alt="sql_alt" id="technology-mobile-10">
                
            </div>
            <div>
              <img :src="css_src" :alt="css_alt" id="technology-mobile-2">
              <img :src="bootstrap_src" :alt="bootstrap_alt" id="technology-mobile-5">              
              <img style="opacity: 0;" :src="node_src" :alt="node_alt" id="technology-mobile-8">
              <img style="opacity: 0;" :src="bootstrap_src" :alt="bootstrap_alt" id="technology-mobile-11"> 
                
            </div>

            <div>
              <img :src="javascript_src" :alt="javascript_alt" id="technology-mobile-3">
              <img :src="nuxt_src" :alt="nuxt_alt" id="technology-mobile-6">
              <img style="opacity: 0;" :src="express_src" :alt="express_alt" id="technology-mobile-9"> 
              <img style="opacity: 0;" :src="bootstrap_src" :alt="bootstrap_alt" id="technology-mobile-12">
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
      nuxt_src: "/img/nuxt.webp",
      bootstrap_src: "/img/bootstrap.webp",   
      typescript_src: "/img/typescript.webp",   
      node_src: "/img/node.webp",
      express_src: "/img/express.webp",
      sql_src: "/img/sql.webp",
      html_alt: "HTML",
      css_alt: "CSS",
      javascript_alt: "JavaScript",
      vue_alt: "Vue.js",
      nuxt_alt: "Nuxt",
      bootstrap_alt: "Bootstrap",
      typescript_alt: "TypeScript",
      node_alt: "Node",
      express_alt: "Express",
      sql_alt: "SQL",      
    };
  },
};
</script>

<style scoped>
  .skills-main-container {
    height: 1400px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;    
    padding: 100px 0 0 0;  
    background-image: url('../../public/img/bg-desktop.webp');    
    background-size: cover;
    background-repeat: no-repeat;  
    background-position: center;
  }

  @media(max-width: 950px) {
    .skills-main-container {
      background-image: url('../../public/img/bg-mobile.webp');     
    }
  }

  .skills {
    color: #141414;   
    margin: 100px 0 0 0;
  }
 
  h1 {
      font-size: 1.8rem; 
      color: #141414;     
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
    left: 75px;
    top: -85px; 
  }

  .skills-icons-4 {  
    position: relative;   
    top: -128px; 
  }
  
  #technology-1, #technology-2, #technology-3, #technology-4, #technology-5, #technology-6, #technology-7, #technology-8, #technology-9, #technology-10, #technology-11, #technology-12 {
    width: 150px;
    height: auto;               
  } 

  @media(max-width: 750px) {  
  .skills-main-container {
    height: 1000px;
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

  @media(max-width: 450px) {
    .skills-main-container {
      height: auto;
    }
     .skills-icons {
      grid-template-columns: auto auto; 
      margin: 50px 0 0 0; 
      font-size: 0.8rem;           
     }

     h1 {
      font-size: 1.5rem;
     }  

     #technology-1, #technology-2, #technology-3, #technology-4, #technology-5, #technology-6, #technology-7, #technology-8, #technology-9, #technology-10, #technology-11, #technology-12 {
      display: none;              
    }

    .skills-icons-mobile {
      width: 100vw;      
      display:flex;
      justify-content: center;
      align-items: center;   
      margin: 50px 0 100px 0;   
    }

    .skills-icons-mobile div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0;
      padding: 0;
    }

    .skills-icons-mobile div:nth-child(1) {
      margin: 0;
      position: relative;
      left: 55px;     
    }

   .skills-icons-mobile div:nth-child(2) {
      margin: 0;
      position: relative;
      top: 95.5px;
     
    }

   .skills-icons-mobile div:nth-child(3) {
      margin: 0;
      position: relative;
      left: -55px;     
    }

    #technology-mobile-1, #technology-mobile-2, #technology-mobile-3, #technology-mobile-4, #technology-mobile-5, #technology-mobile-6, #technology-mobile-7, #technology-mobile-8, #technology-mobile-9, #technology-mobile-10, #technology-mobile-11, #technology-mobile-12 {
      width: 110px;
      height: auto;
      margin: 0 0 65px 0;
    }

}

  #technology-1, #technology-mobile-1 {
      animation: hexagon 3s ease-out forwards;
      animation-delay: 1s;
      opacity: 0;
      position: relative;
      top: 100px;  
      rotate: 360deg;  
}

  #technology-2, #technology-mobile-2 {
      animation: hexagon 3s ease-out forwards;
      animation-delay: 2s;
      opacity: 0;
      position: relative;
      top: -100px;  
      rotate: -360deg;  
}

  #technology-3, #technology-mobile-3 {
      animation: hexagon 3s ease-out forwards;
      animation-delay: 0s;
      opacity: 0;
      position: relative;
      top: 100px;  
      rotate: 360deg;  
}

  #technology-4, #technology-mobile-4 {
      animation: hexagon 3s ease-out forwards;
      animation-delay: 0s;
      opacity: 0;
      position: relative;
      top: -100px;  
      rotate: -360deg;  
}

  #technology-5, #technology-mobile-5 {
      animation: hexagon 3s ease-out forwards;
      animation-delay: 0s;
      opacity: 0;
      position: relative;
      top: 100px;  
      rotate: 360deg;  
}

  #technology-6, #technology-mobile-6 {
      animation: hexagon 3s ease-out forwards;
      animation-delay: 1s;
      opacity: 0;
      position: relative;
      top: -100px;  
      rotate: -360deg;  
}

  #technology-7, #technology-mobile-7 {
      animation: hexagon 3s ease-out forwards;
      animation-delay: 1s;
      opacity: 0;
      position: relative;
      top: 100px;  
      rotate: 360deg;  
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
