const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true

        while (isRoom) {
            // Gera o numero da sala
            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : 
                roomId += Math.floor(Math.random() * 10).toString()
            }

            // Verificar se esse numero ja existi
            const roomsExistsIds =  await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistsIds.some(roomsExistsIds => roomsExistsIds === roomId)  // o roomsExistsIds vai fazer um select verificando se existi algum id igual na tabela que seja igual ao roomId

            if(!isRoom){
                // Inseri a sala no banco
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }
        }


        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions

        if(questions.length ==0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }

        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead, isNoQuestions: isNoQuestions})    // para aparecer o mesmo numero da URL no codigo da sala
    },

    enter(req, res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }
}