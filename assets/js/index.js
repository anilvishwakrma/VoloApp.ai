//  function toggleSidebar() {
//      document.querySelector('.sidebar').classList.toggle('closed');
//  }

// Initialize Map
var map = L.map('map').setView([40.7128, -74.0060], 12);

// Add Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Initialize Marker Cluster Group
var markers = L.markerClusterGroup();

// Location Data
var locations = [{
        coords: [40.730610, -73.935242],
        title: "🏕 Activity: City Tour - Downtown"
    },
    {
        coords: [40.752726, -73.977229],
        title: "🎟 Event: Music Festival - Central Park"
    },
    {
        coords: [40.706192, -74.009160],
        title: "🛠 Service: Barbershop - Main Street"
    },
    {
        coords: [40.712776, -74.005974],
        title: "🛍 Product: Handcrafted Jewelry - Market Square"
    }
];

// Add Markers to Cluster Group
function addMarkers() {
    markers.clearLayers();
    locations.forEach(location => {
        var marker = L.marker(location.coords).bindPopup(location.title);
        markers.addLayer(marker);
    });
    map.addLayer(markers);
}

// Add Initial Markers
addMarkers();

// Reload Map Function
function reloadMap() {
    map.setView([40.7128, -74.0060], 12);
    addMarkers();
}

$('.Gallery_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})


// ============ bootsrap tool =======
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// DOMContentLoaded इवेंट का उपयोग करना
document.addEventListener('DOMContentLoaded', function () {
    // आपका जावास्क्रिप्ट कोड यहाँ
    console.log('DOM पूरी तरह से लोड हो गया है!');
    // ... अपने तत्वों के साथ इंटरैक्ट करें
});

// या लोड इवेंट का उपयोग करना (सभी संसाधन, जैसे चित्र, लोड होने के बाद)
window.addEventListener('load', function () {
    console.log('पेज और सभी संसाधन लोड हो गए हैं!');
    // ...
});

alert("check")