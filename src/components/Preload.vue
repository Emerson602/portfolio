<template>
    <div id="preload-container">
        <img :src="preload" id="preload">         
    </div>
</template>

<script>
export default {
    name: "Preload",   
    props: {
    preload: String
  },
  mounted() { 
    this.removePreload();
  },
  methods: {
    removePreload() {
      const overlay = document.querySelector('#preload-container');      
      window.addEventListener("load", function () {
		    overlay.remove();
		})
    },
  },
}
</script>

<style scoped>
    #preload-container {
        position: fixed;
        top: 0;
        left: 0;     
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 1);
        z-index: 99;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;     
        padding: 0;
        margin: 0;  
    }

    #preload {
      width: 80px;
      height: auto;  
    }

    @media (max-width: 700px) {
      #preload {
        width: 60px;
      }
    } 

</style>
