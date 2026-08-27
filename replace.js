const fs = require('fs');
const path = require('path');

const folder = 'c:\\Bicycle';
const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));

const newNavbar = `
    <!-- New Navbar -->
    <div class="w-full pt-4 px-4 sm:px-6 lg:px-8 absolute top-0 z-50">
        <nav class="bg-gray-100 rounded-[50px] shadow-sm flex items-center justify-between px-6 py-3 max-w-7xl mx-auto dark:bg-gray-900 transition-colors">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-2">
                <i class="fas fa-bicycle text-secondary text-2xl"></i>
                <span class="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase">URBAN<span class="text-secondary">RIDE</span></span>
            </a>

            <!-- Desktop Links -->
            <div class="hidden xl:flex items-center space-x-6">
                <div class="relative group">
                    <button class="flex items-center text-xs font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary py-2">
                        HOME <i class="fas fa-chevron-down ml-1 text-[10px]"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <a href="index.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Home</a>
                        <a href="about.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">About Us</a>
                        <a href="experiences.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Experiences</a>
                    </div>
                </div>
                
                <div class="relative group">
                    <button class="flex items-center text-xs font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary py-2">
                        FLEET <i class="fas fa-chevron-down ml-1 text-[10px]"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <a href="fleet.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Fleet List</a>
                        <a href="bike-detail.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Bicycle Detail</a>
                        <a href="booking.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Rental Booking</a>
                    </div>
                </div>

                <div class="relative group">
                    <button class="flex items-center text-xs font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary py-2">
                        TOURS <i class="fas fa-chevron-down ml-1 text-[10px]"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <a href="tours.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Guided Tours</a>
                        <a href="tour-detail.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Tour Detail</a>
                    </div>
                </div>

                <a href="locations.html" class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition">LOCATIONS</a>
                <a href="rules.html" class="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition">RULES</a>

                <div class="relative group">
                    <button class="flex items-center text-xs font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary py-2">
                        DASHBOARD <i class="fas fa-chevron-down ml-1 text-[10px]"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <a href="user-dashboard.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">User Dashboard</a>
                        <a href="admin-dashboard.html" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Admin Dashboard</a>
                    </div>
                </div>
            </div>

            <!-- Desktop Right Actions -->
            <div class="hidden xl:flex items-center space-x-3">
                <button onclick="document.body.classList.toggle('rtl'); document.documentElement.setAttribute('dir', document.body.classList.contains('rtl') ? 'rtl' : 'ltr')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold px-3 py-2 rounded-full hover:bg-gray-50 transition shadow-sm uppercase tracking-widest border border-gray-200 dark:border-gray-700">
                    RTL
                </button>
                <button onclick="document.documentElement.classList.toggle('dark')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 transition shadow-sm border border-gray-200 dark:border-gray-700">
                    <i class="fas fa-moon text-xs"></i>
                </button>
                <a href="login.html" class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-50 transition shadow-sm border border-gray-200 dark:border-gray-700 uppercase">
                    LOGIN
                </a>
                <a href="register.html" class="bg-secondary text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-yellow-600 transition shadow-sm uppercase">
                    REGISTER
                </a>
            </div>

            <!-- Mobile Hamburger -->
            <button id="mobile-menu-btn" class="xl:hidden text-gray-700 dark:text-gray-300 focus:outline-none">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </nav>
    </div>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-black bg-opacity-50 z-[100] opacity-0 invisible transition-all duration-300">
        <div class="bg-gray-100 dark:bg-gray-900 w-[90%] max-w-sm h-full max-h-[90vh] mx-auto mt-[5vh] rounded-xl shadow-2xl flex flex-col transform -translate-y-10 transition-transform duration-300 overflow-hidden" id="mobile-menu-content">
            <!-- Header -->
            <div class="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
                <a href="index.html" class="flex items-center gap-2">
                    <i class="fas fa-bicycle text-secondary text-xl"></i>
                    <span class="text-lg font-bold tracking-wider text-gray-900 dark:text-white uppercase">URBAN<span class="text-secondary">RIDE</span></span>
                </a>
                <button id="close-menu-btn" class="text-gray-400 hover:text-red-500 transition bg-white dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <!-- Links -->
            <div class="flex-grow overflow-y-auto p-6 space-y-4">
                <!-- HOME DROPDOWN -->
                <div class="border-b border-gray-200 dark:border-gray-800 pb-3">
                    <button class="w-full flex justify-between items-center text-sm font-bold text-gray-800 dark:text-gray-200 uppercase focus:outline-none" onclick="document.getElementById('mobile-home').classList.toggle('hidden')">
                        HOME <i class="fas fa-plus text-[10px] text-secondary"></i>
                    </button>
                    <div id="mobile-home" class="hidden pl-4 pt-3 space-y-3">
                        <a href="index.html" class="block text-sm text-gray-600 dark:text-gray-400">Home</a>
                        <a href="about.html" class="block text-sm text-gray-600 dark:text-gray-400">About Us</a>
                        <a href="experiences.html" class="block text-sm text-gray-600 dark:text-gray-400">Experiences</a>
                    </div>
                </div>

                <a href="fleet.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Fleet</a>
                <a href="booking.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Booking</a>
                <a href="tours.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Guided Tours</a>
                <a href="locations.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Locations</a>
                <a href="rules.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Rules</a>
                
                <!-- Dashboard Accordion -->
                <div class="border-b border-gray-200 dark:border-gray-800 pb-3">
                    <button class="w-full flex justify-between items-center text-sm font-bold text-gray-800 dark:text-gray-200 uppercase focus:outline-none" onclick="document.getElementById('mobile-db').classList.toggle('hidden')">
                        DASHBOARD <i class="fas fa-plus text-[10px] text-secondary"></i>
                    </button>
                    <div id="mobile-db" class="hidden pl-4 pt-3 space-y-3">
                        <a href="user-dashboard.html" class="block text-sm text-gray-600 dark:text-gray-400">User Dashboard</a>
                        <a href="admin-dashboard.html" class="block text-sm text-gray-600 dark:text-gray-400">Admin Dashboard</a>
                    </div>
                </div>
            </div>

            <!-- Footer Actions -->
            <div class="p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div class="flex flex-col space-y-3 mb-4">
                    <a href="login.html" class="text-center bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-xs font-bold py-3 rounded-full uppercase border border-gray-200 dark:border-gray-600">Login</a>
                    <a href="register.html" class="text-center bg-secondary text-white text-xs font-bold py-3 rounded-full uppercase shadow-md">Register</a>
                </div>
                <div class="flex justify-center space-x-4">
                    <button onclick="document.body.classList.toggle('rtl'); document.documentElement.setAttribute('dir', document.body.classList.contains('rtl') ? 'rtl' : 'ltr')" class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold px-4 py-2.5 rounded-full uppercase tracking-widest flex items-center justify-center border border-gray-200 dark:border-gray-600">
                        RTL
                    </button>
                    <button onclick="document.documentElement.classList.toggle('dark')" class="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold uppercase border border-gray-200 dark:border-gray-600">
                        <i class="fas fa-moon"></i> DARK MODE
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <script>
        // Mobile Menu Logic
        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('mobile-menu-btn');
            const overlay = document.getElementById('mobile-menu');
            const content = document.getElementById('mobile-menu-content');
            const closeBtn = document.getElementById('close-menu-btn');

            if(btn && overlay && content && closeBtn) {
                function openMenu() {
                    overlay.classList.remove('opacity-0', 'invisible');
                    content.classList.remove('-translate-y-10');
                }

                function closeMenu() {
                    overlay.classList.add('opacity-0', 'invisible');
                    content.classList.add('-translate-y-10');
                }

                btn.addEventListener('click', openMenu);
                closeBtn.addEventListener('click', closeMenu);
                overlay.addEventListener('click', (e) => {
                    if(e.target === overlay) closeMenu();
                });
            }
        });
    </script>
`;

const tailwindConfig = `
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: '#15803D',
                        secondary: '#F59E0B'
                    }
                }
            }
        }
    </script>
`;

files.forEach(file => {
    const filePath = path.join(folder, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Add tailwind config
    if (!content.includes('tailwind.config')) {
        content = content.replace('</head>', tailwindConfig + '</head>');
    }
    
    // Adjust padding so absolute navbar doesn't cover content
    content = content.replace('<main class="flex-grow">', '<main class="flex-grow pt-24">');
    content = content.replace('<main class="flex-grow flex items-center justify-center py-12">', '<main class="flex-grow flex items-center justify-center pt-24 pb-12">');
    content = content.replace('<main class="flex-grow flex items-center justify-center">', '<main class="flex-grow flex items-center justify-center pt-24 pb-12">');
    
    // Remove old nav tag using regex
    content = content.replace(/<nav[\s\S]*?<\/nav>/, newNavbar);
    
    // Replace text globally
    content = content.replace(/CityBikes/g, 'UrbanRide');
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Navbar replaced successfully in " + files.length + " files.");
