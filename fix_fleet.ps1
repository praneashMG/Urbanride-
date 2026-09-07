$file = "d:\Bicycle\Bicycle\fleet.html"
$c = Get-Content -Path $file -Raw

# 1. Fix the "Book Now" buttons overlapping the price by removing the injected "block text-center w-full"
$c = $c -replace 'mt-auto block text-center w-full', ''

# 2. Fix the overflow issue in the hero section by changing the filter bar
# It was: class="bg-white/10 backdrop-blur-md p-2 rounded-full inline-flex border border-white/20 shadow-xl max-w-full overflow-x-auto"
# Change to: class="bg-white/10 backdrop-blur-md p-2 md:rounded-full rounded-2xl flex border border-white/20 shadow-xl w-full md:w-auto overflow-x-auto hide-scrollbar gap-2"
$oldFilter = 'class="bg-white/10 backdrop-blur-md p-2 rounded-full inline-flex border border-white/20 shadow-xl max-w-full overflow-x-auto"'
$newFilter = 'class="bg-white/10 backdrop-blur-md p-3 md:rounded-full rounded-2xl flex md:inline-flex justify-start border border-white/20 shadow-xl w-full overflow-x-auto gap-2"'
$c = $c -replace $oldFilter, $newFilter

# Let's also ensure the main hero container doesn't overflow by adding overflow-hidden if needed, but it already has overflow-hidden on the section.

# 3. Fix the list items for Child Seats
$oldLi1 = '<li class="flex items-center text-gray-700 dark:text-gray-300 font-medium">\s*<i class="fas fa-plus-circle text-primary mr-3"></i> Rear Child Seats \(Up to 40 lbs\) <span class="ml-auto text-sm text-gray-500">\+\$5/day</span>\s*</li>'
$newLi1 = @"
                    <li class="flex items-start justify-between text-gray-700 dark:text-gray-300 font-medium">
                        <div class="flex items-start"><i class="fas fa-plus-circle text-primary mr-3 mt-1 flex-shrink-0"></i> <span>Rear Child Seats (Up to 40 lbs)</span></div>
                        <span class="text-sm text-gray-500 ml-4 mt-1 whitespace-nowrap">+$5/day</span>
                    </li>
"@
$c = $c -replace $oldLi1, $newLi1

$oldLi2 = '<li class="flex items-center text-gray-700 dark:text-gray-300 font-medium">\s*<i class="fas fa-plus-circle text-primary mr-3"></i> Double Cargo Trailers <span class="ml-auto text-sm text-gray-500">\+\$15/day</span>\s*</li>'
$newLi2 = @"
                    <li class="flex items-start justify-between text-gray-700 dark:text-gray-300 font-medium">
                        <div class="flex items-start"><i class="fas fa-plus-circle text-primary mr-3 mt-1 flex-shrink-0"></i> <span>Double Cargo Trailers</span></div>
                        <span class="text-sm text-gray-500 ml-4 mt-1 whitespace-nowrap">+$15/day</span>
                    </li>
"@
$c = $c -replace $oldLi2, $newLi2

Set-Content -Path $file -Value $c
