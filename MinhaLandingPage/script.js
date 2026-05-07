// ESSE CÓDIGO VAR SERVIR PARA 
// PEGAR O CEP DIGITADO
// ENVIAR O CEP PARA API DO VIACEP
// RECEBER AS INFORMAÇÕES 
// MOSTRAR NA TELA 

function buscarCEP() { //CRIANDO A FUNÇÃO COM O NOME buscarCEP
    // FUNÇÃO CHAMADA QUANDO CLICARS O BOTÃO BUSCAR
    const cep = document.getElementById("cep-input").value; // pegue o que o usuario digitol no input e coloque dentro da variável cep
    // pegando o valor digitado no input( caixa onde digita o cep)
    // const é para criar uma variável chamada cep, aqui eu uso para guardar informação 
    // document representa toda a pagina HTML
    // getElementById(cep-input) "procura um elemento que tenha esse id"
    // value pega ovalor digitadodentro do input

    // montando a URL da api do ViaCEP
    const url = `https://viacep.com.br/ws/${cep}/json/`; // esse ${cep} coloca o valor que o usuário deu enter no lugar do cep
    
    // fazendo a requisião para API
    fetch(url) // aquio fetch busca na API as informações do cep digitado
    .then(response => response.json()) // aquisignifica, quando terminar faça o que está entre parentese
    // response é a resposta da API, mas ela vem bruta
    // o .json transforma a resposta em um bjeto javascript
    // objeto é uma estrutura que guarda informações organizadas,como:
    // nome: "Leonardo"
    // idade: "20"
    // cidade: "Limeira"

    // Aqui eu preciso converter minha resposta para Json
    .then(data => {//aqui eu coloco todo esse objeto dentro da variável data
        document.getElementById("logradouro-id").innerText = data.logradouro;
        //.innerText ele serve pasra mudar o que está escrito no HTML
        //apartir desse código o que vaimostrar em logradouro será a response que a API deu no "logradouro"
        document.getElementById("localidade-id").innerText = data.localidade;
        document.getElementById("bairro-id").innerText = data.bairro;
        document.getElementById("uf-id").innerText = data.uf;
        document.getElementById("cep-id").innerText = data.cep;
    })
    .catch(error => {// se algo der errado o catch executa 
        console.log("Erro ao buscar CEP:", error); 
        // console é onde aparecem mensagens, erros, testes, informações 
        // .log significa registrar, mostrar, escrever 
        // isso sigtnifica "mostre isso no console"
    });
}