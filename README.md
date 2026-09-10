# Temperando Histórias

Landing page responsiva para um projeto de culinária afetiva. A experiência combina uma identidade visual editorial, receitas e histórias de família em uma interface leve, sem dependências de build ou servidor.

## Visão geral

O site foi desenvolvido com **HTML semântico**, **CSS moderno** e **JavaScript vanilla**. A página é estática e pode ser publicada diretamente em serviços como GitHub Pages, Netlify ou Vercel.

A interface apresenta uma área de destaque, navegação por âncoras, seção institucional, receitas em destaque, citação editorial e rodapé com links de contato. O layout mantém a paleta terrosa original e adapta tipografia, espaçamentos e componentes para telas pequenas.

## Estrutura do projeto

```text
.
├── index.html          # Estrutura e conteúdo da página
├── css/
│   └── style.css       # Identidade visual, layout e media queries
├── js/
│   └── main.js         # Menu mobile, busca e estados da interface
├── img/
│   ├── logoTextoLado.png
│   ├── logoTextoBaixo.png
│   ├── BarraPesquisa.png
│   └── baiaoDeDois.png
└── README.md
```

## Funcionalidades

- **Layout responsivo:** navegação, hero, cards, receitas e rodapé reorganizam-se para smartphones, tablets e desktops.
- **Menu mobile acessível:** o botão alterna a navegação com `aria-expanded`, permite fechar com `Esc` e fecha automaticamente ao selecionar uma seção.
- **Busca instantânea:** o campo de pesquisa filtra as receitas por nome, ingrediente ou categoria sem recarregar a página.
- **Acessibilidade básica:** idioma definido como português do Brasil, texto alternativo nas imagens, foco visível, rótulos para controles e suporte a `prefers-reduced-motion`.
- **SEO inicial:** título e meta description preparados para compartilhamento e indexação.
- **Sem build obrigatório:** basta abrir o `index.html` em um navegador ou servir a pasta com qualquer servidor estático.

## Como executar localmente

A forma mais simples é abrir `index.html` diretamente no navegador. Para simular um ambiente web local, execute na raiz do projeto:

```bash
python3 -m http.server 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000).

## Personalização

As cores principais estão declaradas no bloco `:root` de `css/style.css`, com variáveis como `--cream`, `--brown`, `--terracotta` e `--orange`. Para inserir novas receitas, duplique um elemento `.recipe-card` ou `.recipe-feature` no HTML e atualize o atributo `data-search`; ele é usado pelo filtro da busca.

As imagens ficam na pasta `img/`. Para preservar bom desempenho em produção, recomenda-se exportar imagens fotográficas em WebP ou AVIF, mantendo dimensões adequadas ao espaço de exibição.

## Publicação no GitHub Pages

1. Crie um repositório e envie os arquivos deste diretório.
2. No GitHub, abra **Settings > Pages**.
3. Escolha a branch principal e a pasta raiz (`/root`).
4. Salve e aguarde a geração do endereço público.

## Tecnologias

- HTML5
- CSS3
- JavaScript ES2020+
- Google Fonts: DM Serif Display e Manrope

## Licença

O conteúdo e os assets permanecem sob responsabilidade do autor do projeto. Adicione uma licença específica ao repositório caso pretenda permitir reutilização por terceiros.
