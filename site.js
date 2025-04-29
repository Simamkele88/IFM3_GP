document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const themeToggle = document.getElementById('themeToggle');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const currentDateElement = document.getElementById('current-date');
    const navItems = document.querySelectorAll('.nav-item');
    const sidebar = document.querySelector('.sidebar');

    // ====================
    // INITIALIZE DATE
    // ====================
    const updateDate = () => {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        if (currentDateElement) {
            currentDateElement.textContent = new Date().toLocaleDateString('en-US', options);
        }
    };

    // ====================
    // SETUP NAVIGATION
    // ====================
    const setupNavigation = () => {
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile sidebar if open
                if (sidebar && sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                }
            });
        });
    };

    // ====================
    // MOBILE MENU TOGGLE
    // ====================
    const setupMobileMenu = () => {
        if (mobileMenuToggle && sidebar) {
            mobileMenuToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                sidebar.classList.toggle('active');
            });
        }
        
        // Close when clicking outside
        document.addEventListener('click', () => {
            if (sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    };

    // ====================
    // INITIALIZE APP
    // ====================
    const initApp = () => {
        updateDate();
        setupNavigation();
        initTheme();
        setupMobileMenu();
    };

    initApp();
});