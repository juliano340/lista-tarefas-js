let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');
let tarefas = [];

function adicionarTarefas() {

    if (inputElement.value === '' || inputElement === null) {
    
        alert('Digite uma tarefa');
    
        return false
    
    } else {
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        inputElement.value = '';
        renderTarefas();
    }
}

buttonElement.onclick = adicionarTarefas;

function renderTarefas() {
    listElement.innerHTML = '';
    tarefas.map((todo)=>{
        
        let liElement = document.createElement('li');
        let tarefaText = document.createTextNode(todo);
        let linkElement =document.createElement('a');
        
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);


        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);


        liElement.appendChild(tarefaText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);


    })
}

function deletarTarefa(posicao) {
    tarefas.splice(posicao,1);
    renderTarefas();
}