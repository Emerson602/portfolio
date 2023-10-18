<template>
  <Preload :preload="preload_src" />
  <BeforeNavbar :github="github_src" :linkedin="linkedin_src" :english="english_src" :portoghese="portoghese_src" :italian="italian_src" />
  <Navbar :logo="logo_src" :alt="app_name" /> 
  <router-view/>  
  <Footer/>
</template>

<script>
import Preload from "./components/Preload.vue";
import Navbar from "./components/Navbar.vue";
import BeforeNavbar from "./components/BeforeNavbar.vue";
import Footer from "./components/Footer.vue";

export default {
   components: {
    Preload,
    Navbar,
    BeforeNavbar,
    Footer, 
   },
   data() {
    return {
      logo_src: "/img/logo.webp",
      linkedin_src: "/img/linkedin.webp",
      github_src: "/img/github.webp", 
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
  box-shadow: inset 0 0 5px #141414; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #00008B; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #0000FF; 
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

</style>
