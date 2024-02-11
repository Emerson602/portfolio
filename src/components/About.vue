<template>
    <div class="about-me-container" id="about-me-container">
      <h1>{{ $t('aboutMe.title') }}</h1>  
      <p>{{ $t('aboutMe.text') }}</p>  
    </div>
</template>

<style scoped>
  .about-me-container {        
      width: 100%;
      height: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;           
      margin: 0;
      padding: 200px 0 100px 0;   
      background-image: url('../../public/img/bg-desktop.webp');    
      background-size: cover;
      background-repeat: no-repeat;  
      background-position: center;          
  }

    @media(max-width: 950px) {
    .about-me-container{
      background-image: url('../../public/img/bg-mobile.webp');     
    }
  }

  .about-me-container div {
      
      margin: 200px 0 100px 0;
  }

  h1 {
        font-size: 1.8rem;
  }

  p {
    width: 80vw;
    text-align: center;
    text-indent: 20px;
    font-size: 1.4rem;    
    margin: 50px;   
    color: #141414;  
  }

  @media(max-width: 750px) {
    h1 {
        font-size: 1.5rem;
     }
    p {
        width: 90vw;
        text-indent: 2px;
        font-size: 1.4rem;
     }
  } 

   @media(max-width: 480px) {
    h1 {
        font-size: 1.2rem;
     }
    p {
        width: 90vw;
        text-indent: 2px;
        font-size: 1rem;
     }
  } 
</style>
  