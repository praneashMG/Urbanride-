const fs = require('fs');
const path = require('path');

const folder = 'c:\\Bicycle';
const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));

const newNavbar = `
    <!-- New Navbar -->
    <div class="w-full pt-4 px-4 sm:px-6 lg:px-8 absolute top-0 z-50">
        <nav class="bg-gray-100 rounded-[50px] shadow-sm flex items-center justify-between px-6 py-3 max-w-[1400px] mx-auto dark:bg-gray-900 transition-colors">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-2 flex-shrink-0">
                <i class="fas fa-bicycle text-secondary text-2xl"></i>
                <span class="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase">URBAN<span class="text-secondary">RIDE</span></span>
            </a>

            <!-- Desktop Links -->
            <div class="hidden xl:flex items-center space-x-3 flex-grow justify-center px-4 overflow-x-auto scrollbar-hide">
                <!-- HOME DROPDOWN -->
                <div class="relative group flex-shrink-0">
                    <button class="flex items-center text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary py-2">
                        HOME <i class="fas fa-chevron-down ml-1 text-[8px]"></i>
                    </button>
                    <div class="absolute left-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <a href="index.html" class="block px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Home 1</a>
                        <a href="index.html" class="block px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Home 2</a>
                    </div>
                </div>

                <a href="fleet.html" class="flex-shrink-0 text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition py-2">FLEET</a>
                <a href="bike-detail.html" class="flex-shrink-0 text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition py-2">BIKE DETAIL</a>
                <a href="booking.html" class="flex-shrink-0 text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition py-2">BOOKING</a>
                <a href="tours.html" class="flex-shrink-0 text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition py-2">TOURS</a>
                <a href="tour-detail.html" class="flex-shrink-0 text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition py-2">TOUR DETAIL</a>
                <a href="locations.html" class="flex-shrink-0 text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition py-2">LOCATIONS</a>
                <a href="rules.html" class="flex-shrink-0 text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition py-2">RULES</a>
                <a href="experiences.html" class="flex-shrink-0 text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition py-2">EXPERIENCES</a>
                <a href="about.html" class="flex-shrink-0 text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary transition py-2">ABOUT</a>

                <!-- DASHBOARD DROPDOWN -->
                <div class="relative group flex-shrink-0">
                    <button class="flex items-center text-[10px] font-bold text-gray-700 dark:text-gray-300 uppercase hover:text-secondary py-2">
                        DASHBOARD <i class="fas fa-chevron-down ml-1 text-[8px]"></i>
                    </button>
                    <div class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <a href="user-dashboard.html" class="block px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">User Dashboard</a>
                        <a href="admin-dashboard.html" class="block px-4 py-2 text-xs text-gray-700 dark:text-gray-300 hover:text-secondary hover:bg-gray-50 dark:hover:bg-gray-700">Admin Dashboard</a>
                    </div>
                </div>
            </div>

            <!-- Desktop Right Actions -->
            <div class="hidden xl:flex items-center space-x-2 flex-shrink-0">
                <button onclick="document.body.classList.toggle('rtl'); document.documentElement.setAttribute('dir', document.body.classList.contains('rtl') ? 'rtl' : 'ltr')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold px-3 py-2 rounded-full hover:bg-gray-50 transition shadow-sm uppercase tracking-widest border border-gray-200 dark:border-gray-700">
                    RTL
                </button>
                <button onclick="document.documentElement.classList.toggle('dark')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-50 transition shadow-sm border border-gray-200 dark:border-gray-700">
                    <i class="fas fa-moon text-xs"></i>
                </button>
                <a href="login.html" class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-gray-50 transition shadow-sm border border-gray-200 dark:border-gray-700 uppercase">
                    LOGIN
                </a>
                <a href="register.html" class="bg-secondary text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-yellow-600 transition shadow-sm uppercase">
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
            <div class="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
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
                        <a href="index.html" class="block text-sm text-gray-600 dark:text-gray-400">Home 1</a>
                        <a href="index.html" class="block text-sm text-gray-600 dark:text-gray-400">Home 2</a>
                    </div>
                </div>

                <a href="fleet.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Fleet</a>
                <a href="bike-detail.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Bike Detail</a>
                <a href="booking.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Booking</a>
                <a href="tours.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Tours</a>
                <a href="tour-detail.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Tour Detail</a>
                <a href="locations.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Locations</a>
                <a href="rules.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Rules</a>
                <a href="experiences.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">Experiences</a>
                <a href="about.html" class="block text-sm font-bold text-gray-800 dark:text-gray-200 uppercase border-b border-gray-200 dark:border-gray-800 pb-3">About Us</a>
                
                <!-- DASHBOARD DROPDOWN -->
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
            <div class="p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
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
    
    <style>
    /* Hide scrollbar for nav links container */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    </style>
    
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

files.forEach(file => {
    const filePath = path.join(folder, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace <div class="w-full pt-4 px-4 sm:px-6 lg:px-8 absolute top-0 z-50">...<script>...</script>
    // Since we used regex, it's safer to capture everything up to </script> after the mobile menu.
    // The previous injection ended with </script>. We can find the <!-- New Navbar --> and replace until the end of the script block.
    
    const startIndex = content.indexOf('<!-- New Navbar -->');
    const endIndex = content.lastIndexOf('</script>') + 9;
    
    if (startIndex !== -1 && endIndex !== -1) {
        content = content.substring(0, startIndex) + newNavbar + content.substring(endIndex);
        fs.writeFileSync(filePath, content, 'utf-8');
    }
});

console.log("Navbar replaced successfully with separate links.");
