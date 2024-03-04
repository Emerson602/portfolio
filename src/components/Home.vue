<template>
  <div class="main-container" id="main-container">     
    <p id="presentation-text">{{ homePhrase }}</p>            
    <a href="https://api.whatsapp.com/send?phone=5582993975054" target="_blank">
      <button @click="contactButtonClick" :class="buttonClass">{{  $t('homeBtn.contact') }}</button>
    </a>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonClass: 'contact-me-button',
      letterHomePhrase: 0, 
      homePhrase: '',
      textHomePhrase: '', 
      speed: 50,        
    };
  },  

  methods: {

      typeHomePhrase() {
        let homePhrase = this.$t(`homePhrase.phrase`);
        this.textHomePhrase = homePhrase;

        if (this.letterHomePhrase < this.textHomePhrase.length) {
          this.homePhrase += this.textHomePhrase.charAt(this.letterHomePhrase);
          this.letterHomePhrase++;
          setTimeout(() => {
            this.typeHomePhrase();
          }, this.speed);
        }
      },
    },

  mounted() { 
        
  setTimeout(() => {
      this.typeHomePhrase();
    }, 1000)
  },

};



</script>

<style scoped>

.main-container {
  width: 100%; 
  height: 100vh; 
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(../../public/img/bg-home-desktop.webp);
  background-repeat: no-repeat;
  background-size: cover;  
  background-position: center;  
}

@media(max-width: 950px) {
  .main-container {
     background-image: url(../../public/img/bg-home-mobile.webp);
  }
}

#presentation-text {
  font-size: 2.5rem; 
  width: auto;
  text-align: center;  
  padding: 0 15px;  
  color: #fff;
  -webkit-text-stroke: 1px #000;    
}

.contact-me-button {
  background-color: #F29F05;
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 0;
  margin: 50px 0 0 0;
  font-size: 0;
  position: relative;
  top: -50px;
  opacity: 0;  
  animation: animation-button 2.5s ease;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}

.contact-me-button:hover {
  background-color: #141414;
  transition: 2s;
}

@keyframes animation-button {
  0% {
    opacity: 0;    
    top: -50px;
    font-size: 0;
    padding: 0;
  }
  100% {
    opacity: 1;    
    top: 0;
    font-size: 1rem; 
    padding: 8px 16px;   
  }
}

@media(max-width: 700px) {
  #presentation-text {
    font-size: 1.7rem;  
    width: 90%; 
    margin: 0;
    padding: 0;   
  }
}

@media(max-width: 480px) {
  
  #presentation-text {
    width: 90%; 
    font-size: 1.7rem;   
  }  

}
</style>
