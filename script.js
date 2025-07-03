function chama_aluno(){
    let aluno = {
        nome: 'stevan marques',
        idade: 15,
        altura: 1.75,
        nota: 1.50

    };
    alert(aluno.nome);
    //alert(aluno.nome);

    document.getElementById('nome_aluno').textContent = 'nome:' + aluno.nome;
    document.getElementById('idade_aluno').textContent = 'idade:' + aluno.idade;
    document.getElementById('altura_aluno').textContent = 'altura:' + aluno.altura;
    document.getElementById('nota_aluno').textContent = 'nota:' + aluno.nota;
}