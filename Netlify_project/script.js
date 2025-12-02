// Fetch data from the Python Netlify Function
fetch("/.netlify/functions/load_ISS")
  .then(response => response.json())
  .then(data => {
    document.getElementById("output").textContent =
      JSON.stringify(data, null, 2);
  })
  .catch(err => {
    document.getElementById("output").textContent =
      "Error loading ISS data: " + err;
  });
