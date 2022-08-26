let input1 = document.getElementById('input1');
let button1 = document.getElementById('button1');
let main = document.getElementById('mainp');
let body = document.getElementById('body');
let contador = 0


function addTarefa() {
       let valorInput = input1.value;

    if((valorInput !=="") && (valorInput !==null) && (valorInput !== undefined)){
        ++contador;

        let novoItem = 
        `<main id="main1">
        <div class="itens" id="${contador}">
            <div onclick="marcar(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline" style="cursor: pointer;"></i>
            </div>
            <div class="item-nome" onclick="marcar(${contador})" style="cursor: pointer;">${valorInput}</div>
            <div class="item-botao"> <button onclick="deletar(${contador})" class="delete"> <i class="mdi mdi-delete" style="cursor: pointer;"></i> </button> </div>
        </div>
        </main>`; 
            main.innerHTML += novoItem;
            input1.value = "";
            input1.focus();

    }
   
}
let valorInput = input1.value;

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcar(id) {
    var itens = document.getElementById(id);
    var classe = itens.getAttribute('class');
    console.log(classe);

    if(classe == 'itens') {
        itens.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

    }else{
        itens.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.add('mdi-circle-outline');
        icone.classList.remove('mdi-check-circle');
    }
}
input1.addEventListener("keyup", function (event){
    if (event.keyCode === 13){
        event.preventDefault();
        button1.click();
    }
})
