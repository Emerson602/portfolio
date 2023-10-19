<template>
  <div class="main-container">     
    <p id="presentation-text">{{ $t('homePhrase.phrase') }}</p>            
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
    };
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
  font-size: 0; 
  width: auto;
  text-align: center;  
  padding: 0 15px;  
  color: #fff;
  animation: animation-presentation 2.5s ease;
  animation-delay: 0s;
  animation-fill-mode: forwards;  
}

@keyframes animation-presentation {
    0% {
      font-size: 0;
      opacity: 0;
    }
    100% {
      font-size: 2.5rem;
      opacity: 1; 
    }
}

.contact-me-button {
  background-color: #F29F05;
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 0;
  margin: 20px 0 0 0;
  font-size: 0;
  position: relative;
  top: -50px;
  opacity: 0;  
  animation: animation-button 2.5s ease;
  animation-delay: 2.5s;
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
    font-size: 1.2rem; 
    padding: 8px 16px;   
  }
}

@media(max-width: 700px) {
  #presentation-text {
    font-size: 1.2rem;
  }
}

</style>
