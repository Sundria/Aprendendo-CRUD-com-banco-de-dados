import { connect } from "../../config/db.js";

const conexao = await connect();

export const userService = {
    async getAll() {
        try {
            const data = await conexao.query('SELECT * FROM alunos');
            return data.recordset;
        } catch (error) {
            console.error("Erro ao buscar usuários", error);
            throw error;
        }
    },
    async getById(id) {
        try {
            const data = await conexao.query(`SELECT * FROM alunos WHERE id = ${id}`);
            return data.recordset;
        } catch (err) {

        }
    },
    async createUser(newUser) {
        const data = await conexao.query(`INSERT INTO alunos (nome, email) VALUES ('${newUser.nome}', '${newUser.email}')`);
        return data.recordset;
    }
};
