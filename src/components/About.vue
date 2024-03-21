<template>
    <div class="about-me-container" id="about-me-container">
      
      
      
      <div id="about-main">
          <div>
            <img id="img-profile" :src="profile_src">
          </div>      
          <div>    
            <h1>{{ $t('aboutMe.title') }}</h1>    
            <p id="paragraph-1">{{ firstParagraph }}</p>
            <p id="paragraph-2">{{ secondParagraph }}</p>
            <p id="paragraph-3">{{ thirdParagraph }}</p> 
          </div>  
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
  #about-me-container {         
      width: 100%;
      min-height: 800px; 
      height: auto;    
      margin: 0;
      text-align: center;
      padding: 150px 0 100px 0; 
      background-image: url('../../public/img/bg-desktop.webp');    
      background-size: cover;
      background-repeat: no-repeat;  
      background-position: center;   
      border-bottom: solid 10px rgba(242, 219, 148, 1); 
      border-top: solid 10px rgba(242, 219, 148, 1);            
  }

  #about-main {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: auto;
  }

  #about-main div:nth-child(1) {
    width: 30%;  
    display: flex;
    justify-content: flex-end;
    align-items: center;    
  }

  #about-main div:nth-child(2) {
    width: 70%;     
    padding: 0 100px;
    text-align: left;
  }

  h1{
    margin: 0;
    padding: 0;
  }

  p {
    margin: 20px 0 0 0;
  }

  #img-profile {
    width: 80%;
    height: auto;    
  }
 
    @media(max-width: 1080px) {
    #about-me-container{
      background-image: url('../../public/img/bg-mobile.webp'); 
      min-height: 650px; 
      padding: 100px 0 100px 0;   
    }

    #about-main {
      display: flex;
      flex-direction: column;
    }

    #about-main div {
      width: 100% !important;
    }

    #img-profile {
      width: 300px;
      height: auto;
    }

    #about-main div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #about-main div:nth-child(2) {
      margin: 100px 0 0 0;
      padding: 0 50px;
    }
  }


  h1 {
        font-size: 1.8rem;
        line-height: 45px;
  }

  p {     
    font-size: 1.4rem;    
    margin: 20px 0 0 0;   
    padding: 0;
    color: #141414; 
    text-indent: 20px; 
  }

  @media(max-width: 750px) {

    #img-profile {
      width: 60%;
      height: auto;    
    }
    #about-main div:nth-child(2) {
      margin: 80px 0 0 0;
      padding: 0 20px;
    }

    h1 {
        font-size: 1.5rem;
     }
    p {                
        font-size: 1.4rem;
        text-indent: 3px;         
     }
  } 

   @media(max-width: 480px) {
    h1 {
        font-size: 0.8em;                
     }
    p {              
        font-size: 1rem;
         text-indent: 2px; 
     }
  } 
</style>
  


