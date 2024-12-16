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
        name: "ADS-B Exchange", 
        url: "https://globe.adsbexchange.com/?feed=9m-eai3-UJeh", 
        icon: "bi bi-broadcast-pin"
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
    }, 
    { 
        name: "ADSBHub", 
        url: "https://www.adsbhub.org/statistic.php", 
        icon: "bi-globe-americas"
    },
    { 
        name: "OpenSky Network", 
        url: "https://opensky-network.org/receiver-profile?s=-1408199258", 
        icon: "bi-moon-stars"
    },
    { 
        name: "Plane.watch", 
        url: "https://atc.plane.watch/", 
        icon: "bi-stopwatch"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const feedersList = document.getElementById("feeders-list");
    const searchInput = document.getElementById("search-input");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

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

    // Verifica a preferência do usuário no localStorage
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeToggle.querySelector(".bi-sun").style.display = "inline-block";
        darkModeToggle.querySelector(".bi-moon-stars").style.display = "none";
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Salva a preferência do usuário no localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }

        // Alterna a visibilidade dos ícones
        const sunIcon = darkModeToggle.querySelector(".bi-sun");
        const moonIcon = darkModeToggle.querySelector(".bi-moon-stars");
        sunIcon.style.display = document.body.classList.contains("dark-mode") ? "inline-block" : "none";
        moonIcon.style.display = document.body.classList.contains("dark-mode") ? "none" : "inline-block";
    });
});
