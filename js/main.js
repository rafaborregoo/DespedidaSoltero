// Función para cargar componentes HTML dinámicamente
document.addEventListener("DOMContentLoaded", function() {
    fetch('components/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menuContainer').innerHTML = data;
        });
    fetch('components/reviews.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('reviewsContainer').innerHTML = data;
        });
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerContainer').innerHTML = data;
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch('components/reviews.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('reviewContainer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the reviews:', error);
        });
});
