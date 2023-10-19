<template>
<nav class="navbar navbar-expand-sm navbar-dark" id="nav">
  <div class="container-fluid">
    
    <router-link to="/">
        <img class="navbar-brand" :src="logo" :alt="alt" id="logo">
    </router-link>     

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">

        <li class="nav-item">          
          <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
        </li>

        <li class="nav-item">          
          <router-link to="/Projects" class="nav-link">{{ $t('nav.projects') }}</router-link>
        </li>

        <li class="nav-item">         
          <router-link to="/About" class="nav-link">{{ $t('nav.aboutMe') }}</router-link>
        </li>  
        
        <li class="nav-item">          
          <router-link to="/Skills" class="nav-link">{{ $t('nav.skills') }}</router-link>
        </li> 

        <li class="nav-item">          
          <a href="https://api.whatsapp.com/send?phone=5582993975054" target="_blank" class="nav-link">{{ $t('nav.contact') }}</a>
        </li> 
        
      </ul>
    </div>
  </div>
</nav>
</template>


<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}

</script>

<style scoped> 
 
    #nav {     
      width: 100%;
      backdrop-filter: blur(10px);
      box-shadow: 10px 0 15px rgb(0 0 0 / 60%);  
      background-color: #141414; 
      position: absolute;
      z-index: 2;
    }

    #logo {
      width: auto;
      height: 50px; 
      margin: 10px 0 10px 30px;     
    } 
    
    .navbar-nav {
      margin-left: auto;
      padding: 0 30px 0 30px;
    }

    #collapsibleNavbar {
      font-size: 1rem;
    }

    @media(max-width: 700px) {
      
      #logo {
        height: 40px;
        margin: 10px 0 10px 15px;
        outline: none;
      }
      .navbar-nav {        
        padding: 0 10px 0 30px;
      }
      
      #collapsibleNavbar {
        font-size: 0.9rem;
      }
      
    }
  
</style>
