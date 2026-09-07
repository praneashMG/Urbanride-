$adminFile = "d:\Bicycle\Bicycle\admin-dashboard.html"
$userFile = "d:\Bicycle\Bicycle\user-dashboard.html"
$files = $adminFile, $userFile

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw
        
        $oldPattern = '(?s)<div class="md:hidden flex items-center justify-between px-6 mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">.*?<button id="close-sidebar-btn".*?>.*?</div>\s*</div>'
        
        $newLogoBlock = @"
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
        $content = $content -replace $oldPattern, $newLogoBlock
        Set-Content -Path $file -Value $content
    }
}
