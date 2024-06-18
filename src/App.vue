<template>
  <ChooseYourLanguage :english="english_src" :portoghese="portoghese_src" :italian="italian_src" />
  <Preload :preload="preload_src" />
  <BeforeNavbar :english="english_src" :portoghese="portoghese_src" :italian="italian_src" />
  <Navbar :logo="logo_src" :alt="app_name" />   
  <topButton/>  
  <router-view/>
  <Home/>  
  <Skills/>
  <MoreSkills/> 
  <About/>   
  <Projects/>   
  <Contacts :github="github_src" :linkedin="linkedin_src"/> 
  <Footer/>
</template>

<script>
import ChooseYourLanguage from "./components/ChooseYourLanguage.vue";
import Preload from "./components/Preload.vue";
import topButton from "./components/topButton.vue";
import Navbar from "./components/Navbar.vue";
import BeforeNavbar from "./components/BeforeNavbar.vue";
import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import MoreSkills from "./components/MoreSkills.vue";
import Contacts from "./components/Contacs.vue"
import Footer from "./components/Footer.vue";

export default {
   components: {
    ChooseYourLanguage,
    Preload,
    topButton,
    Navbar,
    BeforeNavbar,
    Home,
    Projects,
    About,
    Skills,
    MoreSkills,
    Contacts,
    Footer, 
   },
   data() {
    return {
      logo_src: "/img/logo.webp",    
      english_src: "/img/english.webp",
      portoghese_src: "/img/brazil.webp",
      italian_src: "/img/italy.webp",   
      preload_src: "/img/preload.gif",  
      app_name: "My portfolio",  
    }
   }
}
</script>

<style> 
@import url('https://fonts.cdnfonts.com/css/share-tech-mono');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Share Tech Mono', sans-serif;     
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #fff; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #f4f5fa; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #6662D9; 
}

  .main-container {
    margin: 50px;
    height: 600px;
}

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
}

button:hover {
  transition: 1.5s;
  background-color: #141414 !important;
  color: #fff;
  border: solid 1px #F29F05 !important;
}

</style>
