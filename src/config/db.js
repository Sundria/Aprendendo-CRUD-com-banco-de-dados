import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT),
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

let pool;

export async function connect() {
    try {
        pool = await sql.connect(config);
        console.log('Conectado ao banco de dados ✅');
        return pool;
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados ❌', err);
        throw err;
    }
}

