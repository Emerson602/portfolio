<template>
  <div class="pt-5 pb-5" id="projects-container">

    <div class="d-flex flex-column align-items-center">
        
        <h1 class="fs-1">{{ $t('projects.title') }}</h1> 

        <section id="projects-section" class="mt-3 d-flex flex-row justify-content-center align-items-start flex-wrap">
          
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
      lastProject: 6,      
      totalProjects: undefined, 
      newRepositories: [], 
      visibilityShowMoreBtn: true,
      visibilityHideBtn: false, 
      projectImg: '',  
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

     const repositoriesNotDisplayed = [1, 4, 6, 7];

     this.paginationRepositories(repositories)         
     
     if (this.content) {
        this.content.innerHTML = '';
        
        this.newRepositories.forEach(({ name }, index) => {
          if (!repositoriesNotDisplayed.includes(index)) {

            const project = document.createElement('div');
            const imgFrame = document.createElement('div');
            const imgProject = document.createElement('img');
            const nameProject = document.createElement('h2');
            const projectDescription = document.createElement('p');          
            const technologiesDiv = document.createElement('div');                    
            const projectLink = document.createElement('a'); 
            const projectRepository = document.createElement('a');            
            
            project.setAttribute('id', 'project'); 
            imgFrame.setAttribute('id', 'img-frame');    
            imgProject.setAttribute('id', 'img-project');           
            nameProject.setAttribute('id', 'name-project');            
            projectDescription.setAttribute('id', 'project-description');           
            technologiesDiv.setAttribute('id', 'technologies-div');
            
            imgFrame.setAttribute('class', 'rounded')
            project.setAttribute('class', 'd-flex flex-column justify-content-start align-items-center m-3 mt-5 p-0 text-center');
            nameProject.setAttribute('class', 'fs-5 mt-3 mb-0 fw-bold');
            projectDescription.setAttribute('class', 'fs-6');   
            
            imgFrame.appendChild(imgProject)

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
            imgProject.src = this.projectImg;             

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

            [imgFrame, nameProject, projectDescription, technologiesDiv, projectLink, projectRepository].forEach((data) => {
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
       
       const projects = [
        {   
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'almeida-transportes',
            key: 'almeidaTransportesDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',
        },
        {   
            img: '',
            name: 'financial-control',
            key: 'financialControlDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'vue'],
            link: '',
        },
        {   
            img: '',
            name: 'gas-consumption-calculator',
            key: 'gasConsumptionCalculatorDescription',
            technologies: ['html', 'css', 'javascript', 'vue'],
            link: '',
        },
        {   
            img: '',
            name: 'minha-brisa',
            key: 'minhaBrisaDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',
        },
        {   
            img: '',
            name: 'portfolio',
            key: 'portfolioDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'vue', 'api'],           
            link: 'https://wndev.vercel.app/'
        },
        {   
            img: '',
            name: 'quadratic-equation',
            key: 'quadraticEquationDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',
        },
        {   
            img: '',
            name: 'quick-chat-link',
            key: 'quickChatLinkDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',
        },
        {   
            img: '',
            name: 'search-repositories',
            key: 'searchRepositoriesDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'api'],
            link: '',
        },
        {
            img: '',
            name: 'text-reader',
            key: 'textReaderDescription',
            technologies: ['html', 'css', 'javascript', 'api'],
            link: '',
        },
        {
            img: '',
            name: 'todo-list',
            key: 'todoListDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap'],
            link: '',
        },
        {
            img: '',
            name: 'virtual-cat',
            key: 'virtualCatDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',
        }
      ];
     
      for (let i = 0; i < projects.length; i++) {
        const project = projects[i]; 
                
        if (this.projectName === project.name) { 
            
            keyName = project.key;
            technologies = project.technologies;
            link = project.link === '' ? `https://emerson602.github.io/${this.projectName}/index.html` : project.link;
           
            this.projectImg = project.img;
            this.projectLink = link;
            this.projectDescription = this.$t(`projects.${keyName}`);
            this.technologies = technologies;
            this.totalTechnologies = technologies.length;
            break; 
        }
    }
    
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
      const increment = 6;

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

    #projects-container {        
        min-height: 1000px;
        width: 100%;          
    } 
    
    a{
        text-decoration: none;                    
    }

    #project {        
        width: 300px;
        height: auto; 
        background-color: #f4f5fa;            
    }

    #img-frame {
      overflow-y: scroll;
      width: 100%;
      height: 225px;     
    }

    #img-project {
      width: 100%;
      height: auto;  
    }

    #name-project {
      width: 100%;    
      line-height: 35px;  
      height: 80px;     
    }

    #project-description {
      width: 100%;  
      height: 150px;   
      overflow-y: auto; 
      text-align: start;     
      display: none;                
    }

    #project-description::-webkit-scrollbar { 
      width: 0px;
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
      width: 40px;
      height: auto; 
      margin: 20px 2px; 
    } 
   
    .btn-project, .btn-project-repository {
        background-color: #F2727D; 
        box-shadow: 2px 2px rgba(0, 0, 0, 0.37);
        color: #141414;
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
        background-color: #6662D9 !important;  
        transition: 1s !important;    
        cursor: pointer;
        box-shadow: 2px 2px rgba(0, 0, 0, 1);
        color: #fff;
    }     

</style>



