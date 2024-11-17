// #comment: Added a client-side search functionality
document.getElementById("search-input").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const resourceCards = document.querySelectorAll(".resource-card");
    const searchMessage = document.getElementById("search-message");

    let hasResults = false;

    resourceCards.forEach((card) => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        const address = card.querySelector("p:nth-of-type(1)").innerText.toLowerCase();
        const state = card.querySelector("p:nth-of-type(2)").innerText.toLowerCase();

        if (
            title.includes(query) ||
            address.includes(query) ||
            state.includes(query)
        ) {
            card.style.display = "block";
            hasResults = true;
        } else {
            card.style.display = "none";
        }
    });

    // Show/hide the "No results" message
    searchMessage.style.display = hasResults ? "none" : "block";
});
