import { userService } from '../services/userService.js';


export const userController = {
    // rotas
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAll();
            return res.json(users);
        } catch (err) {
            console.error('Erro na rota /users:', err.message);
            return res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    },

    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await userService.getById(id);
            return res.json(user);
        } catch (err) {
            console.error("Erro ao buscar usuário", err);
            throw err;
        }
    },

    createUser: async (req, res) => {
        const { nome, email } = req.body;

        try {
            const novoUsuario = {
                nome: nome,
                email: email
            }
            const sendNewUser = await userService.createUser(novoUsuario);
            return res.json("Usuário cadastrado com sucesso", sendNewUser);
        } catch (err) {
            console.error('Erro na rota /cadastro:', err.message);
            return res.status(500).json({ error: 'Erro ao cadastrar usuário' });
        }
    }
};