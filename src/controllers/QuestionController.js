module.exports = {
    index(req, res){
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password  // não esquecer do miduer no server.
// isso aqui retorna as informções que você colocou a senha na modal, o id da sala, o id da pergunta e a senha. 
// console.log no prompt

        console.log(`romm = ${roomId}, questionId = ${questionId}
        action = ${action}, password = ${password}`)
    }
}