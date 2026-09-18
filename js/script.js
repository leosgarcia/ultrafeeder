/**
 * Hub de Feeders ADS-B - Leonardo Garcia
 * Catálogo de serviços e interfaces de rastreamento de aeronaves.
 */

const feeders = [
    {
        id: "ultrafeeder-main",
        name: "Ultrafeeder - Main",
        category: "local",
        description: "Mapa interativo principal com tar1090 e rastreamento ao vivo local.",
        url: "http://ultrafeeder.acertenoalvo.com/",
        icon: "bi-airplane-fill"
    },
    {
        id: "ultrafeeder-heatmap",
        name: "Ultrafeeder - Heatmap",
        category: "local",
        description: "Mapa de calor de densidade de tráfego aéreo detectado pela estação.",
        url: "http://ultrafeeder.acertenoalvo.com/?heatmap",
        icon: "bi-fire"
    },
    {
        id: "ultrafeeder-tracks",
        name: "Ultrafeeder - Tracks",
        category: "local",
        description: "Histórico e rastros persistentes de voos captados pela antena.",
        url: "http://ultrafeeder.acertenoalvo.com/?pTracks",
        icon: "bi-clock-history"
    },
    {
        id: "ultrafeeder-graphs",
        name: "Ultrafeeder - Telemetria",
        category: "analytics",
        description: "Painel em português com sinal, alcance, tráfego e saúde do servidor.",
        url: "https://sv.acertenoalvo.com/metrics.html",
        icon: "bi-bar-chart-line-fill"
    },
    {
        id: "adsb-exchange",
        name: "ADS-B Exchange",
        category: "global",
        description: "Rede global aberta sem filtros e perfil da estação de envio.",
        url: "https://globe.adsbexchange.com/?feed=9m-eai3-UJeh",
        icon: "bi-broadcast-pin"
    },
    {
        id: "flightaware",
        name: "FlightAware (PiAware)",
        category: "global",
        description: "Estatísticas de envio e cobertura na rede FlightAware.",
        url: "https://piaware.acertenoalvo.com/",
        icon: "bi-airplane-engines-fill"
    },
    {
        id: "flightradar24",
        name: "FlightRadar24",
        category: "global",
        description: "Status do alimentador local e feed para o FlightRadar24.",
        url: "https://fr24.acertenoalvo.com/",
        icon: "bi-bullseye"
    },
    {
        id: "airnav-radarbox",
        name: "AirNav RadarBox",
        category: "global",
        description: "Estação EXTRPI657061 no ecossistema RadarBox.",
        url: "https://www.airnavradar.com/stations/EXTRPI657061",
        icon: "bi-box-seam-fill"
    },
    {
        id: "radarvirtuel",
        name: "RadarVirtuel",
        category: "global",
        description: "Cobertura, tráfego recebido e MLAT da estação SBFZ1 em Fortaleza.",
        url: "https://radarvirtuel.com/station/SBFZ1",
        icon: "bi-radar"
    },
    {
        id: "plane-finder",
        name: "Plane Finder",
        category: "global",
        description: "Cliente de envio e dados de telemetria para a rede Plane Finder.",
        url: "https://planefinder.acertenoalvo.com/",
        icon: "bi-compass-fill"
    },
    {
        id: "adsbhub",
        name: "ADSBHub",
        category: "analytics",
        description: "Estatísticas de compartilhamento e agregação de dados no ADSBHub.",
        url: "https://www.adsbhub.org/statistic.php",
        icon: "bi-globe-americas"
    },
    {
        id: "opensky-network",
        name: "OpenSky Network",
        category: "global",
        description: "Perfil do receptor e contribuições acadêmicas para a rede OpenSky.",
        url: "https://opensky-network.org/receiver-profile?s=-1408199258",
        icon: "bi-stars"
    },
    {
        id: "plane-watch",
        name: "Plane.watch (ATC)",
        category: "analytics",
        description: "Visualização e monitoramento de rádio ATC / telemetria.",
        url: "https://atc.plane.watch/",
        icon: "bi-stopwatch-fill"
    }
];

const categoryLabels = {
    local: "Estação Local",
    global: "Rede Global",
    analytics: "Métricas / Stats"
};

document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const feedersList = document.getElementById("feeders-list");
    const searchInput = document.getElementById("search-input");
    const clearSearchBtn = document.getElementById("clear-search");
    const categoriesBar = document.getElementById("categories-bar");
    const emptyState = document.getElementById("empty-state");
    const resultsCount = document.getElementById("results-count");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const resetFiltersBtn = document.getElementById("btn-reset-filters");

    // Estado da aplicação
    let activeCategory = "all";
    let searchQuery = "";

    // 1. Atualizar contadores de categoria
    function updateCategoryCounts() {
        const counts = {
            all: feeders.length,
            local: feeders.filter(f => f.category === "local").length,
            global: feeders.filter(f => f.category === "global").length,
            analytics: feeders.filter(f => f.category === "analytics").length
        };

        const countAll = document.getElementById("count-all");
        const countLocal = document.getElementById("count-local");
        const countGlobal = document.getElementById("count-global");
        const countAnalytics = document.getElementById("count-analytics");

        if (countAll) countAll.textContent = counts.all;
        if (countLocal) countLocal.textContent = counts.local;
        if (countGlobal) countGlobal.textContent = counts.global;
        if (countAnalytics) countAnalytics.textContent = counts.analytics;
    }

    // 2. Renderizar lista de cards
    function renderFeeders() {
        // Filtragem combinada
        const filtered = feeders.filter(feeder => {
            const matchesCategory = activeCategory === "all" || feeder.category === activeCategory;
            const matchesSearch = searchQuery === "" || 
                feeder.name.toLowerCase().includes(searchQuery) ||
                feeder.description.toLowerCase().includes(searchQuery) ||
                feeder.category.toLowerCase().includes(searchQuery);

            return matchesCategory && matchesSearch;
        });

        // Limpar lista
        feedersList.innerHTML = "";

        if (filtered.length === 0) {
            emptyState.style.display = "block";
            resultsCount.textContent = "Nenhum resultado para os filtros atuais";
            return;
        }

        emptyState.style.display = "none";
        resultsCount.textContent = `Exibindo ${filtered.length} de ${feeders.length} estações`;

        // Criar cards
        filtered.forEach(feeder => {
            const card = document.createElement("a");
            card.classList.add("feeder-card");
            card.href = feeder.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.setAttribute("aria-label", `Acessar ${feeder.name} (abre em nova aba)`);

            const categoryLabel = categoryLabels[feeder.category] || feeder.category;

            card.innerHTML = `
                <div>
                    <div class="card-header">
                        <div class="card-icon-wrapper">
                            <i class="bi ${feeder.icon}"></i>
                        </div>
                        <span class="category-tag ${feeder.category}">${categoryLabel}</span>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title">${feeder.name}</h2>
                        <p class="card-desc">${feeder.description}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <span class="launch-text">Acessar Estação</span>
                    <i class="bi bi-box-arrow-up-right ext-icon"></i>
                </div>
            `;

            feedersList.appendChild(card);
        });
    }

    // 3. Handlers de Busca
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        clearSearchBtn.style.display = searchQuery ? "block" : "none";
        renderFeeders();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        searchInput.focus();
        renderFeeders();
    });

    // 4. Handlers de Categoria
    categoriesBar.addEventListener("click", (e) => {
        const button = e.target.closest(".cat-pill");
        if (!button) return;

        // Atualiza estado ativo
        document.querySelectorAll(".cat-pill").forEach(btn => {
            btn.classList.remove("active");
            btn.setAttribute("aria-selected", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-selected", "true");
        activeCategory = button.getAttribute("data-category");
        renderFeeders();
    });

    // 5. Botão Resetar Filtros
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", () => {
            searchInput.value = "";
            searchQuery = "";
            clearSearchBtn.style.display = "none";
            
            activeCategory = "all";
            document.querySelectorAll(".cat-pill").forEach(btn => {
                const isAll = btn.getAttribute("data-category") === "all";
                btn.classList.toggle("active", isAll);
                btn.setAttribute("aria-selected", isAll ? "true" : "false");
            });

            renderFeeders();
        });
    }

    // 6. Gerenciamento de Tema (Dark / Light Mode)
    function applyTheme(theme) {
        if (theme === "light") {
            document.body.classList.add("light-mode");
        } else {
            document.body.classList.remove("light-mode");
        }
    }

    // Identificar preferência salva ou do sistema operacional
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        applyTheme(prefersLight ? "light" : "dark");
    }

    darkModeToggle.addEventListener("click", () => {
        const isCurrentlyLight = document.body.classList.contains("light-mode");
        const nextTheme = isCurrentlyLight ? "dark" : "light";
        
        applyTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
    });

    // Ouvir alterações de tema no sistema operacional
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
            applyTheme(e.matches ? "light" : "dark");
        }
    });

    // Inicialização
    updateCategoryCounts();
    renderFeeders();
});
