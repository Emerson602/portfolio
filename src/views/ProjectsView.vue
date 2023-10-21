<template>
  <div class="projects-container">
    <div>
        <h1>{{ $t('projects.title') }}</h1> 
        <table>         
            <tbody id="repository-table-body">
            </tbody>
        </table>   
    </div>     
  </div>
</template>

<script>

export default {
    
  mounted() {
    const content = document.querySelector('#repository-table-body');
    const username = 'emerson602'; 

function renderRepositories(repositories) {
    content.innerHTML = '';

    repositories.forEach(({ name, description }, index) => {
        if (![1, 3, 6].includes(index)) {
            const row = document.createElement('tr');  
            const nameCell = document.createElement('td');            
            const nameProject = document.createElement('span');  
            nameProject.textContent = name;            
            nameCell.appendChild(nameProject);    
            
            const projectLink = document.createElement('a');
            projectLink.href = `https://emerson602.github.io/${name}/index.html`;
            projectLink.target = '_blank';
            projectLink.textContent = 'Preview in browser';
            projectLink.className = 'btn-project';                                  
            
            const descriptionCell = document.createElement('td');            
            descriptionCell.textContent = 'Description: ' + (description || 'N/A');

            [nameCell, descriptionCell, projectLink].forEach(cell => {
                row.appendChild(cell);
            });      
            content.appendChild(row);
        }
    });
} 


function getRepository() {
    axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            const repositories = response.data;
            renderRepositories(repositories);            
        })
        .catch((error) => {
            console.error(error);
            content.innerHTML = '';
            const errorRow = document.createElement('tr');
            const errorCell = document.createElement('td');
            errorCell.setAttribute('colspan', '1');
            errorCell.textContent = 'Erro ao acessar a API do GitHub.';
            errorRow.appendChild(errorCell);
            content.appendChild(errorRow);
        });
}

getRepository()    
  },
};
</script>

<style>

    .projects-container {        
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;     
        margin: 0;
        padding: 200px 0 0 0;  
    }

    .projects-container div {         
        margin: 0px 0 100px 0;
    }  

    h1 {
        font-size: 1.8rem;
        color: #141414;       
    }

    a{
        text-decoration: none;                    
    }

    tr {
        display: flex;
        flex-direction: column;        
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
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

    .btn-project {
        background-color: #141414;
        color: #fff;
        border-radius: 4px;
        padding: 5px 0;
        margin: 30px 0 10px 0; 
        width: 220px; 
        position: relative;
        top: 25px;
        left: 50%;
        transform: translate(-50%, -50%);     
        text-align: center; 
        font-size: 1rem;
    }

    .btn-project:hover {
        background-color: #F29F05; 
        transition: 2s;    
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

        .btn-project {

            font-size: 0.8rem;
            width: 200px;
        }
    }

    td { 
        margin: 0  0 4px 0;  
        color: #141414;         
    }


</style>



