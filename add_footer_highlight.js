const fs = require('fs');
const path = require('path');

const folder = 'c:\\Bicycle';
const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));

const exactFooterHTML = `
    <!-- Exact Footer from Image -->
    <footer class="bg-black text-[#888888] pt-16 pb-8 font-sans mt-auto border-t border-gray-900">
        <div class="max-w-[1400px] mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <!-- Col 1 -->
                <div>
                    <a href="index.html" class="flex items-center gap-2 mb-6">
                        <i class="fas fa-bicycle text-pink-500 text-3xl"></i>
                        <span class="text-2xl font-serif tracking-wider text-white uppercase">URBAN<span class="text-pink-500">RIDE</span></span>
                    </a>
                    <p class="text-sm mb-8 leading-relaxed">
                        Fresh & Beautiful, Crafted for Every Moment.<br>
                        Purveyors of fine bicycles and exquisite city tours<br>
                        since 2015.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 border border-[#333333] flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="w-10 h-10 border border-[#333333] flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 border border-[#333333] flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <!-- Col 2 -->
                <div>
                    <h4 class="text-white font-serif tracking-widest uppercase mb-6 text-sm">Quick Links</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a href="about.html" class="hover:text-white transition">About Us</a></li>
                        <li><a href="fleet.html" class="hover:text-white transition">Our Fleet</a></li>
                        <li><a href="tours.html" class="hover:text-white transition">Guided Tours</a></li>
                        <li><a href="locations.html" class="hover:text-white transition">Locations</a></li>
                    </ul>
                </div>

                <!-- Col 3 -->
                <div>
                    <h4 class="text-white font-serif tracking-widest uppercase mb-6 text-sm">Customer Care</h4>
                    <ul class="space-y-4 text-sm">
                        <li><a href="#" class="hover:text-white transition">Contact Us</a></li>
                        <li><a href="booking.html" class="hover:text-white transition">Booking & Rentals</a></li>
                        <li><a href="rules.html" class="hover:text-white transition">Rules & Deposit</a></li>
                        <li><a href="#" class="hover:text-white transition">FAQ</a></li>
                    </ul>
                </div>

                <!-- Col 4 -->
                <div>
                    <h4 class="text-white font-serif tracking-widest uppercase mb-6 text-sm">Newsletter</h4>
                    <p class="text-sm mb-6">Subscribe to receive exclusive invitations and updates.</p>
                    <form>
                        <input type="email" placeholder="Email Address" class="w-full bg-black border border-[#333333] px-4 py-3 text-sm focus:outline-none focus:border-pink-500 text-[#888888] mb-4 placeholder-[#555555]">
                        <button type="submit" class="w-full bg-pink-500 text-black font-bold text-xs tracking-widest uppercase py-4 hover:bg-pink-600 transition">Subscribe</button>
                    </form>
                </div>
            </div>

            <!-- Bottom bar -->
            <div class="border-t border-[#222222] pt-8 flex flex-col md:flex-row items-center justify-between relative">
                <p class="text-xs text-[#555555] mb-4 md:mb-0">© 2026 UrbanRide. All rights reserved.</p>
                <div class="flex space-x-6 text-xs text-[#555555] pr-16 md:pr-0">
                    <a href="#" class="hover:text-white transition">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition">Terms of Service</a>
                </div>
                <!-- Back to top button - exact match with image -->
                <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="absolute right-0 -top-14 w-12 h-12 bg-pink-500 text-black flex items-center justify-center hover:bg-pink-600 transition">
                    <i class="fas fa-arrow-up text-lg"></i>
                </button>
            </div>
        </div>
    </footer>

    <!-- Active Link Highlight Script -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            
            // Highlight Desktop Links
            const desktopLinks = document.querySelectorAll('.hidden.xl\\\\:flex > a, .hidden.xl\\\\:flex .group a');
            desktopLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath) {
                    link.classList.remove('text-gray-700', 'dark:text-gray-300');
                    // Add secondary color highlight
                    link.classList.add('text-secondary', 'dark:text-secondary');
                    // Add bottom border for visual active state
                    link.style.borderBottom = '2px solid #F59E0B'; // secondary color
                    
                    // If it's in a dropdown, highlight the parent button too
                    const parentGroup = link.closest('.group');
                    if(parentGroup) {
                        const parentBtn = parentGroup.querySelector('button');
                        if(parentBtn) {
                            parentBtn.classList.remove('text-gray-700', 'dark:text-gray-300');
                            parentBtn.classList.add('text-secondary', 'dark:text-secondary');
                            parentBtn.style.borderBottom = '2px solid #F59E0B';
                        }
                    }
                }
            });

            // Highlight Mobile Links
            const mobileLinks = document.querySelectorAll('#mobile-menu-content a');
            mobileLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath) {
                    link.classList.remove('text-gray-800', 'dark:text-gray-200');
                    link.classList.add('text-secondary', 'dark:text-secondary');
                    link.style.borderLeft = '4px solid #F59E0B';
                    link.style.paddingLeft = '8px';
                }
            });
        });
    </script>
`;

files.forEach(file => {
    const filePath = path.join(folder, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace existing footer if it exists
    if (content.includes('<footer')) {
        content = content.replace(/<footer[\s\S]*?<\/footer>/, exactFooterHTML);
    } else {
        // If no footer exists, place it before </body>
        content = content.replace('</body>', exactFooterHTML + '\n</body>');
    }
    
    // Also remove any duplicate Active Link Highlight Script if script was run before
    // (To ensure idempotency just in case)
    const scriptRegex = /<!-- Active Link Highlight Script -->[\s\S]*?<\/script>/g;
    const scriptMatches = content.match(scriptRegex);
    if (scriptMatches && scriptMatches.length > 1) {
        // Keep only the first occurrence
        let isFirst = true;
        content = content.replace(scriptRegex, (match) => {
            if (isFirst) {
                isFirst = false;
                return match;
            }
            return '';
        });
    }

    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Footer replaced and Active Link highlight added globally.");
