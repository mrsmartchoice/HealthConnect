// #comment: Added a client-side search functionality
document.getElementById("search-input").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const symtomCards = document.querySelectorAll(".symtom-card");
  const searchMessage = document.getElementById("search-message");

  let hasResults = false;

  symtomCards.forEach((card) => {
      const symptonH3 = card.querySelector("symptom-1").innerText.toLowerCase();
      const allParagraph = card.querySelector("symptom-2").innerText.toLowerCase();
      
      if (
          symptonH3.includes(query) ||
          allParagraph.includes(query) 
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
