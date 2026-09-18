<div align="center">

# 📡 ADS-B Feeders Portal

**Hub centralizado e responsivo para monitoramento de estações receptoras, redes globais e métricas de telemetria ADS-B.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](css/style.css)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](js/script.js)

</div>

---

## 🎯 Sobre o Projeto

O **ADS-B Feeders Portal** é uma interface web moderna, leve e responsiva criada para agregar e facilitar o acesso a todos os serviços de rastreamento de voos alimentados por antenas ADS-B locais (como *Ultrafeeder*, *tar1090*, *graphs1090*) e integradores globais (*ADS-B Exchange*, *FlightRadar24*, *FlightAware*, *RadarBox*, *OpenSky Network*, entre outros).

### ✨ Principais Funcionalidades

- **⚡ Acesso Rápido a Serviços**: Navegação direta para interfaces de mapa em tempo real, mapas de calor, rastros históricos e dashboards de desempenho de recepção.
- **🔍 Busca Dinâmica & Filtros**: Pesquise em tempo real por nome, protocolo ou categoria (*Estação Local*, *Rede Global*, *Métricas/Stats*).
- **🌓 Suporte a Dark / Light Mode**: Detecção automática de preferência de sistema (`prefers-color-scheme`) e persistência via `localStorage`.
- **📱 Design Responsivo & Moderno**: Estilo glassmorphism inspirado em telas de radares aeronáuticos e compatível com dispositivos móveis, tablets e desktops.
- **🚀 Zero Dependências Pesadas**: Construído puramente com HTML5, CSS3 moderno e Vanilla JavaScript (sem necessidade de bundlers ou frameworks complexos).

---

## 🧭 Serviços Integrados no Dashboard

| Categoria | Serviço | Descrição |
| :--- | :--- | :--- |
| **Estação Local** | **Ultrafeeder (Main)** | Mapa principal de aeronaves locais via `tar1090` |
| **Estação Local** | **Ultrafeeder (Heatmap)** | Mapa de calor com densidade de tráfego |
| **Estação Local** | **Ultrafeeder (Tracks)** | Histórico persistente de rotas detectadas |
| **Métricas** | **Ultrafeeder (Graphs)** | Estatísticas do receptor via `graphs1090` |
| **Redes Globais** | **ADS-B Exchange** | Cobertura enviada ao feed aberto ADS-B Exchange |
| **Redes Globais** | **FlightAware** | Status e telemetria no FlightAware PiAware |
| **Redes Globais** | **FlightRadar24** | Status de alimentação no FR24 |
| **Redes Globais** | **AirNav RadarBox** | Painel da estação no ecossistema RadarBox |
| **Redes Globais** | **RadarVirtuel** | Cobertura, tráfego e MLAT da estação SBFZ1 |
| **Redes Globais** | **Plane Finder** | Feed de envio para Plane Finder |
| **Redes Globais** | **OpenSky Network** | Perfil acadêmico e contribuições OpenSky |
| **Métricas** | **ADSBHub** | Estatísticas de agregação e roteamento |
| **Métricas** | **Plane.watch** | Monitoramento de telemetria ATC |

---

## 🚀 Como Executar

Por ser uma aplicação web puramente estática, você pode executá-la de qualquer uma das seguintes formas:

### 1. Servidor Local Rápido (Python ou Node)
```bash
# Com Python 3
python3 -m http.server 8080

# Ou com Node.js (npx)
npx serve .
```
Acesse em seu navegador: `http://localhost:8080`

### 2. Abrir Diretamente no Navegador
Basta abrir o arquivo `index.html` em qualquer navegador web moderno.

### 3. Deploy no GitHub Pages
1. Acesse o repositório no GitHub.
2. Vá em **Settings** > **Pages**.
3. Na seção **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve para ter o portal online instantaneamente.

---

## ⚙️ Personalização

Para adicionar novas estações ou editar URLs existentes, edite a lista `feeders` dentro do arquivo [`js/script.js`](js/script.js):

```javascript
{
    id: "meu-servico",
    name: "Nome do Serviço",
    category: "local", // "local", "global" ou "analytics"
    description: "Descrição breve do serviço ou porta utilizada.",
    url: "https://meu-link.com",
    icon: "bi-airplane-fill" // Ícone do Bootstrap Icons
}
```

---

## 🛠️ Como Contribuir

Consulte o arquivo [`CONTRIBUTING.md`](CONTRIBUTING.md) para diretrizes de desenvolvimento, issues e pull requests.

## 📄 Licença

Este projeto é distribuído sob a licença [MIT](LICENSE).

---
<div align="center">
  <a href="https://buymeacoffee.com/leosgarcia" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 50px !important; width: auto !important;" ></a>
</div>
