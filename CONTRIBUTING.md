# Guia de Contribuição

Obrigado por se interessar em contribuir para o **ADS-B Feeders Portal**! Aceitamos contribuições de todos os tamanhos, desde correções de bugs, sugestões de novos feeds/estações até melhorias visuais e de acessibilidade.

---

## Como Contribuir

1. **Faça um Fork** deste repositório.
2. **Crie uma branch** para sua alteração:
   ```bash
   git checkout -b feature/minha-melhoria
   ```
3. **Faça suas alterações e teste localmente** (ex: abrindo `index.html` ou usando `python3 -m http.server 8080`).
4. **Commit suas alterações** com mensagens descritivas:
   ```bash
   git commit -m 'feat: adiciona nova estacao ADS-B'
   ```
5. **Envie para a sua branch remota**:
   ```bash
   git push origin feature/minha-melhoria
   ```
6. **Abra um Pull Request** no repositório principal descrevendo as mudanças realizadas.

---

## Padrões de Código

- Mantenha o código limpo, sem dependências externas de build (HTML/CSS/JS nativo).
- Utilize nomes semânticos para classes e variáveis no CSS (`style.css`).
- Verifique a responsividade em telas mobile e o suporte a temas Claro e Escuro.
- Recomendamos seguir o padrão [Conventional Commits](https://www.conventionalcommits.org/).

Qualquer dúvida ou sugestão, sinta-se livre para abrir uma [Issue no GitHub](https://github.com/leosgarcia/ultrafeeder/issues)!
