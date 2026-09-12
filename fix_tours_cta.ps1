
$files = Get-ChildItem -Path "*.html"
foreach ($f in $files) {
    $c = Get-Content -Path $f.FullName -Raw
    $modified = $false
    
    # "View Itinerary" buttons
    if ($c -match ">View Itinerary</a>") {
        $c = $c -replace 'class="[^"]*bg-gray-900[^"]*"(.*?)>View Itinerary</a>', 'class="block text-center bg-primary hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition uppercase text-xs tracking-wider w-full">View Itinerary</a>'
        $modified = $true
    }

    # "Book This Tour" buttons
    if ($c -match ">Book This Tour</button>") {
        $c = $c -replace 'class="[^"]*bg-secondary[^"]*"(.*?)>Book This Tour</button>', 'class="w-full bg-primary text-white font-bold py-3 rounded hover:bg-green-700 transition shadow">Book This Tour</button>'
        $modified = $true
    }
    
    if ($modified) {
        Set-Content -Path $f.FullName -Value $c
    }
}

