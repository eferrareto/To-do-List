let text = document.getElementById('texto')
function escrever(){
    document.getElementById('resultado').innerHTML += (`<ul><li>${text.value}.</li></ul>`)
}
function excluir(){
    document.getElementById('resultado').innerHTML = ''
}