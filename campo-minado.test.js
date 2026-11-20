let totalTestes = 0;
let testesPassaram = 0;
let testesFalharam = 0;

function executarTeste(nome, resultadoEsperado, resultadoObtido) {
    totalTestes++;

    if (resultadoEsperado === resultadoObtido) {
        testesPassaram++;
        console.log(`✅ PASSOU: ${nome}`);
    } else {
        testesFalharam++;
        console.log(`❌ FALHOU: ${nome}`);
        console.log(`Esperado: ${resultadoEsperado}`);
        console.log(`Obtido: ${resultadoObtido}`);
    }
}

function exibirResumo() {
    console.log("\n========== RESUMO DOS TESTES ==========");
    console.log(`Total: ${totalTestes}`);
    console.log(`Aprovados: ${testesPassaram}`);
    console.log(`Reprovados: ${testesFalharam}`);
}

const CM01 = {
    nome: "Tabuleiro com 18 linhas e 14 colunas",
    linhas: 18,
    colunas: 14,
    esperado: true
};

const CM02 = {
    nome: "Tabuleiro com exatamente 40 bombas",
    quantidadeBombas: 40,
    esperado: true
};

const CM03 = {
    nome: "Tabuleiro com menos de 18 linhas",
    linhas: 17,
    colunas: 14,
    esperado: false
};

const CM04 = {
    nome: "Tabuleiro com mais de 18 linhas",
    linhas: 19,
    colunas: 14,
    esperado: false
};

const CM05 = {
    nome: "Tabuleiro com menos de 14 colunas",
    linhas: 18,
    colunas: 13,
    esperado: false
};

const CM06 = {
    nome: "Tabuleiro com mais de 14 colunas",
    linhas: 18,
    colunas: 15,
    esperado: false
};

const CM07 = {
    nome: "Tabuleiro com menos de 40 bombas",
    quantidadeBombas: 39,
    esperado: false
};

const CM08 = {
    nome: "Tabuleiro com mais de 40 bombas",
    quantidadeBombas: 41,
    esperado: false
};

const CM09 = {
    nome: "Tabuleiro sem bombas",
    quantidadeBombas: 0,
    esperado: false
};

const CM10 = {
    nome: "Tabuleiro com bombas em todas as posições",
    quantidadeBombas: 252,
    esperado: false
};

const CM11 = {
    nome: "Rejeitar bombas posicionadas na mesma coordenada",
    bombas: [
        { linha: 2, coluna: 3 },
        { linha: 2, coluna: 3 }
    ],
    esperado: false
};

const CM12 = {
    nome: "Bomba na primeira posição do tabuleiro",
    bomba: { linha: 0, coluna: 0 },
    esperado: true
};

const CM13 = {
    nome: "Bomba na última posição do tabuleiro",
    bomba: { linha: 17, coluna: 13 },
    esperado: true
};

const CM14 = {
    nome: "Bomba com linha fora dos limites",
    bomba: { linha: 18, coluna: 5 },
    esperado: false
};

const CM15 = {
    nome: "Bomba com coluna fora dos limites",
    bomba: { linha: 5, coluna: 14 },
    esperado: false
};

const CM16 = {
    nome: "Bomba com coordenadas negativas",
    bomba: { linha: -1, coluna: -1 },
    esperado: false
};

const CM17 = {
    nome: "Célula com uma bomba vizinha",
    celula: { linha: 5, coluna: 5 },
    bombas: [
        { linha: 5, coluna: 6 }
    ],
    esperado: 1
};

const CM18 = {
    nome: "Célula com duas bombas vizinhas",
    celula: { linha: 5, coluna: 5 },
    bombas: [
        { linha: 4, coluna: 4 },
        { linha: 4, coluna: 5 }
    ],
    esperado: 2
};

const CM19 = {
    nome: "Célula cercada por oito bombas",
    celula: { linha: 5, coluna: 5 },
    bombas: [
        { linha: 4, coluna: 4 },
        { linha: 4, coluna: 5 },
        { linha: 4, coluna: 6 },
        { linha: 5, coluna: 4 },
        { linha: 5, coluna: 6 },
        { linha: 6, coluna: 4 },
        { linha: 6, coluna: 5 },
        { linha: 6, coluna: 6 }
    ],
    esperado: 8
};

const CM20 = {
    nome: "Contagem de bombas vizinhas no canto",
    celula: { linha: 0, coluna: 0 },
    bombas: [
        { linha: 0, coluna: 1 },
        { linha: 1, coluna: 0 },
        { linha: 1, coluna: 1 }
    ],
    esperado: 3
};

const CM21 = {
    nome: "Contagem de bombas vizinhas na borda",
    celula: { linha: 0, coluna: 5 },
    bombas: [
        { linha: 0, coluna: 4 },
        { linha: 0, coluna: 6 },
        { linha: 1, coluna: 4 },
        { linha: 1, coluna: 5 },
        { linha: 1, coluna: 6 }
    ],
    esperado: 5
};

const CM22 = {
    nome: "Célula sem nenhuma bomba vizinha",
    celula: { linha: 5, coluna: 5 },
    bombas: [],
    esperado: 0
};

const CM23 = {
    nome: "Identificar bomba na própria célula",
    celula: { linha: 5, coluna: 5 },
    bombas: [
        { linha: 5, coluna: 5 }
    ],
    esperado: true
};

const CM24 = {
    nome: "Contagem de bomba localizada na diagonal",
    celula: { linha: 5, coluna: 5 },
    bombas: [
        { linha: 4, coluna: 4 }
    ],
    esperado: 1
};

const CM25 = {
    nome: "Bomba distante não deve ser contabilizada",
    celula: { linha: 5, coluna: 5 },
    bombas: [
        { linha: 10, coluna: 10 }
    ],
    esperado: 0
};

const CM26 = {
    nome: "Contagem de duas bombas diagonais",
    celula: { linha: 8, coluna: 6 },
    bombas: [
        { linha: 7, coluna: 5 },
        { linha: 9, coluna: 7 }
    ],
    esperado: 2
};

const CM27 = {
    nome: "Revelar célula fechada sem bomba",
    celula: { linha: 3, coluna: 4 },
    bombas: [],
    estadoInicial: "FECHADA",
    esperado: "REVELADA"
};

const CM28 = {
    nome: "Revelar célula fechada que contém bomba",
    celula: { linha: 3, coluna: 4 },
    bombas: [
        { linha: 3, coluna: 4 }
    ],
    estadoInicial: "FECHADA",
    esperado: "FIM_DE_JOGO"
};

const CM29 = {
    nome: "Não alterar célula que já foi revelada",
    celula: { linha: 3, coluna: 4 },
    estadoInicial: "REVELADA",
    esperado: "SEM_ALTERACAO"
};

const CM30 = {
    nome: "Impedir revelação de célula fora do tabuleiro",
    celula: { linha: 18, coluna: 5 },
    estadoInicial: "FECHADA",
    esperado: false
};

const CM31 = {
    nome: "Marcar célula fechada com bandeira",
    celula: { linha: 3, coluna: 4 },
    estadoInicial: "FECHADA",
    esperado: "BANDEIRA"
};

const CM32 = {
    nome: "Remover bandeira de célula marcada",
    celula: { linha: 3, coluna: 4 },
    estadoInicial: "BANDEIRA",
    esperado: "FECHADA"
};

const CM33 = {
    nome: "Impedir revelação de célula com bandeira",
    celula: { linha: 3, coluna: 4 },
    estadoInicial: "BANDEIRA",
    esperado: "SEM_ALTERACAO"
};

const CM34 = {
    nome: "Impedir bandeira em célula revelada",
    celula: { linha: 3, coluna: 4 },
    estadoInicial: "REVELADA",
    esperado: "SEM_ALTERACAO"
};

const CM35 = {
    nome: "Vencer ao revelar todas as células sem bombas",
    linhas: 18,
    colunas: 14,
    quantidadeBombas: 40,
    celulasSegurasReveladas: 212,
    esperado: "VITORIA"
};

let campoMinado = null;

try {
    campoMinado = require("./campo-minado.js");
} catch (erro) {
    console.log("Implementação do Campo Minado ainda não encontrada.");
}

function obterResultado(funcao, ...argumentos) {
    if (!campoMinado || typeof campoMinado[funcao] !== "function") {
        return `FUNCAO_NAO_IMPLEMENTADA: ${funcao}`;
    }

    return campoMinado[funcao](...argumentos);
}

// CM01 a CM06 - Dimensões do tabuleiro
executarTeste(CM01.nome, CM01.esperado,
    obterResultado("validarDimensoes", CM01.linhas, CM01.colunas));

executarTeste(CM03.nome, CM03.esperado,
    obterResultado("validarDimensoes", CM03.linhas, CM03.colunas));

executarTeste(CM04.nome, CM04.esperado,
    obterResultado("validarDimensoes", CM04.linhas, CM04.colunas));

executarTeste(CM05.nome, CM05.esperado,
    obterResultado("validarDimensoes", CM05.linhas, CM05.colunas));

executarTeste(CM06.nome, CM06.esperado,
    obterResultado("validarDimensoes", CM06.linhas, CM06.colunas));

// CM02 e CM07 a CM10 - Quantidade de bombas
executarTeste(CM02.nome, CM02.esperado,
    obterResultado("validarQuantidadeBombas", CM02.quantidadeBombas));

executarTeste(CM07.nome, CM07.esperado,
    obterResultado("validarQuantidadeBombas", CM07.quantidadeBombas));

executarTeste(CM08.nome, CM08.esperado,
    obterResultado("validarQuantidadeBombas", CM08.quantidadeBombas));

executarTeste(CM09.nome, CM09.esperado,
    obterResultado("validarQuantidadeBombas", CM09.quantidadeBombas));

executarTeste(CM10.nome, CM10.esperado,
    obterResultado("validarQuantidadeBombas", CM10.quantidadeBombas));

// CM11 - Posições duplicadas
executarTeste(CM11.nome, CM11.esperado,
    obterResultado("validarBombasDuplicadas", CM11.bombas));

// CM12 a CM16 - Posição das bombas
executarTeste(CM12.nome, CM12.esperado,
    obterResultado("validarPosicaoBomba", CM12.bomba));

executarTeste(CM13.nome, CM13.esperado,
    obterResultado("validarPosicaoBomba", CM13.bomba));

executarTeste(CM14.nome, CM14.esperado,
    obterResultado("validarPosicaoBomba", CM14.bomba));

executarTeste(CM15.nome, CM15.esperado,
    obterResultado("validarPosicaoBomba", CM15.bomba));

executarTeste(CM16.nome, CM16.esperado,
    obterResultado("validarPosicaoBomba", CM16.bomba));

// CM17 a CM22 - Contagem de bombas vizinhas
executarTeste(CM17.nome, CM17.esperado,
    obterResultado("contarBombasVizinhas", CM17.celula, CM17.bombas));

executarTeste(CM18.nome, CM18.esperado,
    obterResultado("contarBombasVizinhas", CM18.celula, CM18.bombas));

executarTeste(CM19.nome, CM19.esperado,
    obterResultado("contarBombasVizinhas", CM19.celula, CM19.bombas));

executarTeste(CM20.nome, CM20.esperado,
    obterResultado("contarBombasVizinhas", CM20.celula, CM20.bombas));

executarTeste(CM21.nome, CM21.esperado,
    obterResultado("contarBombasVizinhas", CM21.celula, CM21.bombas));

executarTeste(CM22.nome, CM22.esperado,
    obterResultado("contarBombasVizinhas", CM22.celula, CM22.bombas));

// CM23 - Verificar bomba na própria célula
executarTeste(
    CM23.nome,
    CM23.esperado,
    obterResultado(
        "verificarSeCelulaTemBomba",
        CM23.celula,
        CM23.bombas
    )
);

// CM24 a CM26 - Casos adicionais de contagem
executarTeste(CM24.nome, CM24.esperado,
    obterResultado("contarBombasVizinhas", CM24.celula, CM24.bombas));

executarTeste(CM25.nome, CM25.esperado,
    obterResultado("contarBombasVizinhas", CM25.celula, CM25.bombas));

executarTeste(CM26.nome, CM26.esperado,
    obterResultado("contarBombasVizinhas", CM26.celula, CM26.bombas));

// CM27 a CM30 - Revelar 
executarTeste(CM27.nome, CM27.esperado,
    obterResultado("revelarCelula", CM27.celula, CM27.bombas, CM27.estadoInicial));

executarTeste(CM28.nome, CM28.esperado,
    obterResultado("revelarCelula", CM28.celula, CM28.bombas, CM28.estadoInicial));

executarTeste(CM29.nome, CM29.esperado,
    obterResultado("revelarCelula", CM29.celula, [], CM29.estadoInicial));

executarTeste(CM30.nome, CM30.esperado,
    obterResultado("revelarCelula", CM30.celula, [], CM30.estadoInicial));

// CM31 a CM34 - Bandeiras
executarTeste(CM31.nome, CM31.esperado,
    obterResultado("alternarBandeira", CM31.celula, CM31.estadoInicial));

executarTeste(CM32.nome, CM32.esperado,
    obterResultado("alternarBandeira", CM32.celula, CM32.estadoInicial));

executarTeste(CM33.nome, CM33.esperado,
    obterResultado("revelarCelula", CM33.celula, [], CM33.estadoInicial));

executarTeste(CM34.nome, CM34.esperado,
    obterResultado("alternarBandeira", CM34.celula, CM34.estadoInicial));

// CM35 - Vitória
executarTeste(CM35.nome, CM35.esperado,
    obterResultado(
        "verificarVitoria",
        CM35.linhas,
        CM35.colunas,
        CM35.quantidadeBombas,
        CM35.celulasSegurasReveladas
    ));

exibirResumo();
