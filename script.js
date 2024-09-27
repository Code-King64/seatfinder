// Event listener for the search input
document.getElementById("search").addEventListener("input", function() {
    const stadiumName = this.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    const resultsContainer = document.querySelector(".search-display");
    resultsContainer.innerHTML = ''; // Clear previous results

    // Check for partial matches
    if (stadiumName.includes("mcdonald jones")) {
        resultsContainer.innerHTML = `
            <div><a class="seat-button" href="seatA1.html">Seat 1</a></div>
            <div><a class="seat-button" href="seatA2.html">Seat 2</a></div>
        `;
    } else if (stadiumName.includes("stadium b")) {
        resultsContainer.innerHTML = `
            <div><a class="seat-button" href="seatB1.html">Seat 1</a></div>
            <div><a class="seat-button" href="seatB2.html">Seat 2</a></div>
        `;
    }
});
