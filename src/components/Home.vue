<template>
  <div class="col-12 pb-5 d-flex flex-column flex-lg-row justify-content-center  align-items-center" id="main-container"> 

    <div class="col-12 col-lg-5 mt-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
      <p class="fs-2 text-start text-sm-start" id="presentation-text" v-html="homePhrase"></p> 

      <div id="buttons-container" class="mt-5 col-12 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
 
      </div>     

    </div>   
    <div class="col-12 col-lg-5 mt-3 mt-lg-5 d-flex justify-content-center align-items-center">
      <img class="col-sm-6 col-md-4 col-lg-8" src="../../public/img/img-1.webp">
    </div>   

  </div>
</template>

<script>
export default {
  data() {
    return {      
      letterHomePhrase: 0, 
      homePhrase: '',
      textHomePhrase: '', 
      speed: 30,        
      lang: localStorage.getItem("lang") || '',
      text: '',
      showButton: true,
    };
  },  

  methods: {
      boldSpecificText(text, boldPart) {
        const regex = new RegExp(`(${boldPart})`, 'gi');
        return text.replace(regex, '<br><span class="fw-bold">$1</span>');
      },

      typeHomePhrase() {
        let homePhrase = this.$t(`homePhrase.phrase`); 
        let partText = 'desenvolvedor front-end'
        

        if(this.lang === 'english') {
          partText = 'front-end developer'
        }

        if(this.lang === 'italian') {
          partText = 'sviluppatore front-end'
        }

        this.textHomePhrase = this.boldSpecificText(homePhrase, partText);

        if (this.letterHomePhrase < this.textHomePhrase.length) {
          this.homePhrase += this.textHomePhrase.charAt(this.letterHomePhrase);
          this.letterHomePhrase++;
          setTimeout(() => {
            this.typeHomePhrase();
          }, this.speed);
        }
      }, 
      createCurriculumButton() {
          const buttonsContainer = document.querySelector('#buttons-container'); 
          
          const btnTextContactMe = this.$t('homeBtn.contact');
          const btnTextCv = this.$t('moreSkills.btnCv'); 

          buttonsContainer.innerHTML = `
          <a href="https://api.whatsapp.com/send?phone=5582993975054" target="_blank" class="fs-6 rounded pt-2 pb-2 fw-bold">         
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
          ${btnTextContactMe}   
          </a>
          <a v-if="showButton" class="fs-6 rounded pt-2 pb-2 fw-bold mt-2 d-block" href="/cv/${this.lang}-wemerson-nicacio.pdf" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
          </svg>
          ${btnTextCv}
          </a>
          `;
      
        },         
      
    },

  mounted() {  

    this.createCurriculumButton();

    setTimeout(() => {
      this.typeHomePhrase();
    }, 1000);
  },
};
</script>

<style>
#presentation-text {
  text-wrap: balance;  
  min-height: 120px;  
}

#buttons-container a {
  background-color: #F2727D;
  color: #141414;
  opacity: 0;    
  animation: animation-button 1s ease-in;  
  animation-fill-mode: forwards;
  width: 200px !important;
  text-align: center;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.37);
}

#buttons-container a:nth-child(1) {
  animation-delay: 3.5s;
}

#buttons-container a:nth-child(2) {
  animation-delay: 4.5s;
}

#buttons-container a:hover {
  background-color: #6662D9;  
  color: #fff; 
  transition: 1s;
  cursor: pointer;
  box-shadow: 2px 2px rgba(0, 0, 0, 1);
}

@media(max-width: 768px) {
  #buttons-container a, #presentation-text, #main-container img {
    width: 80% !important;
  }
}


@keyframes animation-button {
  0% {
    opacity: 0;      
  }
  100% {
    opacity: 1;        
  }
}
</style>
