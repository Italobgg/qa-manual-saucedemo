# Test Plan — SauceDemo

## Objetivo
Validar fluxos principais do e-commerce: login, produtos, carrinho e checkout.

## Escopo (In-scope)
- Login (positivo e negativo)
- Produtos (visualização e ordenação)
- Carrinho (adicionar/remover e persistência)
- Checkout (happy path e validações de campos obrigatórios)

## Fora de escopo (Out-of-scope)
- Performance e testes de carga
- Segurança (pentest)
- Compatibilidade mobile e navegadores antigos
- Integrações externas reais (pagamento/frete)

## Abordagem de teste
- Testes funcionais (caixa preta): positivos e negativos
- Técnicas: equivalência, valor limite, tabela de decisão (quando aplicável)
- Exploratório: 2 sessões com charters
- Regressão: rerun do smoke ao final

## Ambiente
- URL: https://www.saucedemo.com/
- Navegadores: Chrome (principal), Firefox (secundário)

## Critérios de entrada
- Site acessível
- Credenciais de teste disponíveis

## Critérios de saída
- Casos do escopo executados
- Evidências registradas para falhas
- Bugs/melhorias documentados (se houver)

## Riscos
- Instabilidade do site demo / resets
- Mudanças sem aviso na aplicação de treino