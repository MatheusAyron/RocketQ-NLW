const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()
        // o database começa a ler, entra dentro do config, no config que vai rodar o open, que vai definir o filename
        // que vai dar um driver, que o driver va la no modulo sqlite3 chamar o Database, depois ele vai retornar tudo isso e gravar na variavel db
        // o await manda o Database esperar uma consulta terminar para começar outra

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`)

        await db.close()
    }
}

initDb.init();

