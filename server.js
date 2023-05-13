const express = require("express")
const app = express()
const cors = require("cors")

// Import BD
const bancodedadoscisam = require("./database/cisamdb")
const Pacientes = require("./models/Paciente")

//utilizando o EXPRESS

app.use(cors())
app.use(express.json())

//Conexao c banco de dados
bancodedadoscisam
    .authenticate()
    .then(() => {
        console.log("Conexão feita!")
    }).catch((error) => {
        console.log(error)
    })


app.get("/", (req, res) => {
    res.send("hi")
})


//API'S

//API PARA CRIAÇÃO DE DADOS
app.post("/createPacientes", (req, res) => {
    const {
        termoLGPD,
        prontuario,
        nome,
        nomeMae,
        nomeSocial,
        cpf,
        rg,
        telefone,
        dataNasc,
        idade,
        sexo,
        email,
        uf,
        cidade,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        especialidade,
        dataMenstruacao,
        perguntaMenstruacao
    } = req.body;

    console.log(req.body);

    Pacientes.create({
        termoLGPD,
        prontuario,
        nome,
        nomeMae,
        nomeSocial,
        cpf,
        rg,
        telefone,
        dataNasc,
        idade,
        sexo,
        email,
        uf,
        cidade,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        especialidade,
        dataMenstruacao,
        perguntaMenstruacao
    })
        .then((sendPacientes) => {
            console.log(sendPacientes.toJSON()); // Linha para limpeza de Dados
            res.status(201).send("Dados enviados");
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send("Erro ao enviar dados: " + error.message);
        });
});
//API PARA LEITURA DE DADOS
app.get('/readPacientes', (req, res) => {
    Pacientes.findAll()
        .then(pacientes => {
            res.json(pacientes);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar pacientes' });
        });
});
//API PARA UPDATE
app.put('/pacientesUpdate/:id', (req, res) => {
    const id = req.params.id;
    const { termoLGPD, prontuario, nome, nomeMae, nomeSocial, cpf, rg, telefone, dataNasc, idade, sexo, email, uf, cidade, cep, logradouro, numero, complemento, bairro, especialidade, dataMenstruacao, perguntaMenstruacao } = req.body;

    Pacientes.update(
        {
            termoLGPD,
            prontuario,
            nome,
            nomeMae,
            nomeSocial,
            cpf,
            rg,
            telefone,
            dataNasc,
            idade,
            sexo,
            email,
            uf,
            cidade,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            especialidade,
            dataMenstruacao,
            perguntaMenstruacao
        },
        { where: { id: id } }
    )
        .then(() => {
            res.status(200).send(`Paciente ${id} atualizada com sucesso!`);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao atualizar Paciente');
        });
});

//API PARA DELETE
app.delete('/pacientesDelete/:id', (req, res) => {
    const id = req.params.id;

    Pacientes.destroy({ where: { id: id } })
        .then(() => {
            res.status(200).send(`Paciente ${id} deletado com sucesso!`);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao deletar Paciente');
        });
});



const port = 4040;



//Porta do servidor
app.listen(4040, () => {
    console.log("Aplicação on-line!");
    console.log(`Rodando na porta: http://localhost:${port}`);

})      