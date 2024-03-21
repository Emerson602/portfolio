<template>
  <div class="projects-container" id="projects-container">
    <div class="d-flex flex-column align-items-center">
        <h1>{{ $t('projects.title') }}</h1> 

        <section id="projects-section">

        </section>       
        
        <button v-if="visibilityShowMoreBtn" class="btn-show-more col-8 col-sm-6 col-md-4 mt-5 m-5 rounded p-2 text-light bg-dark" @click="showMore">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>  

        <button v-if="visibilityHideBtn" class="btn-hide col-8 col-sm-6 col-md-4 mt-5 m-5 rounded p-2 text-light bg-dark" @click="hide">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
            <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
          </svg>
        </button>

    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: null, 
      username: 'emerson602',        
      firstProject: 0, 
      lastProject: 5,      
      totalProjects: undefined, 
      newRepositories: [], 
      visibilityShowMoreBtn: true,
      visibilityHideBtn: false,    
      projectLink: '',
      projectName: '',
      projectDescription: '',
      projectTechnologies: '',   
      technologies: [],
      totalTechnologies: 0, 
      
    };
  },
  methods: {
    renderRepositories(repositories) {  

     this.paginationRepositories(repositories)         
     
     if (this.content) {
        this.content.innerHTML = '';
        
        this.newRepositories.forEach(({ name }, index) => {
          if (![1, 4, 6, 7].includes(index)) {

            const project = document.createElement('div');
            const nameProject = document.createElement('h2');
            const projectDescription = document.createElement('p');
            const technologiesDiv = document.createElement('div');                    
            const projectLink = document.createElement('a'); 
            const projectRepository = document.createElement('a');            

            project.setAttribute('id', 'project');  
            nameProject.setAttribute('id', 'name-project');
            projectDescription.setAttribute('id', 'project-description');
            technologiesDiv.setAttribute('id', 'technologies-div');           

            function formatRepositoryName() {

              const nameArray = name.split("-");
              let numberOfWords = nameArray.length;
              let formattedName = "";

              for (let wordIndex = 0; wordIndex < numberOfWords; wordIndex++) {
                formattedName += nameArray[wordIndex];
                if (wordIndex !== numberOfWords - 1) {
                  formattedName += " ";
                }
              }

              return formattedName;
            }

            function capitalizeFirstLetter(string) {
              return string.charAt(0).toUpperCase() + string.slice(1);
            }

            let repositoryName = formatRepositoryName()   
            repositoryName = capitalizeFirstLetter(repositoryName)            

            nameProject.textContent = `${repositoryName}`;       

            this.projectName = name   
            
            this.definingProjectData()           

            for(let technologyIndex = 0; technologyIndex < this.totalTechnologies; technologyIndex++) {
              let index = this.technologies[technologyIndex];
              technologiesDiv.innerHTML += `              
                <img id="technologies-img" src="./img/${index}.webp" type="button" data-toggle="tooltip" data-placement="top" title="${index.toUpperCase()}">              
              `;
                           
            }

            let description = this.projectDescription 
            description = capitalizeFirstLetter(description)                     
            projectLink.href = this.projectLink;  

            projectDescription.textContent = description;         

            const btnTextPrevieInBrowser = this.$t('projects.previewInBrowser');
            const btnTextProjectRepository = this.$t('projects.projectRepository');

            projectLink.target = '_blank';
            projectLink.textContent = btnTextPrevieInBrowser
            projectLink.className = 'btn-project';     
         
            projectRepository.href = `https://github.com/Emerson602/${name}`
            projectRepository.target = '_blank';

            projectRepository.textContent = btnTextProjectRepository
            projectRepository.className = 'btn-project-repository';            

            [nameProject, projectDescription, technologiesDiv, projectLink, projectRepository].forEach((data) => {
              project.appendChild(data);
            });                    
            this.content.appendChild(project);
          }          
        });
          
      }   
      
    }, 

    definingProjectData() {  
        
       let keyName = '' 
       let technologies = [];
       let link = '';
       
       if(this.projectName === 'almeida-transportes') {

            keyName = 'almeidaTransportesDescription';
            technologies = ['html', 'css', 'javascript'];

       } else if(this.projectName === 'financial-control') {

            keyName = 'financialControlDescription';
            technologies = ['html', 'css', 'javascript', 'bootstrap', 'vue'];


       } else if(this.projectName === 'gas-consumption-calculator') {

            keyName = 'gasConsumptionCalculatorDescription';
            technologies = ['html', 'css', 'javascript', 'vue']; 

       } else if(this.projectName === 'minha-brisa') {

            keyName = 'minhaBrisaDescription';
            technologies = ['html', 'css', 'javascript'];


       } else if(this.projectName === 'portfolio') {

            keyName = 'portfolioDescription';
            technologies = ['html', 'css', 'javascript', 'bootstrap', 'vue', 'api']; 
            link = 'https://wndev.vercel.app/';

       } else if(this.projectName === 'quadratic-equation') {

            keyName = 'quadraticEquationDescription';
             technologies = ['html', 'css', 'javascript'];  

       } else if(this.projectName === 'quick-chat-link') {

            keyName = 'quickChatLinkDescription';
            technologies = ['html', 'css', 'javascript'];  

       } else if(this.projectName === 'search-repositories') {

            keyName = 'searchRepositoriesDescription';
            technologies = ['html', 'css', 'javascript', 'bootstrap', 'api'];

       } else if(this.projectName === 'text-reader') {

            keyName = 'textReaderDescription';
            technologies = ['html', 'css', 'javascript', 'api'];  

       } else if(this.projectName === 'todo-list') {
        
            keyName = 'todoListDescription';
            technologies = ['html', 'css', 'javascript', 'bootstrap'];  

       } else if(this.projectName === 'virtual-cat') {

            keyName = 'virtualCatDescription';
            technologies = ['html', 'css', 'javascript'];

       }
      
       if(link === '') {
         
            link = `https://emerson602.github.io/${this.projectName}/index.html`;   
             
         }

       this.projectLink = link
          
        
       
       this.projectDescription = this.$t(`projects.${keyName}`);  
       this.technologies = technologies;
       let numberTechnologies = technologies.length;
       this.totalTechnologies = numberTechnologies;   
     
    },
    
    getRepository() {
      axios
        .get(`https://api.github.com/users/${this.username}/repos`)
        .then((response) => {
          const repositories = response.data;  
          this.totalProjects = repositories.length      
                       
          this.renderRepositories(repositories);  
                      
        })
        .catch((error) => {
          console.error(error);
          if (this.content) {
            this.content.innerHTML = '';
            const errorRow = document.createElement('tr');
            const errorCell = document.createElement('td');
            errorCell.setAttribute('colspan', '1');
            errorCell.textContent = 'Erro ao acessar a API do GitHub.';
            errorRow.appendChild(errorCell);
            this.content.appendChild(errorRow);
          }
        });
    },

    paginationRepositories(repositories) {
      this.newRepositories = repositories.slice(this.firstProject, this.lastProject)         
    },

    showMore() {

      const btnShowMore = document.querySelector('.btn-show-more');
      const svgElement = document.querySelector('svg');
      const increment = 5;

      if(this.lastProject < this.totalProjects) { 

        let differenceBetween = this.totalProjects - this.lastProject;
        
        if(differenceBetween < increment) {

          this.lastProject += differenceBetween;  

        } else {

          this.lastProject += increment;
        }

        if(this.lastProject === this.totalProjects) {
            this.visibilityShowMoreBtn = false;
            this.visibilityHideBtn = true;
        }
        
        this.getRepository();         
      }

    },
    
    hide() {
      this.lastProject = 5;
      this.visibilityShowMoreBtn = true;
      this.visibilityHideBtn = false;
      this.getRepository();  
      this.scrollToProjects();   
    },

    scrollToProjects() {
      const projectsContainer = document.querySelector('#projects-container')
      projectsContainer.scrollIntoView({ behavior: 'smooth' });   
    },

    handleProjectsContainerObserver() {
      const projectsObserver = new IntersectionObserver(elements => {
        if (elements[0].isIntersecting) {         
          this.getRepository();           
          return;
        }          

      }, {});

      const projectsContainer = document.querySelector('#projects-container');
      projectsObserver.observe(projectsContainer);
    },     

  },

  mounted() {
    this.content = document.querySelector('#projects-section'); 
    this.getRepository();  
    this.handleProjectsContainerObserver();

   },
  
};
</script>

<style>

    .projects-container {        
        min-height: 1000px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;     
        margin: 0;
        padding: 180px 0 100px 0;          
    }

    #projects-section span {
      font-weight: bolder;
      font-size: 1.1rem;          
    }

    h1 {
        font-size: 1.8rem !important;
        color: #141414;   
        position: relative;
        top: -50px;    
        line-height: 45px;   
    }

    a{
        text-decoration: none;                    
    }

    #project {
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-content: center;
        border-radius: 20px;
        border: solid 1px #F29F05;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        margin: 20px 0;
        padding: 30px 60px 30px 60px;
        width: 70vw;
        height: auto;
        font-size: 1rem;   
        background-color: rgba(242, 219, 148, 0.5); 
        background-image: url('../../public/img/bg-desktop.webp');    
        background-size: cover;
        background-repeat: no-repeat;  
        background-position: top;    
    }  

    #name-project {
      font-size: 1.4rem;
      margin: 0 0 10px 0;
      width: 100%;
      line-height: 35px;
      font-weight: bold;
    }

    #project-description {
      width: 100%;   
      font-size: 1.2rem;   
    }

    #technologies-div {
      display: grid;         
      grid-template-columns: repeat(10, 1fr);   
      align-items: center; 
      justify-items: center;       
      padding: 0; 
      margin: 0;   
      width: 100%;      
    }


    #technologies-img {
      width: 60px;
      height: auto; 
      margin: 20px 0 0 0; 
    }

    @media (max-width: 1400px) {

        #technologies-div {
          display: grid;         
          grid-template-columns: repeat(8, 1fr);   
          align-items: center; 
          justify-items: center;       
          padding: 0; 
          margin: 0;   
          width: 100%;      
        }

        #technologies-img {
          width: 60%;
          height: auto;       
        }
    }

    .btn-project, .btn-project-repository {
        background-color: #1b1b1f;
        color: #fff;
        border-radius: 4px;
        padding: 6px 0;
        margin: 30px 0 10px 0; 
        width: 300px; 
        position: relative;
        top: 25px;
        left: 50%;
        transform: translate(-50%, -50%);     
        text-align: center; 
        font-size: 1rem;
    }

    .btn-project-repository {
      margin-top: 0;
    }

    .btn-project:hover, .btn-project-repository:hover, .btn-show-more:hover, .btn-hide:hover {
        background-color: #F29F05 !important; 
        transition: 2s !important;    
    }

    @media (max-width: 750px) {  

        h1 {
            font-size: 1.5rem;
        }
      
        #project {
            width: 95vw;
            padding: 40px 20px 60px 20px;
            font-size: 1rem;
        }
        
        #name-project {
          font-size: 1.2rem;
          text-align: center;
        }

        #project-description {           
          font-size: 1rem;   
        }
        
        #technologies-div {
          display: grid;         
          grid-template-columns: repeat(6, 1fr); 
        }

        #technologies-img {
          width: 50%;
          height: auto; 
          margin: 20px 0 0 0;    
        }

        .btn-project, .btn-project-repository {

            font-size: 0.8rem;
            width: 220px;
            padding: 6px 0;
        }
    }

  @media (max-width: 480px) {  

        h1 {
            font-size: 0.8rem;
        } 

        #technologies-div {
          display: grid;         
          grid-template-columns: repeat(5, 1fr); 
        }

        #technologies-img {
          width: 60%;
          height: auto; 
          margin: 20px 0 0 0;    
        }

    }

</style>



