<template>
  <div class="pt-5 pb-5" id="projects-container">

    <div class="d-flex flex-column align-items-center">
        
        <h1 class="fs-1">{{ $t('projects.title') }}</h1> 

        <section id="projects-section" class="mt-3 d-flex flex-row justify-content-center align-items-start flex-wrap">
          
        </section>       
        
        <button v-if="visibilityShowMoreBtn" class="btn-show-more col-8 col-sm-6 col-md-4 mt-5 m-5 rounded p-2 border-0" @click="showMore">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>  

        <button v-if="visibilityHideBtn" class="btn-hide col-8 col-sm-6 col-md-4 mt-5 m-5 rounded p-2 border-0" @click="hide">
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
            const imgPlatform = document.createElement('div');
            const imgScreen = document.createElement('div');
            const imgProject = document.createElement('img');
            const nameProject = document.createElement('h2');
            const projectDescription = document.createElement('p'); 
            const btnReadMore = document.createElement('button');          
            const technologiesDiv = document.createElement('div');                    
            const projectLink = document.createElement('a'); 
            const projectRepository = document.createElement('a');            
            
            project.setAttribute('id', 'project'); 
            
            imgPlatform.setAttribute('id', 'img-platform');
            imgScreen.setAttribute('id', 'img-screen');    
            imgProject.setAttribute('id', 'img-project');           
            nameProject.setAttribute('id', 'name-project');            
            projectDescription.setAttribute('id', 'project-description');  
            btnReadMore.setAttribute('id', 'btn-read-more'); 
                          
            technologiesDiv.setAttribute('id', 'technologies-div');
            
            imgPlatform.setAttribute('class', 'p-2 rounded');
            imgScreen.setAttribute('class', 'rounded');
            project.setAttribute('class', 'd-flex flex-column justify-content-start align-items-center m-3 mt-5 p-0 text-center');
            nameProject.setAttribute('class', 'fs-6 mt-5 mb-3 fw-bold');
            projectDescription.setAttribute('class', 'fs-6');
            btnReadMore.setAttribute('class', 'fs-6 rounded border-0 p-1 mt-1 mb-3');
            technologiesDiv.setAttribute('class', 'd-flex flex-row justify-content-center align-items-center flex-wrap m-0 p-0');
            
            btnReadMore.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path>
              <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path>
            </svg>
            `

            btnReadMore.addEventListener('click', () => {
              const projectDescription = document.querySelector('#project-description');

              if(projectDescription) {
                projectDescription.style.height = 'auto';
                console.log('expandiu')
              }
              
            });

            imgPlatform.appendChild(imgScreen)
            imgScreen.appendChild(imgProject)

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

            [imgPlatform, nameProject, projectDescription, btnReadMore, technologiesDiv, projectLink, projectRepository].forEach((data) => {
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
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'financial-control',
            key: 'financialControlDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'vue'],
            link: '',
        },
        {   
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'gas-consumption-calculator',
            key: 'gasConsumptionCalculatorDescription',
            technologies: ['html', 'css', 'javascript', 'vue'],
            link: '',
        },
        {   
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'minha-brisa',
            key: 'minhaBrisaDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',
        },
        {   
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'portfolio',
            key: 'portfolioDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'vue', 'api'],           
            link: 'https://wndev.vercel.app/'
        },
        {   
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'quadratic-equation',
            key: 'quadraticEquationDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',
        },
        {   
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'quick-chat-link',
            key: 'quickChatLinkDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',
        },
        {   
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'search-repositories',
            key: 'searchRepositoriesDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'api'],
            link: '',
        },
        {
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'text-reader',
            key: 'textReaderDescription',
            technologies: ['html', 'css', 'javascript', 'api'],
            link: '',
        },
        {
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
            name: 'todo-list',
            key: 'todoListDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap'],
            link: '',
        },
        {
            img: 'https://i.pinimg.com/564x/c2/49/b6/c249b6f4bb784213dd4c2dcbec5bf6dc.jpg',
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
        min-height: 500px;
        width: 100%;          
    } 
    
    a{
        text-decoration: none;                    
    }

    #project {        
        width: 500px;
        height: auto;                 
    }

    #img-platform {
      box-shadow: 2px 2px rgba(0, 0, 0, 0.37); 
      background-color: #f4f5fa;
      border: solid 0.5px rgba(0, 0, 0, 0.37);
    }

    #img-platform:hover {
      box-shadow: 2px 2px rgba(0, 0, 0, 1);
    }

    #img-screen {
      overflow-y: scroll;
      width: 100%;
      height: 375px;  
      border: solid 0.5px rgba(0, 0, 0, 0.37);           
    }

    #img-screen::-webkit-scrollbar { 
      width: 0px;
    }

    #img-project {
      width: 100%;
      height: auto;         
    }

    #name-project {
      width: 100%;    
      line-height: 35px;            
    }

    #project-description {
      width: 100%;  
      height: 100px;          
      text-align: start; 
      overflow-y: hidden;                     
    }

    #project-description::-webkit-scrollbar { 
      width: 0px;
    }

    #btn-read-more {
      width: 60px;
      background-color: #f4f5fa;
    }

    #technologies-div {
      width: 100%;       
    } 

    #technologies-img {
      width: 60px;
      height: auto; 
      margin: 5px; 
      padding: 4px;
      background-color: #f4f5fa;
      box-shadow: 2px 2px rgba(0, 0, 0, 0.37);
      border-radius: 5px;
    } 

    #technologies-img:hover {
      box-shadow: 2px 2px rgba(0, 0, 0, 1);
      cursor: default;
    }

    .btn-show-more, .btn-hide {
      background-color: #F2727D; 
      box-shadow: 2px 2px rgba(0, 0, 0, 0.37);
    }

     
    .btn-project, .btn-project-repository {
        background-color: #6662D9;  
        box-shadow: 2px 2px rgba(0, 0, 0, 0.37);
        color: #141414;
        border-radius: 4px;
        padding: 6px 0;
        margin: 30px 0 10px 0; 
        width: 100%; 
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
        background-color: #F2727D !important;  
        transition: 1s !important;    
        cursor: pointer;
        box-shadow: 2px 2px rgba(0, 0, 0, 1);
        color: #fff;
    }   
    
    @media(max-width: 992px) {
        #project {        
          width: 300px;
          height: auto;                 
        }

        #img-screen {         
          width: 100%;
          height: 225px;                     
        } 

    }

</style>