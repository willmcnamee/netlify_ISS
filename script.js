async function fetchISS() {
    const url = "https://api.wheretheiss.at/v1/satellites/25544";

    try {
        const response = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();

        // Build HTML for each field
        const html = `
            <div class="data-field"><span class="field-label">Latitude:</span> ${data.latitude}</div>
            <div class="data-field"><span class="field-label">Longitude:</span> ${data.longitude}</div>
            <div class="data-field"><span class="field-label">Altitude:</span> ${data.altitude} km</div>
            <div class="data-field"><span class="field-label">Velocity:</span> ${data.velocity} km/h</div>
            <div class="data-field"><span class="field-label">Visibility:</span> ${data.visibility}</div>
            <div class="data-field"><span class="field-label">Footprint:</span> ${data.footprint} km</div>
            <div class="data-field"><span class="field-label">Timestamp:</span> ${data.timestamp}</div>
            <div class="data-field"><span class="field-label">Day Number:</span> ${data.daynum}</div>
            <div class="data-field"><span class="field-label">Solar Latitude:</span> ${data.solar_lat}</div>
            <div class="data-field"><span class="field-label">Solar Longitude:</span> ${data.solar_lon}</div>
        `;

        document.getElementById("output").innerHTML = html;

    } catch (err) {
        document.getElementById("output").textContent =
            "Error fetching ISS data: " + err;
    }
}

// Fetch immediately and refresh every 5 seconds
fetchISS();
setInterval(fetchISS, 5000);