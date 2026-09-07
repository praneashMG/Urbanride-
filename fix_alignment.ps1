$files = Get-ChildItem -Path "d:\Bicycle\Bicycle\*.html"

foreach ($f in $files) {
    $c = Get-Content -Path $f.FullName -Raw
    $modified = $false

    # 1. Fix Bike Cards with "Book Now" button
    # Outer container: add flex flex-col h-full
    # Inner p-6: add flex flex-col flex-grow
    # Book Now button: add mt-auto
    
    # We can do this with Regex if we carefully target the Book Now button wrapper.
    # The structure is:
    # <div class="bg-gray-50 ... group"> (maybe other classes)
    #   <div class="h-64 ...">...</div>
    #   <div class="p-6">
    #     ...
    #     <a href="..." class="... block w-full ...">Book Now</a>
    
    # Let's replace the button first to add mt-auto
    if ($c -match '>Book Now</a>') {
        # Ensure we don't duplicate mt-auto
        $c = $c -replace 'class="block w-full text-center bg-gray-200([^>]+)">Book Now</a>', 'class="block w-full text-center bg-gray-200$1 mt-auto">Book Now</a>'
        $c = $c -replace 'class="bg-primary text-white font-bold([^>]+)">Book Now</a>', 'class="bg-primary text-white font-bold$1 mt-auto block text-center w-full">Book Now</a>'
        $c = $c -replace 'class="bg-gray-900 dark:bg-white text-white([^>]+)">Book Now</a>', 'class="bg-gray-900 dark:bg-white text-white$1 mt-auto block text-center w-full">Book Now</a>'
        
        # Add flex flex-col h-full to group card
        $c = $c -replace 'class="([^"]*rounded-3xl[^"]*group[^"]*)"', 'class="$1 flex flex-col h-full"'
        # Make p-6 a flex-grow container
        # Note: some have p-6, some have p-6 md:p-8 etc. We can look for the div containing the h4
        $c = $c -replace '<div class="p-6">\s*<h4', '<div class="p-6 flex flex-col flex-grow">`n                    <h4'
        $c = $c -replace '<div class="p-6 md:p-8">\s*<h4', '<div class="p-6 md:p-8 flex flex-col flex-grow">`n                    <h4'
        
        $modified = $true
    }

    # 2. Fix Step Cards ("How UrbanRide Works")
    # <div class="text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative">
    # We want to add h-full
    if ($c -match 'text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative') {
        $c = $c -replace 'class="text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative"', 'class="text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 relative h-full flex flex-col"'
        $modified = $true
    }

    if ($modified) {
        Set-Content -Path $f.FullName -Value $c
    }
}
