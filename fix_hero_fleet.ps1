$file = "d:\Bicycle\Bicycle\fleet.html"
$c = Get-Content -Path $file -Raw

$oldHero = '(?s)<section class="relative pt-32 pb-24 flex items-center justify-center text-center overflow-hidden bg-gray-900">.*?</section>'
$newHero = @"
<section class="relative pt-32 pb-24 flex flex-col items-center justify-center text-center overflow-hidden bg-gray-900 w-full">
    <img src="assets/e11.jpg" class="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-overlay" alt="Bicycles lined up">
    <div class="relative z-10 px-4 md:px-8 w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight w-full">Our Premium <span class="text-secondary">Fleet</span></h1>
        <p class="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-8 w-full">From nimble city cruisers to high-performance e-bikes, every ride is meticulously maintained and ready for your next urban adventure.</p>
        
        <!-- Quick search/filter bar wrapper to prevent horizontal overflow -->
        <div class="w-full max-w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center md:justify-center justify-start">
            <div class="bg-white/10 backdrop-blur-md p-2 md:rounded-full rounded-2xl inline-flex border border-white/20 shadow-xl gap-2 flex-nowrap">
                <button class="bg-primary text-white font-bold py-2 px-6 rounded-full text-sm uppercase tracking-wider whitespace-nowrap flex-shrink-0">All Bikes</button>
                <button class="text-white hover:text-secondary font-bold py-2 px-6 rounded-full text-sm uppercase tracking-wider transition whitespace-nowrap flex-shrink-0">City Cruisers</button>
                <button class="text-white hover:text-secondary font-bold py-2 px-6 rounded-full text-sm uppercase tracking-wider transition whitespace-nowrap flex-shrink-0">E-Bikes</button>
                <button class="text-white hover:text-secondary font-bold py-2 px-6 rounded-full text-sm uppercase tracking-wider transition whitespace-nowrap flex-shrink-0">Specialty</button>
            </div>
        </div>
    </div>
</section>
"@

$c = $c -replace $oldHero, $newHero
Set-Content -Path $file -Value $c
