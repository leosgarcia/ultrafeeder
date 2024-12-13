const feeders = [
    { name: "Plane.watch", url: "https://www.plane.watch/", icon: "bi-broadcast" },
    { name: "FlightAware", url: "https://flightaware.com/", icon: "bi-airplane" },
    { name: "FlightRadar24", url: "https://www.flightradar24.com/", icon: "bi-geo-alt" },
    { name: "RadarBox", url: "https://www.radarbox.com/", icon: "bi-compass" },
    { name: "PlaneFinder", url: "https://planefinder.net/", icon: "bi-search" },
    { name: "ADSBHub", url: "https://www.adsbhub.org/", icon: "bi-cloud" },
    { name: "OpenSky Network", url: "https://opensky-network.org/", icon: "bi-view-list" },
    { name: "RadarVirtuel", url: "https://www.radarvirtuel.com/", icon: "bi-globe" }
];

const feedersList = document.getElementById("feeders-list");
const searchInput = document.getElementById("search-input");

function renderFeeders(feedersToRender) {
    feedersList.innerHTML = ""; // Limpa a lista atual

    feedersToRender.forEach(feeder => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const icon = document.createElement("i");

        a.href = feeder.url;
        a.textContent = feeder.name;
        a.target = "_blank";

        icon.classList.add("bi", feeder.icon);
        a.prepend(icon);

        li.appendChild(a);
        feedersList.appendChild(li);
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