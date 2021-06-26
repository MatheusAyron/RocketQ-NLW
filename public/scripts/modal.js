// CODIGO PARA APARECER O prompt QUANDO CLICADO EM "MARCAR COMO LIDO"

export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        // funcionalidade de atribuir a classe active(o prompt de excluir ou cancelar) para o modal
        // seleciona a class modal-wrapper e adiciona a nova class active
        modalWrapper.classList.add("active")
    }
    function close(){
        modalWrapper.classList.remove("active")

    }

    return{
        open,
        close
    }
}