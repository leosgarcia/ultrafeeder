const feeders = [
    { name: "Plane.watch", url: "https://www.plane.watch/" },
    { name: "FlightAware", url: "https://flightaware.com/" },
    { name: "FlightRadar24", url: "https://www.flightradar24.com/" },
    { name: "RadarBox", url: "https://www.radarbox.com/" },
    { name: "PlaneFinder", url: "https://planefinder.net/" },
    { name: "ADSBHub", url: "https://www.adsbhub.org/" },
    { name: "OpenSky Network", url: "https://opensky-network.org/" },
    { name: "RadarVirtuel", url: "https://www.radarvirtuel.com/" }
  ];
  
  const feedersList = document.getElementById("feeders-list");
  
  feeders.forEach(feeder => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = feeder.url;
    a.textContent = feeder.name;
    li.appendChild(a);
    feedersList.appendChild(li);
  });