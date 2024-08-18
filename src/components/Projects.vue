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
      projectOrder: '',   
      technologies: [],
      totalTechnologies: 0, 
      maxProjectsDisplayed: '', 
    };
  },
  methods: {

    renderRepositories(repositories) {
      
      const repositoriesNotDisplayed = [];

      for(let i = this.maxProjectsDisplayed; i < repositories.length; i++) {
          repositoriesNotDisplayed.push(i)
      }       
      
      this.paginationRepositories(repositories);
      
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
          const technologiesUsed = document.createElement('span');
          const projectLink = document.createElement('a');
          const projectRepository = document.createElement('a');

          project.setAttribute('id', 'project');

          imgPlatform.setAttribute('id', 'img-platform');
          imgScreen.setAttribute('id', 'img-screen');
          imgProject.setAttribute('id', 'img-project');
          nameProject.setAttribute('id', 'name-project');
          projectDescription.setAttribute('id', `project-description-${index}`);
          btnReadMore.setAttribute('id', `btn-read-more-${index}`);

          technologiesDiv.setAttribute('id', 'technologies-div');

          imgPlatform.setAttribute('class', 'p-2 rounded');
          imgScreen.setAttribute('class', 'rounded');
          project.setAttribute('class', 'd-flex flex-column justify-content-start align-items-center m-3 mt-5 p-0 text-center');
          nameProject.setAttribute('class', 'fs-6 mt-5 mb-3 fw-bold');
          projectDescription.setAttribute('class', 'fs-6 d-none text-start');
          btnReadMore.setAttribute('class', 'fs-6 bg-white rounded text-primary fw-bold border-0 p-2');
          technologiesDiv.setAttribute('class', 'd-flex flex-row justify-content-center align-items-center flex-wrap m-0 p-0');
          technologiesUsed.setAttribute('class', 'fs-6 mt-3 mb-3');

          technologiesUsed.textContent = this.$t('projects.technologiesUsed');

          btnReadMore.innerHTML = this.$t('projects.showDescription');

        btnReadMore.addEventListener('click', () => {
          if (projectDescription.classList.contains('d-none')) {
            projectDescription.classList.remove('d-none');
            projectDescription.classList.add('d-block');       
            btnReadMore.innerHTML = this.$t('projects.hideDescription');
          } else {
            projectDescription.classList.remove('d-block');
            projectDescription.classList.add('d-none');
            btnReadMore.innerHTML = this.$t('projects.showDescription');

          }
        });


          imgPlatform.appendChild(imgScreen);
          imgScreen.appendChild(imgProject);

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

          let repositoryName = formatRepositoryName();
          repositoryName = capitalizeFirstLetter(repositoryName);

          nameProject.textContent = `${repositoryName}`;

          this.projectName = name;

          this.definingProjectData();          

          for (let technologyIndex = 0; technologyIndex < this.totalTechnologies; technologyIndex++) {
            let index = this.technologies[technologyIndex];
            technologiesDiv.innerHTML += `
              <img id="technologies-img" src="./img/${index}.webp" type="button" data-toggle="tooltip" data-placement="top" title="${index.toUpperCase()}">
            `;
          }

          let description = this.projectDescription;
          description = capitalizeFirstLetter(description);
          projectLink.href = this.projectLink;
          imgProject.src = this.projectImg;

          projectDescription.textContent = description;

          const btnTextPrevieInBrowser = this.$t('projects.previewInBrowser');
          const btnTextProjectRepository = this.$t('projects.projectRepository');

          projectLink.target = '_blank';
          projectLink.textContent = btnTextPrevieInBrowser;
          projectLink.className = 'btn-project';

          projectRepository.href = `https://github.com/Emerson602/${name}`;
          projectRepository.target = '_blank';

          projectRepository.textContent = btnTextProjectRepository;
          projectRepository.className = 'btn-project-repository';

          [imgPlatform, nameProject, projectDescription, btnReadMore, technologiesUsed, technologiesDiv, projectLink, projectRepository].forEach((data) => {
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
            name: 'almeida-transportes',
            api: false,
            key: 'almeidaTransportesDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',            
        },
        {               
            name: 'financial-control',
            api: false,
            key: 'financialControlDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'vue'],
            link: '',            
        },
        {               
            name: 'gas-consumption-calculator',
            api: false,
            key: 'gasConsumptionCalculatorDescription',
            technologies: ['html', 'css', 'javascript', 'vue'],
            link: '',            
        },
        {               
            name: 'minha-brisa',
            api: false,
            key: 'minhaBrisaDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',            
        },
        {               
            name: 'portfolio',
            api: false,
            key: 'portfolioDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'vue', 'api'],           
            link: 'https://wndev.vercel.app/',            
        },
        {               
            name: 'quadratic-equation',
            api: false,
            key: 'quadraticEquationDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',            
        },
        {               
            name: 'quick-chat-link',
            api: false,
            key: 'quickChatLinkDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',            
        },
        {               
            name: 'search-repositories',
            api: false,
            key: 'searchRepositoriesDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'api'],
            link: '',            
        },
        {            
            name: 'text-reader',
            api: false,
            key: 'textReaderDescription',
            technologies: ['html', 'css', 'javascript', 'api'],
            link: '',            
        },
        {            
            name: 'todo-list',
            api: false,
            key: 'todoListDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap'],
            link: '',            
        },
        {            
            name: 'virtual-cat',
            api: false,
            key: 'virtualCatDescription',
            technologies: ['html', 'css', 'javascript'],
            link: '',            
        },
        {            
            name: 'magda-emilia-arquitetura',
            api: false,
            key: 'magdaEmiliaArquiteturaDescription',
            technologies: ['html', 'css', 'javascript', 'bootstrap', 'vue'],
            link: 'https://magda-emilia-arquitetura.vercel.app/',            
        },
        {            
            name: 'affari',
            api: false,
            key: 'affariDescription',
            technologies: ['html', 'css', 'javascript', 'typescript', 'vue', 'bootstrap', 'node', 'express'],
            link: 'https://affari.vercel.app',            
        },
        {            
            name: 'time-zone-info-api',
            api: true,
            key: 'timeZoneInfoApiDescription',
            technologies: ['node', 'express'],
            link: 'https://time-zone-info-api.vercel.app/',            
        },
        
        
      ];       
     
      for (let i = 0; i < projects.length; i++) {
        const project = projects[i]; 
                
        if (this.projectName === project.name) { 
            
            keyName = project.key;
            technologies = project.technologies;
            link = project.link === '' ? `https://emerson602.github.io/${this.projectName}/index.html` : project.link;
            projects[i].img = project.api === true ? `/img/pages/api.webp` : `/img/pages/${projects[i].name}.webp`;
            //projects[i].img = `/img/pages/${projects[i].name}.webp`;
            this.projectImg = project.img;
            this.projectLink = link;
            this.projectDescription = this.$t(`projects.${keyName}`);
            this.projectOrder = projects[i].order; 
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
          this.totalProjects = repositories.length;     
          
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

    orderingRepositories(repositories) {
      
      const orderOfProjects = new Map([
        ['affari', 1],
        ['magda-emilia-arquitetura', 2],
        ['portfolio', 3], 
        ['almeida-transportes', 4],
        ['minha-brisa', 5],
        ['search-repositories', 6],
        ['financial-control', 7],
        ['quick-chat-link', 8],
        ['gas-consumption-calculator', 9],
        ['todo-list', 10],
        ['time-zone-info-api', 11],
        ['quadratic-equation', 12],
      ]);

      repositories.forEach(repository => {      
        repository.order = orderOfProjects.get(repository.name) || 1000;                
      });

      let maxProjectsDisplayed = repositories.filter(repository => repository.order != 1000);
      this.maxProjectsDisplayed = maxProjectsDisplayed.length;
     
      repositories.sort((a, b) => a.order - b.order);

    },

    paginationRepositories(repositories) {   

      this.orderingRepositories(repositories);        
      this.newRepositories = repositories.slice(this.firstProject, this.lastProject);               
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
      this.lastProject = 6;
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
      overflow-y: hidden;
      width: 100%;
      height: 350px;  
      border: solid 0.5px rgba(0, 0, 0, 0.37);   
      background-color: #fff;        
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
      text-transform: uppercase;        
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
        background-color: #F2727D;  
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
        background-color: #6662D9 !important;  
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
          height: 210px;                     
        } 

    }

</style>