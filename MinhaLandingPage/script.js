function buscarCEP() {
    // FUNÇÃO CHAMADA QUANDO CLICARS O BOTÃO BUSCAR
    const cep = document.getElementById("cep-input").value;
    // pegando o valor digitado no input

    // montando a URL da api do ViaCEP
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    // fazendo a requisião para API
    fetch(url)
    .then(responde => responde.json())
    // Aqui eu preciso converter minha resposta para Json
    .then(data => {
        document.getElementById("lograduro-id").innerText = data.logradouro-id;
        document.getElementById("cidade-id").innerText = data.cidade-id;
        document.getElementById("bairro-id").innerText = data.bairro-id;
        document.getElementById("estado-id").innerText = data.estado-id;
        document.getElementById("cep-id").innerText = data.cep-id;
    })
    .catch(error => {
        console.log("Erro ao buscar CEP:", error); 
    });
}