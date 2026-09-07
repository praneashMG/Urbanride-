$file = "d:\Bicycle\Bicycle\home2.html"
$c = Get-Content -Path $file -Raw

# 1. Remove `items-center` from the grid wrapper so cards can stretch
$c = $c -replace 'class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center"', 'class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"'

# 2. Add `flex flex-col h-full` to each plan card
$c = $c -replace 'class="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 text-center shadow-sm hover:shadow-md transition"', 'class="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 text-center shadow-sm hover:shadow-md transition flex flex-col h-full"'
$c = $c -replace 'class="bg-white dark:bg-gray-900 p-8 rounded-3xl border-2 border-secondary text-center shadow-xl transform md:-translate-y-4 relative"', 'class="bg-white dark:bg-gray-900 p-8 rounded-3xl border-2 border-secondary text-center shadow-xl transform md:-translate-y-4 relative flex flex-col h-full"'

# 3. Add `mt-auto` to all "Select Plan" buttons
$c = $c -replace 'class="block w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-3 rounded-xl transition"', 'class="block w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-3 rounded-xl transition mt-auto"'
$c = $c -replace 'class="block w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl transition shadow-md"', 'class="block w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-xl transition shadow-md mt-auto"'

Set-Content -Path $file -Value $c
