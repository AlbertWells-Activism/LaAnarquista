// Function to load HTML files and turn them into <article> elements
function loadArticlesFromHTML() {
    const files = ["article1.html", "article2.html", "article3.html"]; // Array of file names
    const container = document.getElementById('gridContainerArticles'); // The container where articles will go

    files.forEach(file => {
        fetch(file) // Fetch the HTML file
            .then(response => response.text()) // Convert response to text
            .then(html => {
                // Create a new article element
                const articleElement = document.createElement('article');
                
                // Set the content of the article to the loaded HTML content
                articleElement.innerHTML = html;

                // Optionally, you can wrap the content inside an <article> tag if it's not already wrapped
                // Example of additional wrapping (if needed)
                if (!articleElement.querySelector('h2')) {
                    const heading = document.createElement('h2');
                    heading.textContent = "Article Title"; // You can extract the title dynamically or use a default one
                    articleElement.prepend(heading);
                }

                // Append the article to the grid container
                container.appendChild(articleElement);
            })
            .catch(error => {
                console.error(`Failed to load ${file}:`, error);
            });
    });
}

// Call the function to load articles
loadArticlesFromHTML();
