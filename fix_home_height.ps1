$files = "d:\Bicycle\Bicycle\index.html", "d:\Bicycle\Bicycle\home2.html"
foreach ($f in $files) {
    if (Test-Path $f) {
        $c = Get-Content -Path $f -Raw
        $c = $c -replace '<section class="relative h-\[85vh\]', '<section class="relative h-screen'
        $c = $c -replace 'class="absolute inset-0 w-full h-full object-cover z-0"', 'class="absolute inset-0 w-full h-full object-cover object-top z-0"'
        Set-Content -Path $f -Value $c
    }
}
