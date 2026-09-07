$file = "d:\Bicycle\Bicycle\fleet.html"
$c = Get-Content -Path $file -Raw

$regex = '(?s)<div class="fixed top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">\s*<i class="fas fa-bicycle text-9xl absolute -top-10 -left-10 transform -rotate-12"></i>\s*<i class="fas fa-bicycle text-9xl absolute bottom-10 right-10 transform rotate-12"></i>\s*</div>'
$c = $c -replace $regex, ''

Set-Content -Path $file -Value $c
