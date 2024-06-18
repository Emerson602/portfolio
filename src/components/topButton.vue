<template>
    <a v-if="showScrollButton" @click="scrollToHome" id="btn-top" class="text-light rounded-circle fs-6 d-flex justify-content-center align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
        </svg>   
    </a>
</template>

<script>
export default { 

    data() {
      return {
        showScrollButton: true,
      }
    },

    methods: { 

        scrollToHome() {
            const home = document.querySelector('#before-nav-container')
            home.scrollIntoView({ behavior: 'smooth' });   
        },

        handleMainContainerObserver() {
        const navObserver = new IntersectionObserver(elements => {
          if (!elements[0].isIntersecting) {
            this.showScrollButton = true
            return;
          }

          this.showScrollButton = false

        }, {});

        const navContainer = document.querySelector('#nav');
        navObserver.observe(navContainer);
      }
        
    },

    mounted() {
      this.handleMainContainerObserver();
    }

}
</script>

<style scoped>  

  #btn-top {
    position: fixed;
    top: 45%;
    right: 2%;    
    z-index: 99;
    height: 40px;
    width: 40px;  
    outline: none;
    background-color: #6662D9;  
    box-shadow: 2px 2px rgba(0, 0, 0, 0.37);  
  }   

  svg {
    margin: 0;
    background-color: transparent;  
    fill: #fff;  
  }

  #btn-top:hover {     
    background-color: #F2727D; 
    transition: 1s;
    cursor: pointer;     
    box-shadow: 2px 2px rgba(0, 0, 0, 1);
  }

</style>
