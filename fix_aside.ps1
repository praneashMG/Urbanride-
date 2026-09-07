$files = "d:\Bicycle\Bicycle\admin-dashboard.html", "d:\Bicycle\Bicycle\user-dashboard.html"

foreach ($file in $files) {
    if (Test-Path $file) {
        $c = Get-Content -Path $file -Raw
        
        $newAsideClass = 'w-56 lg:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between py-6 fixed md:relative top-0 left-0 z-50 md:z-0 h-full shadow-2xl md:shadow-none transform -translate-x-full md:translate-x-0 transition-transform duration-300'
        
        $c = $c -replace '<aside class="w-56 lg:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-col justify-between py-6 hidden md:flex transition-colors">', ('<aside id="dashboard-sidebar" class="' + $newAsideClass + '">')
        
        Set-Content -Path $file -Value $c
    }
}
