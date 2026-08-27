const fs = require('fs');
const path = require('path');

const folder = 'c:\\Bicycle';

const getDashboardHTML = (isAdmin) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UrbanRide - ${isAdmin ? 'Admin' : 'User'} Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
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
</head>
<body class="bg-gray-50 dark:bg-gray-900 font-sans transition-colors overflow-hidden h-screen flex flex-col text-gray-800 dark:text-gray-200">

    <!-- Top Header -->
    <header class="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-6 z-20 flex-shrink-0 transition-colors">
        <a href="index.html" class="flex items-center gap-2">
            <i class="fas fa-bicycle text-primary text-2xl"></i>
            <span class="text-xl font-medium tracking-widest text-gray-900 dark:text-white uppercase">URBAN<span class="text-primary font-bold">RIDE</span></span>
        </a>
        <div class="flex items-center gap-3">
            <button onclick="document.body.classList.toggle('rtl'); document.documentElement.setAttribute('dir', document.body.classList.contains('rtl') ? 'rtl' : 'ltr')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold px-3 py-1.5 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm uppercase tracking-widest">
                RTL
            </button>
            <button onclick="document.documentElement.classList.toggle('dark')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 w-8 h-8 rounded flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm">
                <i class="fas fa-moon text-[10px]"></i>
            </button>
            <div class="flex items-center gap-3 border-l border-gray-200 dark:border-gray-700 pl-4 ml-2">
                <div class="text-right hidden sm:block">
                    <p class="text-xs font-bold text-gray-900 dark:text-white leading-none mb-1">${isAdmin ? 'SYSTEM ADMIN' : 'RIDER PROFILE'}</p>
                    <p class="text-[10px] text-primary font-bold leading-none tracking-widest">${isAdmin ? 'HEADQUARTERS' : 'ACTIVE MEMBER'}</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-green-50 dark:bg-gray-800 flex items-center justify-center text-primary border border-green-100 dark:border-gray-700">
                    <i class="fas ${isAdmin ? 'fa-shield-alt' : 'fa-user'} text-sm"></i>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Layout -->
    <div class="flex flex-1 overflow-hidden">
        <!-- Sidebar -->
        <aside class="w-56 lg:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col justify-between py-6 hidden md:flex transition-colors">
            <div class="px-4">
                <h3 class="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-4 pl-2">Management</h3>
                <nav class="space-y-1">
                    <a href="#" class="flex items-center px-4 py-3 bg-green-50 dark:bg-green-900 text-primary dark:text-green-400 border-l-4 border-primary rounded-r-lg font-bold text-sm transition-colors">
                        <i class="fas fa-chart-line w-5 mr-2"></i> Overview
                    </a>
                    <a href="#" class="flex items-center px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium text-sm ml-1 transition-colors">
                        <i class="fas ${isAdmin ? 'fa-users' : 'fa-bicycle'} w-5 mr-2"></i> ${isAdmin ? 'Members' : 'My Rentals'}
                    </a>
                    <a href="#" class="flex items-center justify-between px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium text-sm ml-1 transition-colors">
                        <div class="flex items-center"><i class="fas ${isAdmin ? 'fa-calendar-alt' : 'fa-map-marked-alt'} w-5 mr-2"></i> ${isAdmin ? 'Fleet' : 'Saved Tours'}</div>
                        <span class="bg-primary text-white text-[9px] font-bold px-1.5 py-0.5 rounded">LIVE</span>
                    </a>
                    <a href="#" class="flex items-center px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium text-sm ml-1 transition-colors">
                        <i class="fas ${isAdmin ? 'fa-dollar-sign' : 'fa-credit-card'} w-5 mr-2"></i> ${isAdmin ? 'Revenue' : 'Payments'}
                    </a>
                    <a href="#" class="flex items-center px-4 py-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium text-sm ml-1 transition-colors">
                        <i class="fas fa-cog w-5 mr-2"></i> Settings
                    </a>
                </nav>
            </div>
            <div class="px-6 mt-auto">
                <a href="login.html" class="w-full flex justify-center items-center gap-2 bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 font-bold text-xs uppercase tracking-widest py-3 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition border border-red-100 dark:border-red-800/50">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </a>
            </div>
        </aside>

        <!-- Main Content Scrollable -->
        <main class="flex-1 overflow-y-auto p-6 lg:p-10 bg-white dark:bg-gray-900 transition-colors">
            
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                <div>
                    <h1 class="text-3xl font-medium text-gray-900 dark:text-white mb-1">COMMAND CENTER</h1>
                    <p class="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase">${isAdmin ? 'Real-Time Facility Overview.' : 'Your Personal Cycling Dashboard.'}</p>
                </div>
                <button class="bg-primary hover:bg-green-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-md transition flex items-center gap-2">
                    <i class="fas ${isAdmin ? 'fa-user-plus' : 'fa-bicycle'}"></i> ${isAdmin ? 'Add Member' : 'New Booking'}
                </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <!-- Card 1 -->
                <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 transition-colors">
                    <div class="flex justify-between items-start">
                        <div class="w-10 h-10 rounded-lg bg-green-50 dark:bg-gray-700 text-primary dark:text-green-400 flex items-center justify-center text-lg">
                            <i class="fas ${isAdmin ? 'fa-users' : 'fa-biking'}"></i>
                        </div>
                        ${isAdmin ? '<span class="bg-green-50 dark:bg-green-900 text-primary dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded">+12%</span>' : ''}
                    </div>
                    <div>
                        <p class="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">${isAdmin ? 'Active Members' : 'Active Rental'}</p>
                        <h3 class="text-3xl font-medium text-gray-900 dark:text-white">${isAdmin ? '2,450' : '2 Hrs Left'}</h3>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 transition-colors">
                    <div class="flex justify-between items-start">
                        <div class="w-10 h-10 rounded-lg bg-yellow-50 dark:bg-gray-700 text-secondary dark:text-yellow-500 flex items-center justify-center text-lg">
                            <i class="fas ${isAdmin ? 'fa-chart-bar' : 'fa-route'}"></i>
                        </div>
                        ${isAdmin ? '<span class="bg-green-50 dark:bg-green-900 text-primary dark:text-green-400 text-[10px] font-bold px-2 py-1 rounded">+8.4%</span>' : ''}
                    </div>
                    <div>
                        <p class="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">${isAdmin ? 'Monthly Revenue (MRR)' : 'Total Distance'}</p>
                        <h3 class="text-3xl font-medium text-gray-900 dark:text-white">${isAdmin ? '$124k' : '48 Miles'}</h3>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 transition-colors">
                    <div class="flex justify-between items-start">
                        <div class="w-10 h-10 rounded-lg bg-gray-900 dark:bg-gray-700 text-white flex items-center justify-center text-lg">
                            <i class="fas ${isAdmin ? 'fa-calendar-check' : 'fa-ticket-alt'}"></i>
                        </div>
                    </div>
                    <div>
                        <p class="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">${isAdmin ? 'Rentals Today' : 'Upcoming Tours'}</p>
                        <h3 class="text-3xl font-medium text-gray-900 dark:text-white">${isAdmin ? '112' : '1'}</h3>
                    </div>
                </div>
                <!-- Card 4 -->
                <div class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 transition-colors">
                    <div class="flex justify-between items-start">
                        <div class="w-10 h-10 rounded-lg bg-red-50 dark:bg-gray-700 text-red-500 flex items-center justify-center text-lg">
                            <i class="fas ${isAdmin ? 'fa-clipboard-list' : 'fa-star'}"></i>
                        </div>
                        <span class="bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 text-[10px] font-bold px-2 py-1 rounded">${isAdmin ? 'Action Needed' : 'Gold Tier'}</span>
                    </div>
                    <div>
                        <p class="text-[10px] font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-1">${isAdmin ? 'Pending Maintenance' : 'Loyalty Points'}</p>
                        <h3 class="text-3xl font-medium text-gray-900 dark:text-white">${isAdmin ? '4' : '1,250'}</h3>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <!-- Recent Table -->
                <div class="xl:col-span-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden transition-colors">
                    <div class="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-700">
                        <h3 class="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide">${isAdmin ? 'Recent Signups' : 'Recent Activity'}</h3>
                        <a href="#" class="text-[10px] font-bold text-primary dark:text-green-400 uppercase tracking-widest hover:underline">View All</a>
                    </div>
                    <div class="divide-y divide-gray-100 dark:divide-gray-700">
                        <!-- Row 1 -->
                        <div class="flex items-center justify-between p-4 px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center text-xs">${isAdmin ? 'JD' : '<i class="fas fa-bicycle"></i>'}</div>
                                <div>
                                    <p class="text-sm font-bold text-gray-900 dark:text-white">${isAdmin ? 'John Doe' : 'City Cruiser Rental'}</p>
                                    <p class="text-[10px] text-gray-500 dark:text-gray-400">${isAdmin ? 'john.d@example.com' : 'Central Station Hub'}</p>
                                </div>
                            </div>
                            <div class="text-xs font-bold text-secondary dark:text-yellow-500 uppercase tracking-wider w-32 hidden sm:block">${isAdmin ? 'Annual Elite' : 'Completed'}</div>
                            <div class="text-[10px] text-gray-400 w-20 text-right">2 mins ago</div>
                        </div>
                        <!-- Row 2 -->
                        <div class="flex items-center justify-between p-4 px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center text-xs">${isAdmin ? 'SM' : '<i class="fas fa-map"></i>'}</div>
                                <div>
                                    <p class="text-sm font-bold text-gray-900 dark:text-white">${isAdmin ? 'Sarah Miller' : 'Sunset Guided Tour'}</p>
                                    <p class="text-[10px] text-gray-500 dark:text-gray-400">${isAdmin ? 's.miller@example.com' : 'Beachfront Rentals'}</p>
                                </div>
                            </div>
                            <div class="text-xs font-bold text-primary dark:text-green-400 uppercase tracking-wider w-32 hidden sm:block">${isAdmin ? 'Monthly Flex' : 'Booked'}</div>
                            <div class="text-[10px] text-gray-400 w-20 text-right">15 mins ago</div>
                        </div>
                        <!-- Row 3 -->
                        <div class="flex items-center justify-between p-4 px-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center text-xs">${isAdmin ? 'TR' : '<i class="fas fa-bolt"></i>'}</div>
                                <div>
                                    <p class="text-sm font-bold text-gray-900 dark:text-white">${isAdmin ? 'Tom Richards' : 'E-Bike Rental'}</p>
                                    <p class="text-[10px] text-gray-500 dark:text-gray-400">${isAdmin ? 'tom.r@example.com' : 'North Park Kiosk'}</p>
                                </div>
                            </div>
                            <div class="text-xs font-bold text-gray-800 dark:text-gray-300 uppercase tracking-wider w-32 hidden sm:block">${isAdmin ? 'Quarterly Pro' : 'Completed'}</div>
                            <div class="text-[10px] text-gray-400 w-20 text-right">1 hr ago</div>
                        </div>
                    </div>
                </div>
                
                <!-- Right Chart -->
                <div class="xl:col-span-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm p-6 flex flex-col justify-between transition-colors">
                    <div class="flex-grow flex items-center justify-center relative my-6">
                        <div class="w-48 h-48 rounded-full relative flex items-center justify-center">
                            <svg class="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <!-- Background circle -->
                                <circle cx="50" cy="50" r="44" stroke="currentColor" class="text-gray-100 dark:text-gray-700" stroke-width="12" fill="none"></circle>
                                <!-- Progress circle (65%) -->
                                <circle cx="50" cy="50" r="44" stroke="#15803D" stroke-width="12" fill="none" stroke-dasharray="276" stroke-dashoffset="96" stroke-linecap="round"></circle>
                            </svg>
                            <div class="text-center absolute">
                                <span class="text-4xl font-medium text-gray-900 dark:text-white">65%</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 border-t border-gray-100 dark:border-gray-700 pt-4 flex justify-between items-end">
                        <p class="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">${isAdmin ? 'Total Check-ins' : 'Monthly Goal'}</p>
                        <p class="text-sm font-bold text-gray-300 dark:text-gray-600">${isAdmin ? '142' : '100 mi'}</p>
                    </div>
                </div>
            </div>

        </main>
    </div>

</body>
</html>`;

fs.writeFileSync(path.join(folder, 'admin-dashboard.html'), getDashboardHTML(true), 'utf-8');
fs.writeFileSync(path.join(folder, 'user-dashboard.html'), getDashboardHTML(false), 'utf-8');

console.log('Dashboards successfully regenerated to match layout.');
