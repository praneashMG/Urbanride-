const fs = require('fs');
const path = require('path');

const folder = 'c:\\Bicycle';
const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));

const noNavPages = ['login.html', 'register.html', 'user-dashboard.html', 'admin-dashboard.html'];

const impressiveSections = `
    <!-- Stats Section -->
    <section class="py-16 bg-primary text-white border-t-4 border-secondary">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div class="p-6 bg-white bg-opacity-10 rounded-2xl transform hover:-translate-y-2 transition duration-300">
                    <i class="fas fa-users text-3xl mb-4 text-secondary"></i>
                    <p class="text-4xl font-extrabold text-white mb-2">10k+</p>
                    <p class="text-xs uppercase tracking-widest font-semibold text-gray-300">Happy Riders</p>
                </div>
                <div class="p-6 bg-white bg-opacity-10 rounded-2xl transform hover:-translate-y-2 transition duration-300">
                    <i class="fas fa-bicycle text-3xl mb-4 text-secondary"></i>
                    <p class="text-4xl font-extrabold text-white mb-2">50+</p>
                    <p class="text-xs uppercase tracking-widest font-semibold text-gray-300">Premium Bikes</p>
                </div>
                <div class="p-6 bg-white bg-opacity-10 rounded-2xl transform hover:-translate-y-2 transition duration-300">
                    <i class="fas fa-route text-3xl mb-4 text-secondary"></i>
                    <p class="text-4xl font-extrabold text-white mb-2">20+</p>
                    <p class="text-xs uppercase tracking-widest font-semibold text-gray-300">City Routes</p>
                </div>
                <div class="p-6 bg-white bg-opacity-10 rounded-2xl transform hover:-translate-y-2 transition duration-300">
                    <i class="fas fa-star text-3xl mb-4 text-secondary"></i>
                    <p class="text-4xl font-extrabold text-white mb-2">4.9/5</p>
                    <p class="text-xs uppercase tracking-widest font-semibold text-gray-300">Average Rating</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonial Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Reviews</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">What Our Riders Say</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 relative hover:shadow-2xl transition duration-300">
                    <div class="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl"><i class="fas fa-quote-right"></i></div>
                    <div class="flex text-secondary mb-6"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="text-gray-600 dark:text-gray-400 mb-8 italic leading-relaxed">"The e-bikes are in perfect condition and the booking process is seamless. Exploring the city has never been this fun! Highly recommended for tourists."</p>
                    <div class="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" class="w-12 h-12 rounded-full object-cover">
                        <div><p class="font-bold text-gray-900 dark:text-white">Michael T.</p><p class="text-xs text-gray-500">Avid Traveler</p></div>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 relative hover:shadow-2xl transition duration-300 transform md:-translate-y-4">
                    <div class="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl"><i class="fas fa-quote-right"></i></div>
                    <div class="flex text-secondary mb-6"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p class="text-gray-600 dark:text-gray-400 mb-8 italic leading-relaxed">"UrbanRide made our anniversary unforgettable. The tandem bike was a blast and the sunset tour guide was incredibly knowledgeable and friendly."</p>
                    <div class="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" class="w-12 h-12 rounded-full object-cover">
                        <div><p class="font-bold text-gray-900 dark:text-white">Sarah & Mark</p><p class="text-xs text-gray-500">Local Residents</p></div>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 relative hover:shadow-2xl transition duration-300">
                    <div class="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white text-xl"><i class="fas fa-quote-right"></i></div>
                    <div class="flex text-secondary mb-6"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                    <p class="text-gray-600 dark:text-gray-400 mb-8 italic leading-relaxed">"Incredible value for the daily rates. I rented a classic city bike for a week and it was my best commuting experience ever. Solid customer service."</p>
                    <div class="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" class="w-12 h-12 rounded-full object-cover">
                        <div><p class="font-bold text-gray-900 dark:text-white">David K.</p><p class="text-xs text-gray-500">Business Commuter</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- App Promo Section -->
    <section class="py-0 bg-white dark:bg-gray-900 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center bg-primary rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl my-16">
                <!-- decorative blob -->
                <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div class="lg:w-1/2 relative z-10 text-center lg:text-left">
                    <h2 class="text-4xl font-extrabold text-white mb-6">Unlock More with the UrbanRide App</h2>
                    <p class="text-lg text-green-100 mb-8">Get live interactive maps, one-tap extensions, mobile unlocking, and exclusive rewards. Available for iOS and Android.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#" class="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition">
                            <i class="fab fa-apple text-2xl"></i>
                            <div class="text-left"><p class="text-[10px] leading-none">Download on the</p><p class="font-bold text-sm leading-none">App Store</p></div>
                        </a>
                        <a href="#" class="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition">
                            <i class="fab fa-google-play text-2xl"></i>
                            <div class="text-left"><p class="text-[10px] leading-none">GET IT ON</p><p class="font-bold text-sm leading-none">Google Play</p></div>
                        </a>
                    </div>
                </div>
                <div class="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative z-10">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop" class="rounded-[2rem] shadow-2xl border-8 border-gray-900 w-64 h-auto transform rotate-3 hover:rotate-0 transition duration-500" alt="Mobile App">
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Support</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Frequently Asked Questions</p>
            </div>
            <div class="space-y-6">
                <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-secondary dark:hover:border-secondary transition shadow-sm hover:shadow-md cursor-pointer group">
                    <h3 class="font-bold text-lg flex justify-between items-center text-gray-900 dark:text-white">
                        Do I need to wear a helmet? 
                        <i class="fas fa-plus text-primary group-hover:rotate-45 transition duration-300"></i>
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">Yes, helmets are provided free of charge at all our kiosks and hubs. For your safety and to comply with local regulations, they are mandatory for all riders.</p>
                </div>
                <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-secondary dark:hover:border-secondary transition shadow-sm hover:shadow-md cursor-pointer group">
                    <h3 class="font-bold text-lg flex justify-between items-center text-gray-900 dark:text-white">
                        What happens if the bike gets a flat tire? 
                        <i class="fas fa-plus text-primary group-hover:rotate-45 transition duration-300"></i>
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">We offer free roadside assistance for active rentals. Simply tap "Report Issue" in your dashboard or call our support line, and our rapid-response van will swap your bike within 30 minutes.</p>
                </div>
                <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-secondary dark:hover:border-secondary transition shadow-sm hover:shadow-md cursor-pointer group">
                    <h3 class="font-bold text-lg flex justify-between items-center text-gray-900 dark:text-white">
                        How does the security deposit work? 
                        <i class="fas fa-plus text-primary group-hover:rotate-45 transition duration-300"></i>
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">A pre-authorization is placed on your card when you pick up the bike ($50 for City, $200 for E-Bike). It is automatically voided the moment the bike is returned securely to one of our locations.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter & CTA -->
    <section class="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=2000&auto=format&fit=crop" class="w-full h-full object-cover" alt="Cycling Background">
            <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <i class="fas fa-paper-plane text-5xl text-secondary mb-6"></i>
            <h2 class="text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p class="text-gray-300 mb-10 text-lg">Subscribe to our newsletter for exclusive discounts, new tour announcements, and urban cycling tips delivered straight to your inbox.</p>
            <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input type="email" placeholder="Enter your email address..." class="flex-grow px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-secondary text-lg" required>
                <button type="submit" class="bg-secondary text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-yellow-500 transition shadow-lg text-lg transform hover:-translate-y-1">Subscribe</button>
            </form>
        </div>
    </section>
`;

const navRegex = /<!-- New Navbar -->[\s\S]*?\/\/ Mobile Menu Logic[\s\S]*?<\/script>/;

files.forEach(file => {
    const filePath = path.join(folder, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    if (noNavPages.includes(file)) {
        if (navRegex.test(content)) {
            content = content.replace(navRegex, '');
            content = content.replace(/<main class="flex-grow flex items-center justify-center pt-24 pb-12">/, '<main class="flex-grow flex items-center justify-center py-12">');
            content = content.replace(/<main class="flex-grow pt-24">/, '<main class="flex-grow">');
        }
    } 
    else {
        if (!content.includes('<!-- Stats Section -->')) {
            content = content.replace('</main>', impressiveSections + '\n    </main>');
        }
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Success: Added impressive sections and removed nav from auth/dashboards.");
