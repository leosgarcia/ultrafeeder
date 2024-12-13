const feeders = [
    { 
        name: "Plane.watch", 
        url: "https://www.plane.watch/", 
        icon: "bi-broadcast"
    },
    { 
        name: "FlightAware", 
        url: "https://flightaware.com/", 
        icon: "bi-airplane"
    },
    { 
        name: "FlightRadar24", 
        url: "https://www.flightradar24.com/", 
        icon: "bi-geo-alt"
    },
    { 
        name: "RadarBox", 
        url: "https://www.radarbox.com/", 
        icon: "bi-compass"
    },
    { 
        name: "PlaneFinder", 
        url: "https://planefinder.net/", 
        icon: "bi-search"
    },
    { 
        name: "ADSBHub", 
        url: "https://www.adsbhub.org/", 
        icon: "bi-cloud"
    },
    { 
        name: "OpenSky Network", 
        url: "https://opensky-network.org/", 
        icon: "bi-view-list"
    },
    { 
        name: "RadarVirtuel", 
        url: "https://www.radarvirtuel.com/", 
        icon: "bi-globe"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const feedersList = document.getElementById("feeders-list");
    const searchInput = document.getElementById("search-input");

    function renderFeeders(feedersToRender) {
        // Limpa a lista antes de renderizar
        feedersList.innerHTML = "";

        // Verifica se há feeders para renderizar
        if (feedersToRender.length === 0) {
            feedersList.innerHTML = '<p>Nenhum feeder encontrado.</p>';
            return;
        }

        // Renderiza cada feeder
        feedersToRender.forEach(feeder => {
            const card = document.createElement("div");
            card.classList.add("feeder-card");
            
            card.innerHTML = `
                <div class="card-icon">
                    <i class="bi ${feeder.icon}"></i>
                </div>
                <h3>${feeder.name}</h3>
                <a href="${feeder.url}" target="_blank">Visitar Site</a>
            `;

            feedersList.appendChild(card);
        });
    }

    // Evento de busca
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredFeeders = feeders.filter(feeder => 
            feeder.name.toLowerCase().includes(searchTerm)
        );
        renderFeeders(filteredFeeders);
    });

    // Renderiza todos os feeders inicialmente
    renderFeeders(feeders);
});