<template>
    <section v-if="language == ''" class="d-flex flex-column justify-content-center align-items-center bg-light text-dark">
      <span class="fs-2">Choose your language: </span>
        <div class="mt-5 d-flex flex-row justify-content-center align-items-center">           
          <img class="m-2" @click="setLanguageEnglish();" :src="english" id="english">
          <img class="m-2" @click="setLanguagePortoghese();" :src="portoghese" id="portoghese">
          <img class="m-2" @click="setLanguageItalian();" :src="italian" id="italian">               
        </div>
    </section>
</template>

<script>
export default {
name: 'ChooseYourLanguage',
props: {
  english: String,
  portoghese: String,
  italian: String,
},
data() {
    return {
      language: localStorage.getItem("lang") || '',
    }
},
methods: {

  setLanguageEnglish() {
    const englishLanguage = 'english';
    localStorage.setItem("lang", englishLanguage);
    location.reload();
  },

  setLanguageItalian() {
    const italianLanguage = 'italian';
    localStorage.setItem("lang", italianLanguage);
    location.reload();
  },

  setLanguagePortoghese() {
    const portogheseLanguage = 'portoghese';
    localStorage.setItem("lang", portogheseLanguage);
    location.reload();
  },

},

}
</script>



<style scoped>
    section {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 100;         
    }

    img {
      border-radius: 10px;
      width: 50px;
      height: auto;     
      box-shadow: 2px 2px rgba(0, 0, 0, 0.37);
      border: solid 1px rgba(0, 0, 0, 0.37);
    }
    
    img:hover {
      cursor: pointer;
      transition: 1s;
      border: solid 1px #141414;
      box-shadow: 2px 2px rgba(0, 0, 0, 3.37);     
    }

</style>

