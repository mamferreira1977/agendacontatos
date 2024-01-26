// Array para armazenar os contatos
var agenda = [];

// Função para adicionar um novo contato à agenda
function adicionarContato() {
    // Obter valores do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    // Verificar se ambos os campos foram preenchidos
    if (nome && telefone) {
        // Criar um objeto de contato
        var contato = {
            nome: nome,
            telefone: telefone
        };

        // Adicionar o contato à agenda
        agenda.push(contato);

        // Limpar os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';

        // Atualizar a tabela de contatos
        atualizarTabela();
        
    } else {
        alert('Por favor, preencha ambos os campos.');
    }
}

// Função para atualizar a tabela de contatos
function atualizarTabela() {
    var table = document.getElementById('contatosTable');
    // Limpar a tabela
    table.innerHTML = '<tr><th>Nome</th><th>Telefone</th></tr>';

    // Adicionar cada contato à tabela
    for (var i = 0; i < agenda.length; i++) {
        var row = table.insertRow(table.rows.length);
        var a = row.insertCell(0);
        var b = row.insertCell(1);

        a.innerHTML = agenda[i].nome;
        b.innerHTML = agenda[i].telefone;
    }
}
