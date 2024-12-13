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
        icon: "bi-clock-history"
    },
    { 
        name: "Ultrafeeder - Graphs", 
        url: "http://ultrafeeder.acertenoalvo.com/graphs1090/", 
        icon: "bi-bar-chart"
    },
    { 
        name: "Plane.watch", 
        url: "https://atc.plane.watch/", 
        icon: "bi-stopwatch"
    },
    { 
        name: "FlightAware", 
        url: "https://piaware.acertenoalvo.com/", 
        icon: "bi-airplane-engines"
    },
    { 
        name: "FlightRadar24", 
        url: "https://fr24.acertenoalvo.com/", 
        icon: "bi-bullseye"
    },
    { 
        name: "AirNav RadarBox", 
        url: "https://www.airnavradar.com/stations/EXTRPI657061", 
        icon: "bi-box-seam"
    },
    { 
        name: "Plane Finder", 
        url: "https://planefinder.acertenoalvo.com/", 
        icon: "bi-search"
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