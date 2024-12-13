const feeders = [
    { 
        name: "Ultrafeeder - Main", 
        url: "http://ultrafeeder.acertenoalvo.com/", 
        icon: "bi-airplane"
    },
    { 
        name: "Ultrafeeder - Heatmap", 
        url: "http://ultrafeeder.acertenoalvo.com/?heatmap", 
        icon: "bi-activity"
    },
    { 
        name: "Ultrafeeder - Tracks", 
        url: "http://ultrafeeder.acertenoalvo.com/?pTracks", 
        icon: "clock-history"
    },
    { 
        name: "Ultrafeeder - Graphs", 
        url: "http://ultrafeeder.acertenoalvo.com/graphs1090/", 
        icon: "bar-chart"
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
            <a href="${feeder.url}" target="_blank">Visitar Site</a>
        `;

        feedersList.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredFeeders = feeders.filter(feeder => 
        feeder.name.toLowerCase().includes(searchTerm)
    );
    renderFeeders(filteredFeeders);
});

// Renderiza todos os feeders inicialmente
renderFeeders(feeders);