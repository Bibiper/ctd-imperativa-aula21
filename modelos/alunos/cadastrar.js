// Importação do módulo File System do Nodejs.
const fs = require('fs');
// Importação do módulo path.
const path = require('path');
const raizDoProjeto = path.resolve('./');
// Carregar o arquivo do nosso banco de dados.
const arquivoEmJSON = fs.readFileSync(raizDoProjeto + '/banco-de-dados-alunos.json', 'utf-8');
// Converte o arquivo de texto para objeto literal para poder manipulá-lo.
const arquivoConvertidoEmObjetoLiteral = JSON.parse(arquivoEmJSON);


function CadastrarAluno(nomeDoAluno, sobrenomeDoAluno) {

    /* 
        Criação de variáveis públicas ou privadas ficam no topo da função.
        No caso esses atributos são privados e só podem ser acessados através 
        da funções públicas de get e set.    
    */
    var nome = nomeDoAluno;
    var sobrenome = sobrenomeDoAluno;

    function salvarNoBancoDeDados() {
        // Caso os valores nome e sobrenome não estejam vazios e sejam uma string.
        if(validarSeOValorEhUmaString()) {
            /* 
                Adiciono o objeto com o nome e sobrenome da Array.
                Omiti o valor, pois o valor tem o mesmo nome da chave. O código a baixo acaba sendo a mesma coisa que:

                arquivoConvertidoEmObjetoLiteral.push({
                    nome: nome,
                    sobrenome: sobrenome
                });
            */
            arquivoConvertidoEmObjetoLiteral.push({
                nome,
                sobrenome
            });
            // Converto o resultado em string.
            const arquivoConvertidoEmString = JSON.stringify(arquivoConvertidoEmObjetoLiteral);
            // Sobrescreve o arquivo banco-de-dados.json com o arquivo atualizado.
            fs.writeFileSync(raizDoProjeto + '/banco-de-dados-alunos.json', arquivoConvertidoEmString);
        } 
        else {
            return 'Não é um nome válido.';
        }
    }

    function validarSeOValorEhUmaString() {
        var naoEstaVazio = (nome && sobrenome);
        var ehUmaString = (typeof(nome) == 'string' && typeof(sobrenome) == 'string');
                
        return (naoEstaVazio && ehUmaString);
    }

    // Executo ela dentro do objeto para salvar no banco de dados o novo professor.
    salvarNoBancoDeDados();

}

module.exports = CadastrarAluno;