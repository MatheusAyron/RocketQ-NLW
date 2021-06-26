// Aqui fica todos as funcionlidades da tela, comandinhos
// resto do codigo como aparecer prompt QUANDO CLICADO EM "MARCAR COMO LIDO"

import Modal from './modal.js'

const modal = Modal()

// Mapeamento
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


// Para o Marcar como lido
    // pegar todos os botoes que possuem a class check
    const checkButtons = document.querySelectorAll(".actions a.check")

    checkButtons.forEach(button => {
        // vai ler cada botão e adicionar uma escuta
        // quando ele ler as informações guardadas nos botões, ele vai pegalas e armazena-las na variavel "button" e depois adicionar o  "everyListener" nele
        // o "button" abaixo pode ser qualquer nome
        button.addEventListener("click", handleClick)

        // ou 
        // button.addEventListener("click", event =>{
        //     modalTitle.innerHTML = "Marcar como lida"

        //     modal.open()
        // })
    })

    // resumo ^ : ele vai pegar todos os marcar como lido (class : check) no nosso html, 
    // quando um marcar como lido for clicado o everyListener vai escutar, e quando ele for clicado ele vai rodar o modal.open
    // que por sua vez vai abrir o arquivo modal.js e vai executar oq esta a dentro

// Para o Marcar como lido

// Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))

    // ou 
    // button.addEventListener("click", event =>{
    //     modal.innerHTML = "Excluir essa pergunta"
    //     modal.open()
    // })
})

function handleClick(event, check = true){         // ele leva o event (evento) de clicar, entrar e os atributos contidos 
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"

    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)   // URL

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")   // se o check for true remove a class red, se for false coloca a class red 


    // muda o titulo no HTML se o check for true coloca "Marcar como lido" (checkButtons), se não coloca "Excluir essa pergunta" (deleteButton)
    // abrir modal
    modal.open()
}




