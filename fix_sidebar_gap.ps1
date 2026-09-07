$adminFile = "d:\Bicycle\Bicycle\admin-dashboard.html"
$userFile = "d:\Bicycle\Bicycle\user-dashboard.html"
$files = $adminFile, $userFile

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw
        
        # Change absolute to fixed top-0 left-0 for mobile
        $oldAside = 'absolute md:relative z-40 h-full'
        $newAside = 'fixed md:relative top-0 left-0 z-50 md:z-0 h-full shadow-2xl md:shadow-none'
        $content = $content -replace $oldAside, $newAside
        
        $newMobileLogo = @"
<!-- Mobile Logo in Sidebar -->
                <div class="md:hidden flex items-center justify-between px-6 mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
                    <div class="flex items-center gap-2">
                        <i class="fas fa-bicycle text-secondary text-2xl"></i>
                        <span class="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase">URBAN<span class="text-secondary">RIDE</span></span>
                    </div>
                    <button id="close-sidebar-btn" class="text-gray-500 hover:text-red-500 focus:outline-none">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <h3
"@
        $content = $content -replace '(?s)<!-- Mobile Logo in Sidebar -->.*?</div>\s*</div>\s*<h3', $newMobileLogo
        
        # Make sure the close button is hooked up in JS
        if (-not $content.Contains('close-sidebar-btn')) {
            $content = $content -replace "btn\.addEventListener\('click', toggleSidebar\);", "btn.addEventListener('click', toggleSidebar);`n                document.getElementById('close-sidebar-btn')?.addEventListener('click', toggleSidebar);"
        }
        
        Set-Content -Path $file -Value $content
    }
}
