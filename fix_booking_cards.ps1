$file = "d:\Bicycle\Bicycle\booking.html"
$c = Get-Content -Path $file -Raw

# 1. Result Item 1
$oldBlock1 = '(?s)<div class="flex-shrink-0 flex flex-col justify-center items-end border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700 pt-4 md:pt-0 md:pl-6 text-right w-full md:w-auto">\s*<p class="text-xs text-gray-500 uppercase font-bold mb-1">Total Price</p>\s*<p class="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">\$30<span class="text-sm text-gray-500 font-normal">\.00</span></p>\s*<button class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-secondary dark:hover:bg-secondary hover:text-black transition uppercase text-xs tracking-widest w-full">Select</button>\s*</div>'

$newBlock1 = @"
                <div class="flex-shrink-0 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700 pt-4 md:pt-0 md:pl-6 text-left md:text-right w-full md:w-auto">
                    <div class="mb-0 md:mb-4">
                        <p class="text-xs text-gray-500 uppercase font-bold mb-1">Total Price</p>
                        <p class="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-none">$30<span class="text-sm text-gray-500 font-normal">.00</span></p>
                    </div>
                    <button class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-3 px-6 md:px-8 rounded-full hover:bg-secondary dark:hover:bg-secondary hover:text-black transition uppercase text-xs tracking-widest w-auto md:w-full">Select</button>
                </div>
"@

# 2. Result Item 2
$oldBlock2 = '(?s)<div class="flex-shrink-0 flex flex-col justify-center items-end border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700 pt-4 md:pt-0 md:pl-6 text-right w-full md:w-auto">\s*<p class="text-xs text-gray-500 uppercase font-bold mb-1">Total Price</p>\s*<p class="text-3xl font-extrabold text-primary mb-4">\$70<span class="text-sm text-gray-500 font-normal">\.00</span></p>\s*<button class="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition uppercase text-xs tracking-widest shadow-md w-full"><i class="fas fa-check mr-2"></i>Selected</button>\s*</div>'

$newBlock2 = @"
                <div class="flex-shrink-0 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700 pt-4 md:pt-0 md:pl-6 text-left md:text-right w-full md:w-auto">
                    <div class="mb-0 md:mb-4">
                        <p class="text-xs text-gray-500 uppercase font-bold mb-1">Total Price</p>
                        <p class="text-2xl md:text-3xl font-extrabold text-primary leading-none">$70<span class="text-sm text-gray-500 font-normal">.00</span></p>
                    </div>
                    <button class="bg-primary text-white font-bold py-3 px-6 md:px-8 rounded-full hover:bg-green-700 transition uppercase text-xs tracking-widest shadow-md w-auto md:w-full"><i class="fas fa-check mr-2"></i>Selected</button>
                </div>
"@

$c = $c -replace $oldBlock1, $newBlock1
$c = $c -replace $oldBlock2, $newBlock2

Set-Content -Path $file -Value $c
