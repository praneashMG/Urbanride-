$files = "d:\Bicycle\Bicycle\booking.html", "d:\Bicycle\Bicycle\tours.html", "d:\Bicycle\Bicycle\locations.html", "d:\Bicycle\Bicycle\rules.html", "d:\Bicycle\Bicycle\experiences.html"
foreach ($f in $files) {
    if (Test-Path $f) {
        Write-Host "File: $f"
        Select-String -Path $f -Pattern '<section class="relative pt-32' -Context 0, 1 | Select-Object -ExpandProperty Line
    }
}
