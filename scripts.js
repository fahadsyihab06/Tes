
        const sidebar = document.querySelector('.sidebar');
        const menuToggle = document.querySelector('.menu-toggle');
        const toggleTheme = document.querySelector('.toggle-theme');
        const aboutLink = document.getElementById('about');
        const developerLink = document.getElementById('developer');
        const cekJodohLink = document.getElementById('cekJodoh');
        const tutorialLink = document.getElementById('tutorial');
        const aboutPopup = document.getElementById('aboutPopup');
        const developerPopup = document.getElementById('developerPopup');
        const tutorialPopup = document.getElementById('tutorialPopup');
        const popupOverlay = document.querySelector('.popup-overlay');
        const popupCloseButtons = document.querySelectorAll('.popup-close');
        const khodamContent = document.getElementById('khodamContent');
        const jodohContent = document.getElementById('jodohContent');

        let isDarkMode = false;

        // Toggle sidebar on menu icon click
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Toggle theme
        toggleTheme.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            isDarkMode = !isDarkMode;
        });

        // Show about popup
        aboutLink.addEventListener('click', () => {
            popupOverlay.style.display = 'block';
            aboutPopup.style.display = 'block';
        });

        // Show developer popup
        developerLink.addEventListener('click', () => {
            popupOverlay.style.display = 'block';
            developerPopup.style.display = 'block';
        });

        // Show tutorial popup
        tutorialLink.addEventListener('click', () => {
            popupOverlay.style.display = 'block';
            tutorialPopup.style.display = 'block';
        });

        // Show Cek Jodoh section
        cekJodohLink.addEventListener('click', () => {
            khodamContent.style.display = 'none';
            jodohContent.style.display = 'block';
        });

        // Close popups
        popupCloseButtons.forEach(button => {
            button.addEventListener('click', () => {
                popupOverlay.style.display = 'none';
                aboutPopup.style.display = 'none';
                developerPopup.style.display = 'none';
                tutorialPopup.style.display = 'none';
            });
        });

        popupOverlay.addEventListener('click', () => {
            popupOverlay.style.display = 'none';
            aboutPopup.style.display = 'none';
            developerPopup.style.display = 'none';
            tutorialPopup.style.display = 'none';
        });

        // Array of Khodam types
        const khodamTypes = [
            "Khodam Penjaga", 
            "Khodam Pembantu", 
            "Khodam Pelindung", 
            "Khodam Penyembuh", 
            "Khodam Pencerah", 
            "Khodam Pendamping"
            // tambahkan jenis khodam lain di sini
        ];

        // Function to generate random Khodam type
        function getRandomKhodam() {
            return khodamTypes[Math.floor(Math.random() * khodamTypes.length)];
        }

        // Cek Khodam form submission
        document.getElementById('khodamForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const birthdate = document.getElementById('birthdate').value;

            const randomKhodam = getRandomKhodam();

            const resultDiv = document.getElementById('result');
            resultDiv.textContent = `Nama: ${name}, Tanggal Lahir: ${birthdate}, Khodam: ${randomKhodam}`;
        });

        // Cek Jodoh form submission
        document.getElementById('jodohForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name1 = document.getElementById('name1').value.toLowerCase();
            const name2 = document.getElementById('name2').value.toLowerCase();

            const compatibility = Math.floor(Math.random() * 101); // Random percentage for simplicity

            const loveResultDiv = document.getElementById('loveResult');
            loveResultDiv.textContent = `Nama ${name1} dan ${name2} memiliki kecocokan sebesar ${compatibility}%`;
        });
  