const feeders = [
    { 
        name: "Plane.watch", 
        url: "https://www.plane.watch/", 
        icon: "bi-broadcast",
        description: "Rastreamento global em tempo real"
    },
    { 
        name: "FlightAware", 
        url: "https://flightaware.com/", 
        icon: "bi-airplane",
        description: "Informações detalhadas de voos"
    },
    { 
        name: "FlightRadar24", 
        url: "https://www.flightradar24.com/", 
        icon: "bi-geo-alt",
        description: "Visualização de tráfego aéreo mundial"
    },
    { 
        name: "RadarBox", 
        url: "https://www.radarbox.com/", 
        icon: "bi-compass",
        description: "Dados de tráfego aéreo premium"
    },
    { 
        name: "PlaneFinder", 
        url: "https://planefinder.net/", 
        icon: "bi-search",
        description: "Localização precisa de aeronaves"
    },
    { 
        name: "ADSBHub", 
        url: "https://www.adsbhub.org/", 
        icon: "bi-cloud",
        description: "Hub de dados ADS-B"
    },
    { 
        name: "OpenSky Network", 
        url: "https://opensky-network.org/", 
        icon: "bi-view-list",
        description: "Rede colaborativa de rastreamento"
    },
    { 
        name: "RadarVirtuel", 
        url: "https://www.radarvirtuel.com/", 
        icon: "bi-globe",
        description: "Radar virtual internacional"
    }
];

const feedersList = document.getElementById("feeders-list");
const searchInput = document.getElementById("search-input");

function renderFeeders(feedersToRender) {
    feedersList.innerHTML = "";

    feedersToRender.forEach(feeder => {
        const card = document.createElement("div");
        card.classList.add("feeder-card");
        
        card.innerHTML = `
            <div class="card-icon">
                <i class="bi ${feeder.icon}"></i>
            </div>
            <h3>${feeder.name}</h3>
            <p>${feeder.description}</p>
            <a href="${feeder.url}" target="_blank">Acessar <i class="bi bi-arrow-right"></i></a>
        `;

        feedersList.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredFeeders = feeders.filter(feeder => 
        feeder.name.toLowerCase().includes(searchTerm) ||
        feeder.description.toLowerCase().includes(searchTerm)
    );
    renderFeeders(filteredFeeders);
});

// Renderiza todos os feeders inicialmente
renderFeeders(feeders);