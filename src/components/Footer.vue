<template>
    <footer id="footer">
        
    </footer>
</template>

<script>
export default{
  data() {
    return {
        name: "Footer"
    }
  },
  methods: {
    showCurrentYear() {
      const footer = document.querySelector('#footer')      
      const currentYear = new Date().getFullYear();
      footer.innerHTML = `<span> W.N &copy; ${currentYear} </span>`       
    },
  },
    mounted() {
    this.showCurrentYear();
  },  
}
</script>

<style scoped>
    #footer {
        background-color: #1b1b1f;
        color: #fff;
        text-align: center; 
        font-size: 0.9rem;   
        padding: 5px 0;
        border-top: solid 1px #fff;    
    }
</style>
