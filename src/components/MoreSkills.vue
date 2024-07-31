<template>  
      <div id="more-skills" class="fs-5 pt-5 pb-5 d-flex flex-column justify-content-center align-items-center">        

      </div>      
</template>

<script>
export default {
  data() {
    return {

    };
  },

  methods: {  

      addTexts() {
        const moreSkills = document.querySelector('#more-skills');           
        

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
      div.setAttribute('class', 'd-flex flex-column justify-content-center align-items-center m-0 p-0 col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7');
      
      Object.keys(texts).forEach(key => {
        let text = texts[key];   

        const span = document.createElement('span');                   
        span.setAttribute('class', 'mt-3 col-10');
        span.innerText = text;          

        div.appendChild(span); 
      });

      moreSkills.appendChild(div);


    
      }, 

  },

  mounted() {     
    this.addTexts();
  }



};


</script>

<style scoped>

  #more-skills {
    width: 100%;
    height: auto;
    background-color: #f4f5fa;
    color: #141414;  
  }

  span {
    width: 90% !important;     
  }

</style>
 