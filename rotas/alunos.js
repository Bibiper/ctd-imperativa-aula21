// Importação do Express.
const express = require('express');
// Inicialização do módulo de Rotas do Express.
const rotas = express.Router();
// Importação de todos os Controles.
const { cadastrarAluno, retornarListaDeAlunosEmJSON, exibirPaginaDeCadastroListaDeAlunos } = require('../controles/alunos');

// Criação de todas as Rotas dos Professores
rotas.get('/', exibirPaginaDeCadastroListaDeAlunos);
rotas.get('/listar', retornarListaDeAlunosEmJSON);
rotas.post('/cadastrar', cadastrarAluno);

// Exportação de todas as Rotas dos Professores.
module.exports = rotas;