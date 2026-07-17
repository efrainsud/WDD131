const idahoTemples = [
    {
        id: 1,
        name: "Idaho Falls Idaho Temple",
        city: "Idaho Falls",
        zip: "83402",
        image: "images/idaho-falls.jpeg",
        description: "Dedicated in 1945, this historic temple features a brilliant white exterior and sits beautifully along the banks of the Snake River.",
        extra: "Fun Fact: It holds the distinction of being the very first temple built in the state of Idaho."
    },
    {
        id: 2,
        name: "Boise Idaho Temple",
        city: "Boise",
        zip: "83704",
        image: "images/boise.jpg",
        description: "Serves Latter-day Saints in the bustling capital city area, showcasing a classic design with distinct spire peaks.",
        extra: "Fun Fact: It was the second temple constructed in Idaho, originally dedicated in 1984."
    },
    {
        id: 3,
        name: "Rexburg Idaho Temple",
        city: "Rexburg",
        zip: "83440",
        image: "images/rexburg.jpg",
        description: "Located right next to the BYU-Idaho campus, this beautiful quartz-crusted temple overlooks the entire Egin Bench.",
        extra: "Fun Fact: It features a progressive ordinance style design including a stunning garden room."
    },
    {
        id: 4,
        name: "Twin Falls Idaho Temple",
        city: "Twin Falls",
        zip: "83301",
        image: "images/twin-falls.jpg",
        description: "Situated near the majestic Snake River Canyon, featuring architectural motifs inspired by local Shoshone Falls.",
        extra: "Fun Fact: The exterior walls are decorated with beautiful linear patterns representing local vegetation."
    },
    {
        id: 5,
        name: "Meridian Idaho Temple",
        city: "Meridian",
        zip: "83646",
        image: "images/meridian.jpg",
        description: "A striking multi-story temple featuring a unique dome-like design and a beautiful cream-colored stone facade.",
        extra: "Fun Fact: Dedicated in 2017 to accommodate the massive population growth in the Treasure Valley."
    },
    {
        id: 6,
        name: "Pocatello Idaho Temple",
        city: "Pocatello",
        zip: "83201",
        image: "images/pocatello.jpg",
        description: "Perched high on the foothills of Pocatello, this elegant structure offers spectacular sweeping views of the entire valley.",
        extra: "Fun Fact: Dedicated in November 2021 as Idaho's sixth operating temple."
    },
    {
        id: 7,
        name: "Burley Idaho Temple",
        city: "Burley",
        zip: "83318",
        image: "images/burley.jpg",
        description: "A newly built temple serving members in Cassia and Minidoka counties, dedicated in early 2026.",
        extra: "Fun Fact: Its design incorporates subtle farming and agricultural elements typical of the Magic Valley."
    },
    {
        id: 8,
        name: "Montpelier Idaho Temple",
        city: "Montpelier",
        zip: "83254",
        image: "images/montpelier.jpg",
        description: "A beautiful temple constructed to bring sacred ordinances closer to the historic Bear Lake Valley community.",
        extra: "Fun Fact: Its dedication in late 2026 stands as a monument to the early pioneers who settled the region."
    },
    {
        id: 9,
        name: "Teton River Idaho Temple",
        city: "Rexburg",
        zip: "83440",
        image: "images/teton.jpg",
        description: "Idaho's second temple in Rexburg, currently under construction to meet the growing needs of the student and local community.",
        extra: "Fun Fact: Named after the nearby scenic Teton River."
    },
    {
        id: 10,
        name: "Coeur d'Alene Idaho Temple",
        city: "Coeur d'Alene",
        zip: "83814",
        image: "images/coeur-d'alene.jpg",
        description: "An officially announced temple set to bring a dedicated house of worship to members living in Northern Idaho.",
        extra: "Fun Fact: This temple will reduce travel times for members who previously traveled to Spokane, Washington."
    },
    {
        id: 11,
        name: "Caldwell Idaho Temple",
        city: "Caldwell",
        zip: "83605",
        image: "images/caldwell.jpg",
        description: "The 11th announced temple for the state of Idaho, planned to be the third built in the Boise metropolitan area.",
        extra: "Fun Fact: Officially announced by church leadership during the April 2025 General Conference."
    }
];

const templesGrid = document.getElementById('templesGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const modal = document.getElementById('detailsModal');
const closeModal = document.getElementById('closeModal');


function displayTemples(templesList) {
    templesGrid.innerHTML = "";

    if (templesList.length === 0) {
        templesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-weight: bold;">No temples found matching your search.</p>`;
        return;
    }

    templesList.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');

        card.innerHTML = `
            <img src="${temple.image}" alt="${temple.name}">
            <h3>${temple.name}</h3>
            <p>${temple.city}, ID</p>
            <button class="view-details-btn" onclick="showTempleDetails(${temple.id})">View Details</button>
        `;

        templesGrid.appendChild(card);
    });
}

function filterTemples() {
    const query = searchInput.value.toLowerCase().trim();

    const filtered = idahoTemples.filter(temple => {
        return temple.city.toLowerCase().includes(query) || temple.zip.includes(query);
    });

    displayTemples(filtered);
}

function showTempleDetails(id) {
    const temple = idahoTemples.find(t => t.id == id);
    
    if (temple) {
        document.getElementById('modalTitle').innerText = temple.name;
        document.getElementById('modalDesc').innerText = temple.description;
        document.getElementById('modalExtra').innerText = temple.extra;
        modal.classList.remove('hidden');
    }
}

searchButton.addEventListener('click', filterTemples);

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filterTemples();
    }
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    displayTemples(idahoTemples);
});