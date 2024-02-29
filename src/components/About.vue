<template>
    <div class="about-me-container" id="about-me-container">
      <h1>{{ $t('aboutMe.title') }}</h1>  
      <p id="paragraph-1">{{ firstParagraph }}</p>
      <p id="paragraph-2">{{ secondParagraph }}</p>
      <p id="paragraph-3">{{ thirdParagraph }}</p>      
    </div>
</template>

<script>
export default {
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

    typeThirdParagraph() {
      let thirdParagraph = this.$t(`aboutMe.thirdParagraph`);
      this.textThirdParagraph = thirdParagraph;
     
      if (this.letterThirdParagraph < this.textThirdParagraph.length) {
        this.thirdParagraph += this.textThirdParagraph.charAt(this.letterThirdParagraph);
        this.letterThirdParagraph++;
        setTimeout(() => {
          this.typeThirdParagraph();
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
        }, 5000) 
      } 

      if(this.thirdParagraph === '') {

        setTimeout(() => {
        this.typeThirdParagraph()
        }, 12000)  
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
  .about-me-container {        
      width: 100%;
      min-height: 650px;
      height: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;           
      margin: 0;
      padding: 150px 0 100px 0;   
      background-image: url('../../public/img/bg-desktop.webp');    
      background-size: cover;
      background-repeat: no-repeat;  
      background-position: center;          
  }
 
    @media(max-width: 950px) {
    .about-me-container{
      background-image: url('../../public/img/bg-mobile.webp');     
    }
  }

  .about-me-container div {
      
      margin: 200px 0 100px 0;
  }

  h1 {
        font-size: 1.8rem;
        line-height: 45px;
  }

  p {
    width: 80vw; 
    font-size: 1.4rem;    
    margin: 20px 0 0 0;   
    color: #141414; 
    text-indent: 20px; 
  }

  @media(max-width: 750px) {
    h1 {
        font-size: 1.5rem;
     }
    p {
        width: 90vw;        
        font-size: 1.4rem;
        text-indent: 2px; 
     }
  } 

   @media(max-width: 480px) {
    h1 {
        font-size: 0.8em;
        width: 70%;        
     }
    p {
        width: 90vw;        
        font-size: 1rem;
         text-indent: 2px; 
     }
  } 
</style>
  


