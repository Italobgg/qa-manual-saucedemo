@'
# Test Plan — SauceDemo

## 1. Objetivo
Validar os fluxos principais do sistema (e-commerce demo): login, listagem de produtos, carrinho e checkout.

## 2. Escopo

### 2.1 In-scope (vamos testar)
- Login (positivo e negativo)
- Produtos (visualização e ordenação)
- Carrinho (adicionar/remover itens)
- Checkout (happy path e validações de campos obrigatórios)
- Logout (encerrar sessão)

### 2.2 Out-of-scope (não vamos testar agora)
- Performance (carga/estresse)
- Segurança (pentest)
- Mobile nativo (apps)
- Integrações externas reais

## 3. Abordagem de teste
- Testes funcionais (caixa preta)
- Casos positivos e negativos
- Smoke test (fluxo “principal” rápido)
- Exploratório (sessões curtas com charters)

## 4. Ambiente
- URL: https://www.saucedemo.com/
- Navegadores: Chrome (principal), Firefox (secundário)
- Plataforma: Windows

## 5. Dados de teste
Usuários conhecidos do próprio SauceDemo:
- standard_user / secret_sauce
- locked_out_user / secret_sauce
- problem_user / secret_sauce
- performance_glitch_user / secret_sauce

## 6. Critérios

### 6.1 Critérios de entrada
- Site acessível
- Ambiente pronto (navegador atualizado)

### 6.2 Critérios de saída
- Casos do escopo executados
- Evidência mínima para falhas (print + descrição)
- Bugs/melhorias registrados

## 7. Riscos e mitigação
- Instabilidade do site demo: repetir teste e registrar horário/navegador
- Mudanças na aplicação sem aviso: manter casos de teste atualizados
'@ | Set-Content -Encoding UTF8 "docs\test-plan.md"