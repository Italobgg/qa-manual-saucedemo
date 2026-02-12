# Test Report — SauceDemo (Ciclo 01)

## Informações do ciclo
- Produto/Site: SauceDemo (https://www.saucedemo.com/)
- Tipo: Testes manuais (smoke + regressão básica)
- Data de execução: 11/02/2026
- Ambiente: Windows + Chrome
- Evidências: somente texto (sem prints)

## Escopo
### Em escopo
- Login (válido, inválido, usuário bloqueado, campo obrigatório)
- Produtos (visualização e ordenação)
- Carrinho (adicionar e remover item)
- Checkout (happy path e validação de campo obrigatório)
- Sessão (logout e restrição de acesso sem autenticação)

### Fora de escopo (neste ciclo)
- Testes cross-browser (Firefox/Edge/Safari)
- Responsividade (mobile)
- Performance e segurança
- Acessibilidade (WCAG)
- Testes automatizados

## Casos executados e resultados
| ID     | Título (resumo)                                   | Status |
|--------|----------------------------------------------------|--------|
| TC-001 | Login válido                                       | Pass   |
| TC-002 | Login com senha inválida                           | Pass   |
| TC-003 | Login com usuário bloqueado                        | Pass   |
| TC-004 | Username obrigatório                               | Pass   |
| TC-005 | Produtos visíveis                                  | Pass   |
| TC-006 | Ordenação Z → A                                    | Pass   |
| TC-007 | Adicionar item ao carrinho                         | Pass   |
| TC-008 | Remover item do carrinho                           | Pass   |
| TC-009 | Checkout happy path                                | Pass   |
| TC-010 | Checkout: First Name obrigatório                   | Pass   |
| TC-011 | Logout                                             | Pass   |
| TC-012 | Bloqueio de acesso direto a /inventory.html (anônimo) | Pass |

## Resumo
- Total planejado: 12
- Executados: 12
- Pass: 12
- Fail: 0
- Blocked: 0
- Not Run: 0

## Bugs encontrados
- Nenhum bug encontrado neste ciclo.

## Observações / Riscos
- O TC-012 deve sempre ser validado em janela anônima para garantir que não exista sessão ativa.
- Recomenda-se repetir o ciclo em outro navegador (ex.: Firefox) para aumentar cobertura.

## Próximos passos sugeridos
- Rodar ciclo 02 (cross-browser) e registrar novo report
- Adicionar casos negativos adicionais no checkout (Last Name vazio, Zip vazio)
- Criar uma matriz de rastreabilidade (Requisito → Test Case) se houver requisitos
