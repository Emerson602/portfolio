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
        background-color: #141414;
        color: #fff;
        text-align: center; 
        font-size: 0.9rem;   
        padding: 2px 0;    
    }
</style>
