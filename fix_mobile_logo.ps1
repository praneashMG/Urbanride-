$adminFile = "d:\Bicycle\Bicycle\admin-dashboard.html"
$userFile = "d:\Bicycle\Bicycle\user-dashboard.html"
$files = $adminFile, $userFile

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw
        
        # 1. Un-hide the logo text in header
        $content = $content -replace '<span class="text-lg sm:text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase hidden sm:block">URBAN<span class="text-secondary">RIDE</span></span>', '<span class="text-lg sm:text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase">URBAN<span class="text-secondary">RIDE</span></span>'
        
        # 2. Add full logo inside sidebar if not already present
        if (-not $content.Contains('md:hidden flex items-center gap-2 px-6 mb-6')) {
            $mobileLogo = @"
<aside id="dashboard-sidebar" class="w-56 lg:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between py-6 absolute md:relative z-40 h-full transform -translate-x-full md:translate-x-0 transition-transform duration-300">
            <div class="pr-4">
                <!-- Mobile Logo in Sidebar -->
                <div class="md:hidden flex items-center gap-2 px-6 mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
                    <i class="fas fa-bicycle text-secondary text-2xl"></i>
                    <span class="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase">URBAN<span class="text-secondary">RIDE</span></span>
                </div>
"@
            $content = $content -replace '<aside id="dashboard-sidebar".*?>\s*<div class="pr-4">', $mobileLogo
        }
        
        Set-Content -Path $file -Value $content
    }
}
