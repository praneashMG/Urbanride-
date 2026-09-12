
$f = "d:\Bicycle\Bicycle\bike-detail.html"
$c = Get-Content -Path $f -Raw
$c = $c -replace 'class="bg-secondary text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-yellow-500 transition shadow-lg uppercase tracking-wide text-sm w-full md:w-auto"', 'class="bg-primary hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full transition shadow-lg uppercase tracking-wide text-sm w-full md:w-auto"'
Set-Content -Path $f -Value $c

