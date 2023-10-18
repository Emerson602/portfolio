<template>
  <div class="skills-main-container">

        <div class="skills">

          <h1>{{ $t('skills.title') }}</h1>

           <div class="skills-icons-1"> 

            <img :src="html_src" :alt="html_alt" id="technology-1"> 
            <img :src="javascript_src" :alt="javascript_alt" id="technology-2"> 
            <img :src="css_src" :alt="css_alt" id="technology-3">                               
           
           </div>  

           <div class="skills-icons-2"> 

            <img :src="vue_src" :alt="vue_alt" id="technology-4"> 
            <img :src="bootstrap_src" :alt="bootstrap_alt" id="technology-5">
            <img :src="bootstrap_src" :alt="bootstrap_alt" id="technology-6">                    
           
           </div>  

          <div class="skills-icons-3"> 

            <img :src="vue_src" :alt="vue_alt" id="technology-4"> 
            <img :src="bootstrap_src" :alt="bootstrap_alt" id="technology-5">
            <img :src="bootstrap_src" :alt="bootstrap_alt" id="technology-6">                    
           
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
      bootstrap_src: "/img/bootstrap.webp",
      vue_src: "/img/vue.webp",
      html_alt: "HTML",
      css_alt: "CSS",
      javascript_alt: "JavaScript",
      bootstrap_alt: "Bootstrap",
      vue_alt: "Vue.js",
    };
  },
};
</script>

<style scoped>
  .skills-main-container {
    height: 1200px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;    
    padding: 200px 0 0 0;  
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
  }
 
  h1 {
      font-size: 1.8rem; 
      color: #141414;     
  }

  .skills-icons-1 {
    display: flex;   
    justify-content: center;
    align-items: center;  
    flex-direction: row;
    margin: 50px 0 0 0;    
    width: 100%;
    height: auto;   
  }

  .skills-icons-2 {
    display: flex;   
    justify-content: center;
    align-items: center;  
    flex-direction: row;       
    width: 100%;
    height: auto;   
  }

 .skills-icons-3 {
    display: flex;   
    justify-content: center;
    align-items: center;  
    flex-direction: row;       
    width: 100%;
    height: auto;   
  }
  
  #technology-1, #technology-2, #technology-3, #technology-4, #technology-5, #technology-6 {
    width: 200px;
    height: auto;          
  }

  
  @media(max-width: 750px) {  
    .skills-main-container {
      height: 1000px;
    }
    
    #technology {
        width: 80px;      
    }
  }

  @media(max-width: 450px) {
     .skills-icons {
      grid-template-columns: auto auto; 
      margin: 50px 0 0 0; 
      font-size: 0.8rem;           
     }

     h1 {
      font-size: 1.5rem;
     } 
     .skills-icons div {
      margin: 10px;       
     }

     #technology {
        width: 70px; 
        margin: 0 0 10px 0;     
    }
  }

</style>
