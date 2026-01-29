@'
# Test Cases — SauceDemo

> Formato: **ID | Título | Pré-condições | Passos | Dados | Resultado esperado**

---

## LOGIN

### TC-001 — Login com credenciais válidas
**Pré-condições:** usuário na página de login.  
**Passos:**
1. Acessar https://www.saucedemo.com/
2. Informar username
3. Informar password
4. Clicar em **Login**
**Dados:** `standard_user` / `secret_sauce`  
**Resultado esperado:** abrir a página **Products** e exibir lista de produtos.

### TC-002 — Login com senha inválida
**Pré-condições:** usuário na página de login.  
**Passos:** repetir TC-001 com senha incorreta.  
**Dados:** `standard_user` / `senha_incorreta`  
**Resultado esperado:** exibir mensagem de erro e permanecer na tela de login.

### TC-003 — Login com usuário bloqueado
**Pré-condições:** usuário na página de login.  
**Passos:** realizar login.  
**Dados:** `locked_out_user` / `secret_sauce`  
**Resultado esperado:** exibir mensagem indicando que o usuário está bloqueado e não permitir login.

### TC-004 — Campos obrigatórios (username vazio)
**Pré-condições:** usuário na página de login.  
**Passos:**
1. Deixar username vazio
2. Preencher password
3. Clicar em **Login**
**Dados:** (vazio) / `secret_sauce`  
**Resultado esperado:** mensagem de erro indicando que username é obrigatório.

---

## PRODUTOS

### TC-005 — Acessar página de produtos após login
**Pré-condições:** estar logado.  
**Passos:** observar o conteúdo da página **Products**.  
**Dados:** —  
**Resultado esperado:** lista de produtos visível, com nome, preço e botão **Add to cart**.

### TC-006 — Ordenação de produtos (Z → A)
**Pré-condições:** estar logado na página **Products**.  
**Passos:**
1. Abrir o dropdown de ordenação
2. Selecionar **Name (Z to A)**
**Dados:** —  
**Resultado esperado:** produtos ordenados por nome de Z para A.

---

## CARRINHO

### TC-007 — Adicionar 1 item ao carrinho
**Pré-condições:** estar logado na página **Products**.  
**Passos:**
1. Clicar em **Add to cart** em um produto
2. Clicar no ícone do carrinho
**Dados:** —  
**Resultado esperado:** produto aparece no carrinho e o contador do carrinho incrementa para 1.

### TC-008 — Remover item do carrinho
**Pré-condições:** ter 1 item no carrinho.  
**Passos:**
1. Ir ao carrinho
2. Clicar em **Remove**
**Dados:** —  
**Resultado esperado:** item removido e contador do carrinho volta ao estado correto.

---

## CHECKOUT

### TC-009 — Checkout happy path
**Pré-condições:** estar logado e ter pelo menos 1 item no carrinho.  
**Passos:**
1. Abrir carrinho
2. Clicar **Checkout**
3. Preencher First Name, Last Name, Zip/Postal Code
4. Clicar **Continue**
5. Clicar **Finish**
**Dados:** Marcelo / Silva / 14400-000  
**Resultado esperado:** exibir confirmação (ex.: “THANK YOU FOR YOUR ORDER”).

### TC-010 — Checkout: validar campos obrigatórios (First Name vazio)
**Pré-condições:** estar logado e ter item no carrinho.  
**Passos:**
1. Carrinho → **Checkout**
2. Deixar First Name vazio
3. Preencher Last Name e Zip
4. Clicar **Continue**
**Dados:** (vazio) / Silva / 14400-000  
**Resultado esperado:** mostrar erro informando que First Name é obrigatório.

---

## MENU / SESSÃO

### TC-011 — Logout
**Pré-condições:** estar logado.  
**Passos:**
1. Abrir menu (hambúrguer)
2. Clicar **Logout**
**Dados:** —  
**Resultado esperado:** voltar para a página de login e não acessar Products sem autenticar.

### TC-012 — Restringir acesso direto a /inventory.html sem login
**Pré-condições:** estar deslogado.  
**Passos:**
1. Abrir uma nova aba
2. Acessar diretamente: https://www.saucedemo.com/inventory.html
**Dados:** —  
**Resultado esperado:** sistema deve redirecionar para login (ou bloquear acesso) e não exibir produtos.
'@ | Set-Content -Encoding UTF8 "docs\test-cases.md"
