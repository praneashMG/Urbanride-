$file = "d:\Bicycle\Bicycle\booking.html"
if (Test-Path $file) {
    $c = Get-Content -Path $file -Raw
    $c = $c -replace 'class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl pl-10 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer"', 'class="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl pl-10 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer dark:[color-scheme:dark]"'
    Set-Content -Path $file -Value $c
}
