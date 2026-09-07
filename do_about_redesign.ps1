$file = "d:\Bicycle\Bicycle\about.html"
$c = Get-Content -Path $file -Raw

# 1. Stats Section
$oldStats = '(?s)<!-- Stats Section -->.*?<!-- Shared Sections -->'
$newStats = @"
    <!-- Stats Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden relative border-t-4 border-secondary">
        <div class="absolute inset-0 bg-primary opacity-5"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div class="lg:w-1/3 text-center lg:text-left">
                    <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Our Impact<br><span class="text-primary">in Numbers</span></h2>
                    <p class="text-gray-600 dark:text-gray-400 text-lg">We are proud of the community we've built and the miles we've shared.</p>
                </div>
                <div class="lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-8 md:gap-16">
                    <div class="text-center lg:text-left">
                        <p class="text-5xl md:text-7xl font-black text-secondary mb-2 tracking-tighter">10k<span class="text-3xl text-primary">+</span></p>
                        <p class="text-sm uppercase tracking-widest font-bold text-gray-500">Happy Riders</p>
                    </div>
                    <div class="text-center lg:text-left">
                        <p class="text-5xl md:text-7xl font-black text-secondary mb-2 tracking-tighter">50<span class="text-3xl text-primary">+</span></p>
                        <p class="text-sm uppercase tracking-widest font-bold text-gray-500">Premium Bikes</p>
                    </div>
                    <div class="text-center lg:text-left">
                        <p class="text-5xl md:text-7xl font-black text-secondary mb-2 tracking-tighter">20<span class="text-3xl text-primary">+</span></p>
                        <p class="text-sm uppercase tracking-widest font-bold text-gray-500">City Routes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Shared Sections -->
"@
$c = $c -replace $oldStats, $newStats

# 2. Testimonial Section
$oldTest = '(?s)<!-- Testimonial Section -->.*?<!-- App Promo Section -->'
$newTest = @"
        <!-- Testimonial Section -->
        <section class="py-16 md:py-32 bg-white dark:bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col lg:flex-row gap-16 items-center">
                    <!-- Featured Large Review -->
                    <div class="lg:w-1/2 relative">
                        <i class="fas fa-quote-left text-8xl text-primary opacity-20 absolute -top-8 -left-8"></i>
                        <h2 class="text-sm text-secondary font-bold tracking-widest uppercase mb-4">Featured Review</h2>
                        <p class="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-8 relative z-10">
                            "The e-bikes are in perfect condition and the booking process is seamless. Exploring the city has never been this fun! Highly recommended for tourists."
                        </p>
                        <div class="flex items-center gap-4 relative z-10">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" class="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-primary">
                            <div>
                                <p class="font-bold text-gray-900 dark:text-white text-lg">Michael T.</p>
                                <p class="text-sm text-gray-500 font-medium">Avid Traveler</p>
                            </div>
                        </div>
                    </div>
                    <!-- Stacked List -->
                    <div class="lg:w-1/2 flex flex-col gap-6 w-full">
                        <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-sm border-l-4 border-secondary flex gap-6 items-start">
                            <div class="text-secondary mt-1 text-xl"><i class="fas fa-star"></i></div>
                            <div>
                                <p class="text-gray-700 dark:text-gray-300 italic mb-3">"A fantastic way to see the city. The app made unlocking bikes incredibly easy."</p>
                                <p class="text-sm font-bold text-gray-900 dark:text-white">- Sarah J.</p>
                            </div>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-sm border-l-4 border-primary flex gap-6 items-start transform lg:translate-x-8">
                            <div class="text-primary mt-1 text-xl"><i class="fas fa-star"></i></div>
                            <div>
                                <p class="text-gray-700 dark:text-gray-300 italic mb-3">"The guided tours were the highlight of our trip. Local insights we wouldn't have found otherwise!"</p>
                                <p class="text-sm font-bold text-gray-900 dark:text-white">- David L.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- App Promo Section -->
"@
$c = $c -replace $oldTest, $newTest

# 3. App Promo Section
$oldApp = '(?s)<!-- App Promo Section -->.*?<!-- FAQ Section -->'
$newApp = @"
        <!-- App Promo Section -->
        <section class="flex flex-col lg:flex-row bg-gray-900 overflow-hidden border-t border-gray-800">
            <div class="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative">
                <div class="absolute inset-0 bg-primary opacity-10 transform -skew-y-12"></div>
                <div class="relative z-10 w-full max-w-lg">
                    <h2 class="text-xs text-secondary font-bold tracking-widest uppercase mb-4">Go Mobile</h2>
                    <h3 class="text-4xl md:text-5xl font-extrabold text-white mb-6">Unlock More with the UrbanRide App</h3>
                    <p class="text-lg text-gray-300 mb-10">Get live interactive maps, one-tap extensions, mobile unlocking, and exclusive rewards. Seamlessly control your ride right from your pocket.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#" class="bg-white text-gray-900 px-6 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition shadow-lg w-full sm:w-auto">
                            <i class="fab fa-apple text-2xl"></i>
                            <div class="text-left"><p class="text-[10px] leading-none text-gray-500 font-bold uppercase">Download on the</p><p class="font-black text-sm leading-none mt-1">App Store</p></div>
                        </a>
                        <a href="#" class="bg-white text-gray-900 px-6 py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition shadow-lg w-full sm:w-auto">
                            <i class="fab fa-google-play text-2xl text-secondary"></i>
                            <div class="text-left"><p class="text-[10px] leading-none text-gray-500 font-bold uppercase">GET IT ON</p><p class="font-black text-sm leading-none mt-1">Google Play</p></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover object-center" alt="Mobile App">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 lg:bg-gradient-to-l lg:from-transparent to-gray-900 lg:to-gray-900/50"></div>
            </div>
        </section>

        <!-- FAQ Section -->
"@
$c = $c -replace $oldApp, $newApp

Set-Content -Path $file -Value $c
