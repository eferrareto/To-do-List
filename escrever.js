let text = document.getElementById('texto')
function escrever(){
    let lista = document.getElementsByTagName('ul')[0];
    let l = document.createElement('li');
    
    lista.appendChild(l);
    let checagem = document.createElement('input');
    checagem.type = 'checkbox'
    l.appendChild(checagem);
    l.innerHTML += `${text.value}`
    
}
function excluir(){
    document.reload
    document.getElementById('resultado').innerHTML = ''
}
