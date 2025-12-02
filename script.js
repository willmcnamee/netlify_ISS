// Fetch ISS data and display it
async function fetchISS() {
    const url = "https://api.wheretheiss.at/v1/satellites/25544";

    try {
        const response = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0" }
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const our_data = await response.json();

        // If you want it in a "DataFrame-like" table, we can convert to array of objects
        const our_data_array = [our_data];

        // Display the JSON nicely
        document.getElementById("output").textContent =
            JSON.stringify(our_data_array, null, 2);

    } catch (err) {
        document.getElementById("output").textContent =
            "Error fetching ISS data: " + err;
    }
}

// Fetch immediately
fetchISS();

// Optional: auto-refresh every 5 seconds
setInterval(fetchISS, 5000);
