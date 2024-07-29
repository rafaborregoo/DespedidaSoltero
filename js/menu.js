document.addEventListener("DOMContentLoaded", function() {
    loadContent('components/sidebar.html', 'menuContainer');
});

function loadContent(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the content:', error);
        });
}

function openNav() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.style.width = "250px";
    } else {
        console.error("Sidebar element not found");
    }
}

function closeNav() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.style.width = "0";
    } else {
        console.error("Sidebar element not found");
    }
}
