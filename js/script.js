document.addEventListener('DOMContentLoaded', function() {
    const url = "https://9822-2804-14c-110-98c0-7112-6dc1-ca29-88c3.ngrok-free.app/"
    const apps = [
        { name: "Bone Age App", image: "img/app-1.jpg", link: url },
        { name: "Chest X-ray Report Generator (demo)", image: "img/app-4.jpg", link: "https://huggingface.co/spaces/eduardofarina/MultimodalCXray" },
        { name: "CT Abdomen Fat Segmentation (disabled)", image: "img/app-2.jpg", link: url },
        { name: "CT Chest GGO Quantification (disabled)", image: "img/app-3.jpg", link: url },
        // Add more apps here
    ];

    const appContainer = document.getElementById('app-container');
    const searchBox = document.getElementById('search-box');

    function displayApps(apps) {
        appContainer.innerHTML = '';
        apps.forEach(app => {
            const appDiv = document.createElement('div');
            appDiv.className = 'app-rectangle';
            appDiv.innerHTML = `
                <img src="${app.image}" alt="${app.name}">
                <p class="app-description">${app.name}</p>
            `;
            appDiv.addEventListener('click', () => window.location.href = app.link);
            appContainer.appendChild(appDiv);
        });
    }

    searchBox.addEventListener('input', function(e) {
        const filteredApps = apps.filter(app => app.name.toLowerCase().includes(e.target.value.toLowerCase()));
        displayApps(filteredApps);
    });

    displayApps(apps);
});
