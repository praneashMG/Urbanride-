
$files = Get-ChildItem -Path "*.html"
foreach ($f in $files) {
    $c = Get-Content -Path $f.FullName -Raw
    $modified = $false
    
    # 1. Fix "Book Now" buttons to be primary
    if ($c -match ">Book Now</a>") {
        $c = $c -replace 'class="[^"]*bg-gray-200[^"]*"(.*?)>Book Now</a>', 'class="block w-full text-center bg-primary hover:bg-green-700 text-white font-bold py-3 rounded-xl transition duration-300 mt-auto">Book Now</a>'
        $c = $c -replace 'class="[^"]*bg-gray-900[^"]*"(.*?)>Book Now</a>', 'class="bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition uppercase text-xs tracking-wider shadow-md mt-auto block text-center w-full">Book Now</a>'
        $modified = $true
    }
    
    if ($modified) {
        Set-Content -Path $f.FullName -Value $c
    }
}

