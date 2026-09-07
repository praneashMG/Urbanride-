$files = "d:\Bicycle\Bicycle\index.html", "d:\Bicycle\Bicycle\home2.html"

foreach ($f in $files) {
    if (Test-Path $f) {
        $c = Get-Content -Path $f -Raw
        
        # 1. Update the grid columns: md:grid-cols-4 -> md:grid-cols-2 lg:grid-cols-4
        $c = $c -replace 'class="grid grid-cols-1 md:grid-cols-4 gap-8 relative"', 'class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"'
        
        # 2. Hide the connecting line on tablet (change md:block to lg:block)
        $c = $c -replace 'class="hidden md:block absolute top-1/2 left-0 w-full h-0.5', 'class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5'
        
        Set-Content -Path $f -Value $c
    }
}
