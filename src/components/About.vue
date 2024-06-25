<template>
    <div class="pt-5 pb-5 d-flex flex-column flex-lg-row justify-content-center align-items-center" id="about-me-container"> 
      
          <div class="col-12 col-lg-6 mt-5 mb-3 d-flex flex-column justify-content-center align-items-center">
            <img id="img-profile" :src="profile_src" class="mt-2 mb-5 rounded">
          </div>    

          <div class="col-12 col-lg-6 p-3 p-lg-5 pt-0 pb-0 d-flex flex-column justify-content-center align-items-center text-center text-lg-start">    
            <h1 class="fs-1 col-12 mt-3 mb-5 mb-lg-3  text-center text-lg-start">{{ $t('aboutMe.title') }}</h1>    
            <p id="paragraph-1" class="fs-5 m-2 col-12">{{ firstParagraph }}</p>
            <p id="paragraph-2" class="fs-5 m-2 col-12">{{ secondParagraph }}</p>           
          </div>  

    </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      letterFirstParagraph: 0,
      letterSecondParagraph: 0,
      letterThirdParagraph: 0,
      textFirstParagraph: '',
      textSecondParagraph: '',
      textThirdParagraph: '',
      speed: 25,
      firstParagraph: '',
      secondParagraph: '',
      thirdParagraph: '',
      profile_src: "/img/profile.webp",
    };
  },
  methods: {

    typeFirstParagraph() {
      let firstParagraph = this.$t(`aboutMe.firstParagraph`);
      this.textFirstParagraph = firstParagraph;
     
      if (this.letterFirstParagraph < this.textFirstParagraph.length) {
        this.firstParagraph += this.textFirstParagraph.charAt(this.letterFirstParagraph);
        this.letterFirstParagraph++;
        setTimeout(() => {
          this.typeFirstParagraph();
        }, this.speed);
      }
    },

    typeSecondParagraph() {
      let secondParagraph = this.$t(`aboutMe.secondParagraph`);
      this.textSecondParagraph = secondParagraph;

      if (this.letterSecondParagraph < this.textSecondParagraph.length) {
        this.secondParagraph += this.textSecondParagraph.charAt(this.letterSecondParagraph);
        this.letterSecondParagraph++;
        setTimeout(() => {
          this.typeSecondParagraph();
        }, this.speed);
      }
    }, 
    
    startTyping() {       

      if(this.firstParagraph === '') {
         this.typeFirstParagraph()
      } 
      
      if(this.secondParagraph === '') {

       setTimeout(() => {
        this.typeSecondParagraph()   
        }, 3500) 
      }       
           
    },

    handleAboutMeContainerObserver() {
    const aboutMeObserver = new IntersectionObserver(elements => {
      if (elements[0].isIntersecting) {         
        this.startTyping();           
        return;
      }  
        
    }, {});

      const aboutMeContainer = document.querySelector('#about-me-container');
      aboutMeObserver.observe(aboutMeContainer);
    },

  },
  mounted() {
     this.handleAboutMeContainerObserver();
   },
};
</script>


<style scoped>
  #about-me-container {         
      width: 100%; 
      height: auto;   
  }  
  
  #img-profile {
    width: 350px;
    height: auto;      
    box-shadow: 2px 2px rgba(0, 0, 0, 0.37);  
    -webkit-filter: grayscale(100%); 
    filter: grayscale(100%);
  }

  #img-profile:hover {
    -webkit-filter: grayscale(0%); 
    filter: grayscale(0%);
    transition: 3s;
    box-shadow: 2px 2px rgba(0, 0, 0, 1);
  }

  p {
    Text-wrap: balance;
  }
 
  @media(max-width: 768px) {
  p, #img-profile {
    width: 80% !important;
    text-align: start;
  }
}

</style>
  


