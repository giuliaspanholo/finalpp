const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'aplicativo'
});

conexao.connect((erro)=>{
    // mensagem de erro de conexao
    if (erro) {
        console.error('Erro de conexão ao banco de dados: ' + erro.stack);
        return;
    }

    console.log('Conexão bem sucedida');

    conexao.query('SELECT * FROM usuarios',(queryErro,results) =>{
        if (queryErro) {
            console.error('Erro na consulta: '+ queryErro);
            return;
        }

        console.log('Registros da tabela: '+ results);
    });
});

conexao.end();