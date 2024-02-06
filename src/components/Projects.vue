<template>
  <div class="projects-container mb-5" id="projects-container">
    <div class="d-flex flex-column align-items-center">
        <h1>{{ $t('projects.title') }}</h1> 
        <table>         
            <tbody id="repository-table-body">
            </tbody>
        </table> 
        
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
    };
  },
  methods: {
    renderRepositories(repositories) {

     this.paginationRepositories(repositories)         
     
     if (this.content) {
        this.content.innerHTML = '';
        
        this.newRepositories.forEach(({ name, description }, index) => {
          if (![1, 4, 6, 7].includes(index)) {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            const nameProject = document.createElement('span');
            nameProject.textContent = `Name: ${name}`;
            nameCell.appendChild(nameProject);

            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = 'Description: ' + (description || 'N/A');

            const projectLink = document.createElement('a');

            if (index === 8) {               
              projectLink.href = 'https://wndev.vercel.app/';
            } else if(index === 7) {
              projectLink.href = 'https://pokemon-finder-git-main-emerson602s-projects.vercel.app/'
            } else {
              projectLink.href = `https://emerson602.github.io/${name}/index.html`;
            } 

            projectLink.target = '_blank';
            projectLink.textContent = 'Preview in browser';
            projectLink.className = 'btn-project';       

            const projectRepository = document.createElement('a');            
            projectRepository.href = `https://github.com/Emerson602/${name}`
            projectRepository.target = '_blank';
            projectRepository.textContent = 'Project Repository';
            projectRepository.className = 'btn-project-repository';            

            [nameCell, descriptionCell, projectLink, projectRepository].forEach((cell) => {
              row.appendChild(cell);
            });                    
            this.content.appendChild(row);
          }          
        });
          
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
  },

  mounted() {
    this.content = document.querySelector('#repository-table-body'); 
    this.getRepository();     
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
        padding: 200px 0 0 0;  
    }

    h1 {
        font-size: 1.8rem;
        color: #141414;   
        position: relative;
        top: -30px;       
    }

    a{
        text-decoration: none;                    
    }

    tr {
        display: flex;
        flex-direction: column; 
        border-radius: 20px;
        border: solid 1px #F29F05;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        margin: 20px 0;
        padding: 30px 60px;
        width: 650px;
        height: auto;
        font-size: 1rem;   
        background-color: rgba(242, 219, 148, 0.5); 
        background-image: url('../../public/img/bg-desktop.webp');    
        background-size: cover;
        background-repeat: no-repeat;  
        background-position: top;    
    }

    .btn-project, .btn-project-repository {
        background-color: #1b1b1f;
        color: #fff;
        border-radius: 4px;
        padding: 3px 0;
        margin: 30px 0 10px 0; 
        width: 220px; 
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
        tr {
            width: 95vw;
            padding: 30px 30px;
            font-size: 1rem;
        }

        h1 {
        font-size: 1.5rem;
        }

        .btn-project, .btn-project-repository {

            font-size: 0.8rem;
            width: 200px;
        }
    }

    td { 
        margin: 0  0 4px 0;  
        color: #141414;         
    }


</style>



