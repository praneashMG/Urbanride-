$files = "d:\Bicycle\Bicycle\admin-dashboard.html", "d:\Bicycle\Bicycle\user-dashboard.html"

foreach ($file in $files) {
    if (Test-Path $file) {
        $c = Get-Content -Path $file -Raw
        
        # 1. Add Favicon
        if (-not $c.Contains('favicon.svg')) {
            $c = $c -replace '(?i)</head>', "`n    <link rel=`"icon`" type=`"image/svg+xml`" href=`"favicon.svg`">`n</head>"
        }

        # 2. Update Header
        if ($file -match 'admin-dashboard') {
            $profileTitle = "SYSTEM ADMIN"
            $profileSubtitle = "HEADQUARTERS"
            $welcome = "Welcome back, Admin!"
            $welcomeSub = "Command Center &bull; Real-Time Facility Overview."
            $oldWelcomeTitle = "COMMAND CENTER"
            $oldWelcomeSub = "Real-Time Facility Overview."
        } else {
            $profileTitle = "RIDER PROFILE"
            $profileSubtitle = "ACTIVE MEMBER"
            $welcome = "Welcome back, John!"
            $welcomeSub = "Command Center &bull; Your Personal Cycling Dashboard."
            $oldWelcomeTitle = "COMMAND CENTER"
            $oldWelcomeSub = "Your Personal Cycling Dashboard."
        }

        $oldHeader = '(?s)<header class="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-6 z-20 flex-shrink-0 transition-colors">.*?</header>'
        $newHeader = @"
    <header class="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-3 sm:px-6 z-20 flex-shrink-0 transition-colors">
        <div class="flex items-center gap-2 sm:gap-4">
            <button id="mobile-menu-btn" class="md:hidden text-gray-700 dark:text-gray-300 p-2 focus:outline-none">
                <i class="fas fa-bars text-lg"></i>
            </button>
            <a href="index.html" class="flex items-center gap-1 sm:gap-2">
                <i class="fas fa-bicycle text-secondary text-xl sm:text-2xl"></i>
                <span class="text-lg sm:text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase">URBAN<span class="text-secondary">RIDE</span></span>
            </a>
        </div>
        <div class="flex items-center gap-2 sm:gap-3">
            <button onclick="document.body.classList.toggle('rtl'); document.documentElement.setAttribute('dir', document.body.classList.contains('rtl') ? 'rtl' : 'ltr')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-bold px-2 py-1.5 sm:px-3 rounded border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm uppercase tracking-widest hidden min-[360px]:block">
                RTL
            </button>
            <button onclick="document.documentElement.classList.toggle('dark')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm">
                <i class="fas fa-moon text-[10px]"></i>
            </button>
            <div class="flex items-center gap-2 sm:gap-3 border-l border-gray-200 dark:border-gray-700 pl-2 sm:pl-4 ml-1 sm:ml-2">
                <div class="text-right hidden sm:block">
                    <p class="text-xs font-bold text-gray-900 dark:text-white leading-none mb-1">$profileTitle</p>
                    <p class="text-[10px] text-primary font-bold leading-none tracking-widest">$profileSubtitle</p>
                </div>
                <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-green-50 dark:bg-gray-800 flex items-center justify-center text-primary border border-green-100 dark:border-gray-700">
                    <i class="fas fa-shield-alt sm:text-sm text-xs"></i>
                </div>
            </div>
        </div>
    </header>
"@
        $c = [regex]::Replace($c, $oldHeader, $newHeader)

        # 3. Update Welcome texts
        $c = $c -replace "<h1 class=`"text-3xl font-medium text-gray-900 dark:text-white mb-1`">$oldWelcomeTitle</h1>", "<h1 class=`"text-3xl font-medium text-gray-900 dark:text-white mb-1`">$welcome</h1>"
        $c = $c -replace "<p class=`"text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase`">$oldWelcomeSub</p>", "<p class=`"text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase`">$welcomeSub</p>"

        # 4. Update Sidebar classes
        $oldAsideClass = 'w-56 lg:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col justify-between py-6 hidden md:flex transition-colors'
        $newAsideClass = 'w-56 lg:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between py-6 fixed md:relative top-0 left-0 z-50 md:z-0 h-full shadow-2xl md:shadow-none transform -translate-x-full md:translate-x-0 transition-transform duration-300'
        $c = $c -replace '<aside class="' + $oldAsideClass + '">', '<aside id="dashboard-sidebar" class="' + $newAsideClass + '">'

        # 5. Insert Mobile Logo in Sidebar right after <div class="pr-4">
        $mobileLogo = @"
<div class="pr-4">
                <!-- Mobile Logo in Sidebar -->
                <div class="md:hidden flex items-center justify-between px-4 mt-2 mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
                    <div class="flex items-center gap-1.5 flex-shrink-0">
                        <i class="fas fa-bicycle text-secondary text-xl"></i>
                        <span class="text-lg font-bold tracking-wider text-gray-900 dark:text-white uppercase">URBAN<span class="text-secondary">RIDE</span></span>
                    </div>
                    <button id="close-sidebar-btn" class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors focus:outline-none flex-shrink-0 ml-1">
                        <i class="fas fa-times text-sm"></i>
                    </button>
                </div>
"@
        $c = $c -replace '<div class="pr-4">', $mobileLogo

        # 6. Add JS overlay at the bottom
        $jsSnippet = @"
    <!-- Mobile Sidebar Overlay -->
    <div id="sidebar-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-30 hidden md:hidden"></div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('mobile-menu-btn');
            const sidebar = document.getElementById('dashboard-sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            const closeBtn = document.getElementById('close-sidebar-btn');

            if (btn && sidebar && overlay) {
                function toggleSidebar() {
                    sidebar.classList.toggle('-translate-x-full');
                    overlay.classList.toggle('hidden');
                }
                btn.addEventListener('click', toggleSidebar);
                if(closeBtn) closeBtn.addEventListener('click', toggleSidebar);
                overlay.addEventListener('click', toggleSidebar);
            }
        });
    </script>
</body>
"@
        if (-not $c.Contains('id="sidebar-overlay"')) {
            $c = $c -replace '</body>', $jsSnippet
        }
        
        Set-Content -Path $file -Value $c
    }
}
