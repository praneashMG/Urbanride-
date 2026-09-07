$file = "d:\Bicycle\Bicycle\about.html"
$c = Get-Content -Path $file -Raw

# 1. Stats Section
$oldStats = '(?s)<!-- Stats Section -->\s*<section class="py-16 bg-primary.*?</section>'
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
"@
$c = $c -replace $oldStats, $newStats

# 2. Reviews Section
$oldReviews = '(?s)<!-- Testimonial Section -->\s*<section class="py-12 md:py-24 bg-gray-50 dark:bg-gray-800">.*?<!-- CTA Section -->'
$newReviews = @"
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

        <!-- CTA Section -->
"@
# Notice I include <!-- CTA Section --> because I matched up to it to replace the app download too? Wait. I matched to CTA. But wait, App download is BEFORE CTA?
# Let's check the structure again.
