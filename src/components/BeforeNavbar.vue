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
            <img @click="setLocale('en');" :src="english" id="english">
            <img @click="setLocale('pt_br');" :src="portoghese" id="portoghese">
            <img @click="setLocale('it');" :src="italian" id="italian">               
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
    }
  },   
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    },
    callToType() {
      this.toType();
    }
  }
}
</script>

<style scoped>

#before-nav-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: #141414;  
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
