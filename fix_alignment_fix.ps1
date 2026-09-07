$files = Get-ChildItem -Path "d:\Bicycle\Bicycle\*.html"

foreach ($f in $files) {
    $c = Get-Content -Path $f.FullName -Raw
    $c = $c -replace '<div class="p-6 flex flex-col flex-grow">`n                    <h4', "<div class=`"p-6 flex flex-col flex-grow`">`n                    <h4"
    $c = $c -replace '<div class="p-6 md:p-8 flex flex-col flex-grow">`n                    <h4', "<div class=`"p-6 md:p-8 flex flex-col flex-grow`">`n                    <h4"
    Set-Content -Path $f.FullName -Value $c
}
