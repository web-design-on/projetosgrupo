const cidadesPorEstado = {
    SP: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André", "São José dos Campos", "Ribeirão Preto", "Osasco"],
    RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "Volta Redonda"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Uberaba", "Ribeirão Preto (MG)"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Ilhéus", "Porto Seguro"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Novo Hamburgo", "Rio Grande"],
    PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "Foz do Iguaçu", "São José dos Pinhais", "Colombo"],
    PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", "Cabo de Santo Agostinho", "Garanhuns"],
    CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Sobral", "Maracanaú", "Crato", "Eusébio", "Itapipoca"],
    SC: ["Florianópolis", "Joinville", "Blumenau", "São José (SC)", "Chapecó", "Itajaí", "Criciúma", "Lages"],
    GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Luziânia", "Rio Verde", "Formosa", "Catalão", "Trindade"],
    DF: ["Brasília", "Taguatinga", "Ceilândia", "Samambaia", "Planaltina", "Gama", "Águas Claras", "Sobradinho"]
};

const bairrosPorCidade = {
    "São Paulo": ["Jardins", "Pinheiros", "Moema", "Bela Vista", "Vila Mariana", "Perdizes"],
    "Guarulhos": ["Centro", "Jardim Presidente Dutra", "Vila Galvão", "Cocaia", "Picanço", "Jardim Cumbica"],
    "Campinas": ["Cambuí", "Taquaral", "Barão Geraldo", "Nova Campinas", "Jardim Chapadão", "Sousas"],
    "São Bernardo do Campo": ["Centro", "Rudge Ramos", "Nova Petrópolis", "Vila Lusitânia", "Jardim do Mar", "Baeta Neves"],
    "Santo André": ["Centro", "Vila Assunção", "Jardim", "Parque das Nações", "Utinga", "Campestre"],
    "São José dos Campos": ["Centro", "Jardim Aquarius", "Vila Adyana", "Parque Industrial", "Urbanova", "Vila Ema"],
    "Ribeirão Preto": ["Jardim Sumaré", "Jardim Paulista", "Campos Elíseos", "Jardim América", "Vila Seixas", "Alto da Boa Vista"],
    "Osasco": ["Centro", "Vila Yara", "Quitaúna", "Jardim das Flores", "Bela Vista", "José Liberato"],

    "Rio de Janeiro": ["Copacabana", "Ipanema", "Barra da Tijuca", "Botafogo", "Flamengo", "Tijuca"],
    "São Gonçalo": ["Neves", "Zé Garoto", "Alcântara", "Jardim Catarina", "Santa Luzia", "Monjolos"],
    "Duque de Caxias": ["Centro", "Campos Elíseos", "Vila Rosali", "Jardim Primavera", "Parque Fluminense", "25 de Agosto"],
    "Nova Iguaçu": ["Centro", "Comendador Soares", "Miguel Couto", "Austin", "Caonze", "Olinda"],
    "Niterói": ["Icaraí", "São Francisco", "Santa Rosa", "Fonseca", "Centro", "Ingá"],
    "Belford Roxo": ["Centro", "Vilar dos Teles", "Parque São José", "Belford Roxo", "Barro Vermelho", "Areia Branca"],
    "Campos dos Goytacazes": ["Centro", "Parque Guarus", "Jardim Carioca", "Parque Santa Clara", "Pelinca", "Santa Maria"],
    "Volta Redonda": ["Vila Santa Cecília", "Aterrado", "São Luiz", "Jardim Amália", "Retiro", "Belmonte"],

    "Belo Horizonte": ["Savassi", "Pampulha", "Centro", "Funcionários", "Lagoinha", "Cidade Nova"],
    "Uberlândia": ["Santa Mônica", "Centro", "Granja Marileusa", "Tibery", "Brasil", "Jardim Karaíba"],
    "Contagem": ["Eldorado", "Inconfidentes", "Industrial", "Cabral", "Vila Santa Luzia", "Ressaca"],
    "Juiz de Fora": ["Centro", "São Mateus", "Granbery", "Nova Era", "Santa Catarina", "Boa Vista"],
    "Betim": ["Centro", "Alvorada", "Indústria", "Vila Verde", "Vila Pitangui", "Icaivera"],
    "Montes Claros": ["Centro", "Alto da Boa Vista", "Santo Amaro", "Santa Terezinha", "Vila Nunes", "Cidade Nova"],
    "Uberaba": ["Centro", "Vila Santa Maria", "Morumbi", "Boa Vista", "Ana Rita", "São Benedito"],
    "Ribeirão Preto (MG)": ["Jardim Sumaré", "Jardim Paulista", "Campos Elíseos", "Jardim América", "Vila Seixas", "Alto da Boa Vista"],

    "Salvador": ["Barra", "Ondina", "Pituba", "Rio Vermelho", "Brotas", "Cabula"],
    "Feira de Santana": ["Centro", "Caseb", "Kalilândia", "Tomba", "George Américo", "Santo Antônio dos Prazeres"],
    "Vitória da Conquista": ["Centro", "Recreio", "Bairro Brasil", "Ibirapuera", "Candeias", "Urbis VI"],
    "Camaçari": ["Centro", "Jardim Limoeiro", "Phoc II", "Verdes Horizontes", "Guarajuba", "Abrantes"],
    "Itabuna": ["Centro", "Santos Dumont", "Banco Raso", "Nova Itabuna", "São Caetano", "Zildolândia"],
    "Juazeiro": ["Centro", "Novo Encontro", "Jardim Vitória", "Tancredo Neves", "Alto do Alencar", "Residencial Praia do Rodeadouro"],
    "Ilhéus": ["Centro", "Pontal", "Olivença", "Bairro da Conquista", "São Francisco", "Cidade Nova"],
    "Porto Seguro": ["Centro", "Taperapuan", "Baianão", "Arraial D’Ajuda", "Orla Norte", "Trancoso"],

    "Porto Alegre": ["Moinhos de Vento", "Cidade Baixa", "Centro Histórico", "Petrópolis", "Bom Fim", "Cristo Redentor"],
    "Caxias do Sul": ["Centro", "São Pelegrino", "Pio X", "Cruzeiro", "Panazzolo", "Santa Catarina"],
    "Pelotas": ["Centro", "Três Vendas", "Fragata", "Laranjal", "Areal", "Capão do Leão"],
    "Canoas": ["Centro", "Niterói", "Estância Velha", "Guajuviras", "Marechal Rondon", "Harmonia"],
    "Santa Maria": ["Centro", "Nossa Senhora Medianeira", "Nossa Senhora de Fátima", "Bonfim", "Patronato", "Camobi"],
    "Gravataí": ["Centro", "Parque dos Eucaliptos", "Santa Cruz", "Salgado Filho", "Morada do Vale", "Natal"],
    "Novo Hamburgo": ["Centro", "Rondônia", "Guarani", "Canudos", "Hamburgo Velho", "Boa Vista"],
    "Rio Grande": ["Centro", "Cassino", "Santa Rita", "Vila São Miguel", "Getúlio Vargas", "Cidade Nova"],

    "Curitiba": ["Batel", "Centro", "Cabral", "Ahú", "Juventude", "Santa Felicidade"],
    "Londrina": ["Centro", "Vila Nova", "Gleba Palhano", "Parque Guaiapó", "Cecap", "Jardim Guanabara"],
    "Maringá": ["Zona 1", "Zona 3", "Zona 7", "Zona 21", "Jardim Alvorada", "Parque das Grevíleas"],
    "Ponta Grossa": ["Centro", "Uvaranas", "Estrela", "Cará-Cará", "Oficinas", "Nova Rússia"],
    "Cascavel": ["Centro", "Jardim Paraná", "Cidade Alta", "Santa Felicidade", "Cascavel Velho", "Universitário"],
    "Foz do Iguaçu": ["Centro", "Três Lagoas", "Jardim Panorama", "Vila A", "Vila São Paulo", "Porto Meira"],
    "São José dos Pinhais": ["Centro", "Afonso Pena", "Borda do Campo", "Guatupê", "Cidade Jardim", "São Marcos"],
    "Colombo": ["Centro", "Atuba", "Vila Regina", "Guaraituba", "São Gabriel", "Tamarana"],

    "Recife": ["Boa Viagem", "Casa Forte", "Pina", "Espinheiro", "Madureira", "Centro"],
    "Jaboatão dos Guararapes": ["Candeias", "Piedade", "Prazeres", "Barra de Jangada", "Centro", "Porto de Galinhas"],
    "Olinda": ["Bairro Novo", "Peixinhos", "Rio Doce", "Água Fria", "Casa Caiada", "Mangue Seco"],
    "Caruaru": ["Boa Vista", "Maurício de Nassau", "Vila Kennedy", "Centro", "Cidade Jardim", "Santa Rosa"],
    "Petrolina": ["Centro", "Gercino Coelho", "Areia Branca", "José e Maria", "Cosme e Damião", "Vila Eduardo"],
    "Paulista": ["Centro", "Maranguape I", "Maranguape II", "Janga", "Jardim Paulista", "Paratibe"],
    "Cabo de Santo Agostinho": ["Centro", "Pau Amarelo", "Gaibu", "Cabuçu", "Coqueiral", "Beberibe"],
    "Garanhuns": ["Centro", "Heliópolis", "Indiano", "Cohab II", "Alto do Moura", "Cavalete"],

    "Fortaleza": ["Meireles", "Aldeota", "Centro", "Praia de Iracema", "Fátima", "Montese"],
    "Caucaia": ["Centro", "Jurema", "Parangaba", "Maranguapinho", "Icaraí", "Melvi"],
    "Juazeiro do Norte": ["Centro", "Triângulo", "Francisco Pereira", "Lagoa Seca", "Nova Juazeiro", "Santa Tereza"],
    "Sobral": ["Centro", "Alto da Brasília", "Sede", "Jardim das Oliveiras", "Cohab II", "Junco"],
    "Maracanaú": ["Centro", "Guararu", "Vila do Mar", "Tucunduba", "Jardim Cearense", "Pajuçara"],
    "Crato": ["Centro", "Ponte", "Santa Fé", "Batateiras", "Muriti", "Muriti II"],
    "Eusébio": ["Centro", "Maracanaú", "Fazendinha", "Catuana", "Porangabuçu", "Itapeva"],
    "Itapipoca": ["Centro", "Coité", "Vila União", "Ladeira do Fio", "Cachoeira", "Ponte"],

    "Florianópolis": ["Centro", "Ingleses", "Canasvieiras", "Trindade", "Campeche", "Santo Antônio de Lisboa"],
    "Joinville": ["Centro", "Glória", "Bucarein", "Costa e Silva", "Atiradores", "Boehmerwald"],
    "Blumenau": ["Velha", "Itoupava Central", "Itoupava Norte", "Progresso", "Vorstadt", "Garcia"],
    "São José (SC)": ["Centro", "Barreiros", "Forquilhinhas", "Kobrasol", "Pinheirinho", "Campinas"],
    "Chapecó": ["Centro", "Efapi", "Passo dos Fortes", "Jardim América", "São Cristóvão", "Santo Antônio"],
    "Itajaí": ["Centro", "Cabeçudas", "Espinheiros", "Cordeiros", "Meia Praia", "Ilha da Figueira"],
    "Criciúma": ["Centro", "Primeira Linha", "Serraria", "Santa Bárbara", "Linha Santa Cruz", "Bela Vista"],
    "Lages": ["Centro", "Guarujá", "Tribess", "Conta Dinheiro", "São Francisco", "Benedito Novo"],

    "Goiânia": ["Setor Bueno", "Jardim América", "Setor Oeste", "Setor Central", "Setor Pedro Ludovico", "Parque Amazônia"],
    "Aparecida de Goiânia": ["Jardim Luz", "Cidade Vera Cruz", "Vila Brasília", "Parque das Laranjeiras", "Setor Coimbra", "Jardim Olímpico"],
    "Anápolis": ["Centro", "Jardim Anhangüera", "Jardim das Oliveiras", "Setor Central", "Jardim Presidente", "Parque das Laranjeiras"],
    "Luziânia": ["Centro", "Parque das Palmeiras", "Vila Nova", "Jardim Roriz", "Cidade Jardim", "Vila Canaã"],
    "Rio Verde": ["Centro", "Jardim América", "Residencial São Jorge", "Vila Bela", "Jardim Goiânia", "Parque da Fama"],
    "Formosa": ["Centro", "Vila São José", "Jardim Paraíso", "São José", "Conjunto Nova Formosa", "Jardim Primavera"],
    "Catalão": ["Centro", "Santa Cruz", "Jardim Primavera", "Pontal Norte", "Jardim Paraíso", "Residencial Roma"],
    "Trindade": ["Centro", "Jardim Céu Azul", "Vila Santos Dumont", "Jardim Florença", "Residencial Amazonas", "Parque Santa Rita"],

    "Brasília": ["Asa Sul", "Asa Norte", "Lago Sul", "Lago Norte", "Sudoeste", "Noroeste"],
    "Taguatinga": ["Centro", "Setor O", "Jardim", "Águas Claras", "Recanto das Emas", "Samambaia"],
    "Ceilândia": ["Centro", "Guariroba", "Pôr do Sol", "Jardim", "Taguatinga Sul", "QNO"],
    "Samambaia": ["Centro", "Setor Oeste", "Residencial 2000", "Setor P Sul", "Jardim", "QNP"],
    "Planaltina": ["Centro", "Pôr do Sol", "São Sebastião", "Vila São José", "Jardim Roriz", "Residencial Solar de Brasília"],
    "Gama": ["Centro", "Setor Oeste", "Jardim", "Riacho Fundo", "Santa Maria", "Recanto"],
    "Águas Claras": ["Centro", "Arniqueira", "Areias", "Taguatinga Sul", "Vila Sul", "Jardim"],
    "Sobradinho": ["Centro", "Setor de Mansões", "Sobradinho II", "Vila São José", "Parque Estrela Dalva", "Jardim"]
};
const estadoSelect = document.getElementById("estado");
const cidadeSelect = document.getElementById("cidade");
const bairroSelect = document.getElementById("bairro");
const instrutorSelect = document.getElementById("instrutor");
const generoSelect = document.getElementById("genero");
const btnLimpar = document.getElementById("btnLimpar");

// Função para limpar e desabilitar select
function resetSelect(select, placeholder) {
    select.innerHTML = `<option value="" selected>${placeholder}</option>`;
    select.disabled = true;
}

// Popula select com array de opções
function populaSelect(select, array) {
    resetSelect(select, "Escolha");
    array.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
    select.disabled = false;
}

// Quando muda o estado
estadoSelect.addEventListener("change", () => {
    const estado = estadoSelect.value;
    if (estado && cidadesPorEstado[estado]) {
        populaSelect(cidadeSelect, cidadesPorEstado[estado]);
    } else {
        resetSelect(cidadeSelect, "Escolha a cidade");
    }
    resetSelect(bairroSelect, "Escolha o bairro");
});

// Quando muda a cidade
cidadeSelect.addEventListener("change", () => {
    const cidade = cidadeSelect.value;
    if (cidade && bairrosPorCidade[cidade]) {
        populaSelect(bairroSelect, bairrosPorCidade[cidade]);
    } else {
        resetSelect(bairroSelect, "Escolha o bairro");
    }
});

// Botão limpar - reseta tudo
btnLimpar.addEventListener("click", () => {
    estadoSelect.value = "";
    resetSelect(cidadeSelect, "Escolha a cidade");
    resetSelect(bairroSelect, "Escolha o bairro");
    cidadeSelect.disabled = true;
    bairroSelect.disabled = true;

    // Limpa também os outros filtros
    instrutorSelect.value = "";
    generoSelect.value = "";
});