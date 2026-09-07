$adminFile = "d:\Bicycle\Bicycle\admin-dashboard.html"
$userFile = "d:\Bicycle\Bicycle\user-dashboard.html"
$files = $adminFile, $userFile

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw
        
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
        $content = $content -replace '(?s)<!-- Mobile Logo in Sidebar -->.*?</div>\s*<h3', $newMobileLogo
        Set-Content -Path $file -Value $content
    }
}
