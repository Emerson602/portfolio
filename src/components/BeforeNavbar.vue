<template>
    <div id="before-nav-container">
        <div id="social-media">
            <a :href="github_href" target="_blank">
                <img :src="github" id="github">
            </a>
            <a :href="linkedin_href" target="_blank">
                <img :src="linkedin" id="linkedin">
            </a>        
        </div>        
        <div id="langs">
            <img @click="setLanguageEnglish();" :src="english" id="english">
            <img @click="setLanguagePortoghese();" :src="portoghese" id="portoghese">
            <img @click="setLanguageItalian();" :src="italian" id="italian">               
       </div>
    </div>       
</template>

<script>

export default {
  name: "BeforeNavbar",
  props: {
    github: String,
    linkedin: String,
    english: String,
    portoghese: String,
    italian: String,
  },  
  data() {
    return {      
      linkedin_href: "https://www.linkedin.com/in/wemerson-nicacio-0633b623b/",
      github_href: "https://github.com/Emerson602",  
      language: '',     
    }
  },   
  methods: {

    setLocale(locale) {   
      this.$i18n.locale = locale     
    },

    callToType() {
      this.toType();
    }, 
    
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

    getLanguage() {
      this.language = localStorage.getItem("lang") || '';

      if(this.language === 'english') {
        this.setLocale('en');
      }

      if(this.language === 'italian') {
        this.setLocale('it');
      }

      if(this.language === 'portoghese' || this.language === '') {
        this.setLocale('pt_br');
      }      

    },

  },

  mounted() {
     this.getLanguage();
   },

}
</script>

<style scoped>

#before-nav-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: #1b1b1f;  
    border-bottom: solid 1px #fff; 
    height: 32px;    
}

#social-media, #langs {
    margin: 0 50px 0 0;
}

#langs img, #social-media img {
    width: 25px;
    height: auto;
    border-radius: 2px;     
    outline: none; 
}

#langs img {
    margin: 0 8px 0 0;
}

a{  
  border-radius: 2px;
  margin: 0 8px 0 0;
}

a:hover {
    cursor: pointer;
    transition: 1.5s;
    border: solid 1px #fff;        
}

@media(max-width: 700px) {
   #before-nav-container {
      justify-content: space-around;
   } 

   #social-media, #langs {
      margin: 0;
   }
}

#english:hover, #portoghese:hover, #italian:hover {
    cursor: pointer;
    transition: 1.5s;
    border: solid 1px #fff;
}
</style>
