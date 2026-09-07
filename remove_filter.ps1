$file = "d:\Bicycle\Bicycle\fleet.html"
$c = Get-Content -Path $file -Raw

# Remove the filter bar wrapper
$filterRegex = '(?s)<!-- Quick search/filter bar wrapper to prevent horizontal overflow -->.*?</div>\s*</div>'
$c = $c -replace $filterRegex, ''

Set-Content -Path $file -Value $c
