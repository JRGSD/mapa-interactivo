// Inicializar el mapa y configurarlo en un punto geográfico
const map = L.map('map').setView([40.4168, -3.7038], 13); // Coordenadas para Madrid, España

// Cargar el mapa base desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir un marcador al mapa
const marker = L.marker([40.4168, -3.7038]).addTo(map);

// Pop-up en el marcador
marker.bindPopup("<b>Madrid</b><br>¡Hola desde España!").openPopup();


