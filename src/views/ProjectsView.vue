<template>
  <div class="main-container">
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
        if (![1, 3, 5].includes(index)) {
            const row = document.createElement('tr');  
            const nameCell = document.createElement('td');
            const nameLink = document.createElement('a');
            nameLink.href = `https://emerson602.github.io/${name}/index.html`;
            nameLink.target = '_blank';
            nameLink.textContent = name;
            nameCell.appendChild(nameLink);            
            
            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = 'Descrição: ' + (description || 'N/A');

            [nameCell, descriptionCell].forEach(cell => {
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

    .main-container {

        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;       
        background-image: url(../../public/img/bg-projects-desktop.webp);
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0;
    }

    .main-container div {
        
        margin: 200px 0 100px 0;
    }

    @media(max-width: 950px) {
        .main-container {
            background-image: url(../../public/img/bg-projects-mobile.webp); 
        }
    }

    a{
        text-decoration: none;
    }

    tr {
        display: flex;
        flex-direction: column;
        background-color: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 20px;
        border: solid 1px rgba(255, 255, 255, 0.18);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        margin: 20px 0;
        padding: 30px 60px;
        width: 650px;
        height: auto;
    }

    @media (max-width: 700px) {
        tr {
            width: 95vw;
        }
    }
</style>



