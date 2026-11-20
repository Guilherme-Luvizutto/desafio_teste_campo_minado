# Testes de Software — Campo Minado

## Sobre o projeto

Este projeto contém uma suíte de testes para o jogo Campo Minado, desenvolvida em JavaScript puro, utilizando a abordagem **TDD (Test-Driven Development)**.

O objetivo é testar as principais regras e funcionalidades do jogo antes da implementação do código principal.

## Especificações do jogo

- Tabuleiro com 18 linhas e 14 colunas.
- Total de 252 células.
- Exatamente 40 bombas.
- Total de 212 células sem bombas.

## Casos de teste

O projeto possui 35 casos de teste, organizados nos seguintes grupos:

| Grupo | Testes | Funcionalidade |
|---|---|---|
| 1 | CM01–CM06 | Dimensões do tabuleiro |
| 2 | CM02, CM07–CM10 | Quantidade de bombas |
| 3 | CM11–CM16 | Posições e duplicidade de bombas |
| 4 | CM17–CM26 | Contagem de bombas vizinhas |
| 5 | CM27–CM30 | Revelação de células |
| 6 | CM31–CM34 | Marcação e remoção de bandeiras |
| 7 | CM35 | Condição de vitória |

## Tecnologias utilizadas

- JavaScript
- Node.js
- Testes automatizados com funções próprias
- TDD

## Como executar

1. Instale o Node.js.
2. Abra o terminal na pasta do projeto.
3. Execute o comando:

```bash
node campo-minado.test.js
```

## Resultado esperado

O programa apresenta individualmente o resultado de cada teste e, ao final, exibe um resumo contendo:

- Total de testes executados.
- Quantidade de testes aprovados.
- Quantidade de testes reprovados.

Como o projeto contém somente os testes, sem a implementação do jogo, as funções ainda não estarão disponíveis. Portanto, os testes apresentarão falhas indicando as funções não implementadas.

## Estrutura do projeto

```text
desafio_teste_campo_minado/
│
├── campo-minado.test.js
└── README.md
```

## Objetivo da atividade

Desenvolver casos de teste capazes de especificar e verificar o comportamento esperado do Campo Minado, permitindo que a implementação posterior seja desenvolvida e validada com base nesses testes.

## Responsável

Guilherme Paschoal Luvizutto - RA 24244079-2
