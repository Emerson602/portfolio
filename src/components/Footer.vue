<template>
    <div id="footer" class="border border-muted border-bottom-0 border-start-0 border-end-0">
        
    </div>
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
        background-color: #6662D9;
        color: #141414;
        text-align: center; 
        font-size: 0.9rem;   
        padding: 5px 0;            
    }
</style>
