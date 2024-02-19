<template>
  <div id="contacts" class="d-flex flex-column flex-md-row justify-content-center align-items-center border-top-0 border-end-0 border-start-0 border border-white pt-5 pb-5">

    <div id="container-contacts" class="d-flex flex-column justify-content-center align-items-center m-0 p-0 col-12 col-md-6">

        <div class="mb-4 mt-2 d-flex">
            <a :href="github_href" target="_blank" class="m-2 rounded" id="github">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-github text-light" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>

            <a :href="linkedin_href" target="_blank" class="m-2 rounded" id="linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>
        </div>

        <div class="text-center">
            <div>  
                <span class="d-block text-light fs-6">Whatsapp:</span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp text-success m-2" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>

                <a :href="whatsapp_href" target="_blank" class="text-light align-middle" id="whatsapp">+55 (82) 99397-5054</a> 
            </div> 

            <div class="mt-2 p-0"> 
              <span class="d-block text-light fs-6">E-mail:</span> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope m-2 text-light" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              <span class="text-light align-middle" id="email">wemerson.azevedo@iqb.ufal.br</span>
            </div>
        </div>   
    </div>

    <form id="form" action="https://formsubmit.co/wemerson.azevedo@iqb.ufal.br" method="POST" class="text-light d-flex flex-column justify-content-center align-items-center mb-5 p-0 col-12 col-md-6">
     
      <input type="hidden" name="_next" value="https://wndev.vercel.app/" />
      <input type="hidden" name="_autoresponse" value="Message received successfully" /> 
      <input type="hidden" name="_cc" value="emerson.nic@hotmail.com" />

      <label for="name" class="mt-5">{{  $t('form.name') }}</label>
      <input type="text" id="nameForm" name="name" class="text-center mt-1 p-1 col-10 col-sm-8" required />

      <label for="subject" class="mt-2">{{  $t('form.subject') }}</label>
      <input type="text" name="subject" class="text-center mt-1 p-1 col-10 col-sm-8" required />

      <label for="email" class="mt-2">{{  $t('form.yourEmail') }}</label>
      <input type="email" name="email" class="text-center mt-1 p-1 col-10 col-sm-8" required />

      <label for="message" class="mt-2">{{  $t('form.message') }}</label>
      <textarea type="text" name="message" class="text-center mt-1 p-1 col-10 col-sm-8" required></textarea>

      <button type="submit" class="btn btn-warning mt-5 pt-2 pb-2 col-10 col-sm-8">{{  $t('form.send') }}</button>

    </form>      
  
  </div>
</template>

<script>

export default {
 name: 'Contacts',

 data() {
    return {
      linkedin_href: "https://www.linkedin.com/in/wemerson-nicacio-0633b623b/",
      github_href: "https://github.com/Emerson602",  
      whatsapp_href: "https://api.whatsapp.com/send?phone=5582993975054",        
    };
  },

  methods: {      
    

  },

  mounted() {
    
  }

};

</script>

<style scoped>

#contacts {
    background-color: #1b1b1f;
}

#email, #whatsapp {  

    font-size: 1rem;
}

@media(max-width: 500px) { 

    #email, #whatsapp {

        font-size: 0.9rem;
    }     
}

textarea {
  min-height: 100px;
  resize: vertical;  
}

#form input, textarea {
  font-size: 1rem;
  outline: none;
}

@media (min-width: 1000px) {

    #form input, textarea, button {
       width: 400px !important;
  }
}

#whatsapp:hover {

    cursor: pointer;
    transition: 2s;
    color: #F29F05 !important;
}

#linkedin:hover, #github:hover {
    cursor: pointer;
    transition: 2s;
    border: solid 1px #fff !important;
}

</style>
