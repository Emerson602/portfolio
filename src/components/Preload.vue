<template>
    <div id="preload-container">
        <img :src="preload" id="preload"> 
        <p id="text-preload"></p>     
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
    this.typing();
  },
  methods: {
    removePreload() {
      const overlay = document.querySelector('#preload-container');      
      window.addEventListener("load", function () {
		  overlay.remove();
		})
    },

    typing() {
            let letter = 0;
            const text = 'Loading...';
            const speed = 100;
            const textLocation = document.querySelector('#text-preload');

            function typeLetter() {
                if (letter < text.length) {
                    textLocation.innerHTML += text.charAt(letter);
                    letter++;
                    setTimeout(typeLetter, speed); 
                }
            }

            function deleteLetter() {
                if (letter >= 0) {
                    textLocation.innerHTML = textLocation.innerHTML.slice(0, -1);
                    letter--;
                    if (letter >= 0) {
                        setTimeout(deleteLetter, speed);
                    } else {
                        setTimeout(typeLetter, 2000);
                    }
                }
            }
            
            typeLetter();

            setInterval(() => {
                deleteLetter(); 
            }, 5000);
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
        background-color: #f4f5fa;
        z-index: 99;
        color: #141414;
        display: flex;
        align-items: center;
        justify-content: center;     
        padding: 0;
        margin: 0;  
    }

    #preload {
      width: 80px;
      height: auto;  
      transform: scaleX(-1);
      position: absolute;
      left: -5%;
      animation: bee 10s ease-in-out infinite;
      animation-delay: 0s;     
    }

    @keyframes bee {
      0% {
        left: -5%;
        top: 30%;
      }
      10% {
        top: 50%;
      }
      20% {
        top: 40%;
      }
      30% {
        top: 60%;
      }
      40% {
        top: 30%
      }
      50% {
        top: 40%;
      }
      60% {
        top: 20%;
      }
      70% {
        top: 60%;
      }
      80% {
        top: 70%;
      }
      90% {
        top: 60%;
      }
      100% {
        left: 100%;
        top: 50%;
      }
    }

    @media (max-width: 700px) {
      #preload {
        width: 60px;
      }
    } 

    #text-preload {
      font-size: 1.6rem;      
    }

</style>
