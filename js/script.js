document.addEventListener('DOMContentLoaded', function() {
    const url = "https://19c3-186-204-63-228.ngrok-free.app";
    const apps = [
        { name: "Bone Age Report Generator (Portuguese)", image: "img/app-1.jpg", link: url },
        { name: "Chest X-ray Report Generator (demo)", image: "img/app-4.jpg", link: "https://huggingface.co/spaces/eduardofarina/MultimodalCXray" },
        { name: "Screening Mammography - Cancer and Density (Ian Pan)", image: "img/app-6.jpg", link: "https://huggingface.co/spaces/ianpan/screening-mammography" },
        { name: "Bone Age with Heatmap (Ian Pan)", image: "img/app-1.jpg", link: "https://huggingface.co/spaces/ianpan/bone-age-greulich-and-pyle" },
        { name: "Chest X-ray (CXR) Pneumonia/Pneumothorax/Age/Sex/View/CTR (Ian Pan)", image: "img/app-5.jpg", link: "https://huggingface.co/spaces/ianpan/chest-x-ray-ai" },
        // { name: "", image: "img/app-.jpg", link: url },
        { name: "Total Segmentator", image: "img/app-7.jpg", link: "https://totalsegmentator.com/" },
        
        { name: "CT Abdomen Fat Segmentation (disabled)", image: "img/app-2.jpg", link: url },
        { name: "CT Chest GGO Quantification (disabled)", image: "img/app-3.jpg", link: url },
        // Add more apps here
        // { name: "", image: "img/app-.jpg", link: url },
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
