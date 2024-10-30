document.addEventListener("DOMContentLoaded", function() {
    
    const searchButton = document.querySelector(".btn-sm");
    const searchInput = document.getElementById("search");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.trim();
        if (query) {
            const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            window.location.href = youtubeSearchUrl;
        } else {
            alert("Please enter a search term.");
        }
    });
});
