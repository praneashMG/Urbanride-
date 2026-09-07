$files = "d:\Bicycle\Bicycle\booking.html", "d:\Bicycle\Bicycle\tours.html", "d:\Bicycle\Bicycle\locations.html", "d:\Bicycle\Bicycle\rules.html", "d:\Bicycle\Bicycle\experiences.html"
foreach ($f in $files) {
    if (Test-Path $f) {
        $content = Get-Content -Path $f -Raw
        $content = $content -replace '<section class="relative pt-32 pb-24 flex items-center justify-center text-center overflow-hidden bg-gray-900">', '<section class="relative h-[60vh] min-h-[400px] pt-24 pb-12 flex items-center justify-center text-center overflow-hidden bg-gray-900">'
        Set-Content -Path $f -Value $content
    }
}
