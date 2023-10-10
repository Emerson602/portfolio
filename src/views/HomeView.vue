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
  background-image: url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4cf7_gnRskFMwhIXsiYC5vG5OBNewCnKC-wYpPrsvxCVQJnI57qmhjMXspaE5dkho_zyfoFEu7gGxfV_hbobyTc37lWVDkwVVR7OEYLXgJjH4Mb7ZtR79umWHUXiJU_s8DARNIZ5kl-cHKkri3CF-WLL7kHyZoI3VICzbKctEvWAY9-MmUh-woqlfwuA/s1600/background-desktop.webp);
  background-repeat: no-repeat;
  background-size: cover;  
  background-position: center;
}

@media(max-width: 950px) {
  .main-container {
     background-image: url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrYTW02DDbcpgJ6IkACR5QaWXOLQ-_Cy8LANJgT5wQRJmXj053GKjPDZRjYP6cf1L-7YO0HHSPB2FHePAwDCIgo4GhBQqjZjiIRIE2r1cLY0efCwzGFWWD45i42_co6y9_V73UDpglC0DnPKYAIXhiFg74m4fHrtO2wVTXLwAOGMneg6v5vunJXzcBqes/s1600/background-mobile.webp);
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
  background-color: #FF4500;
  color: #fff;
  border-radius: 4px;
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
