<template>  
      <div id="more-skills">        
             
      </div>      
</template>

<script>
export default {
  data() {
    return {
        lang: localStorage.getItem("lang") || 'portoghese', 
        text: '',
    };
  },

  methods: {  

      createButton() {
        const moreSkills = document.querySelector('#more-skills');           
        const btnText = this.$t('moreSkills.btnCv'); 

        const texts = {
          text_1: this.$t('moreSkills.text_1'),
          text_2: this.$t('moreSkills.text_2'),
          text_3: this.$t('moreSkills.text_3'),
          text_4: this.$t('moreSkills.text_4'),
          text_5: this.$t('moreSkills.text_5'),
          text_6: this.$t('moreSkills.text_6'),
          text_7: this.$t('moreSkills.text_7'),
        }; 

      const div = document.createElement('div'); 
      div.setAttribute('class', 'd-flex flex-column justify-content-center align-items-center rounded pt-4 pb-4 bg-dark m-0 p-0 col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7');
      
      Object.keys(texts).forEach(key => {
        let text = texts[key];   

        const span = document.createElement('span');                   
        span.setAttribute('class', 'mt-3 col-10');
        span.innerText = text;          

        div.appendChild(span); 
      });

      moreSkills.appendChild(div);


        if(this.lang === 'english' || this.lang === '') {
          return;
        }

        const btnCurriculum = document.createElement('button');
        btnCurriculum.setAttribute('class', 'border-0 rounded p-3 mt-5 mb-5 bg-warning');        
        btnCurriculum.innerText = btnText;
        btnCurriculum.addEventListener('click', this.openPdf);
        moreSkills.appendChild(btnCurriculum);
      },
      
      openPdf() {         

      if(this.lang === 'english') {
        this.lang = ''
      } 

      const pdfURL = `/cv/${this.lang}-wemerson-nicacio.pdf`;      
      window.open(pdfURL, '_blank');
    }

  },

  mounted() {     
    this.createButton();
  }



};


</script>

<style scoped>

  #more-skills {
    width: 100%;
    height: auto;
    background-color: #1b1b1f;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;   
  }
  

</style>
