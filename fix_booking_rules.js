const fs = require('fs');
const path = require('path');

const folder = 'c:\\Bicycle';

// Update booking.html
const bookingFile = path.join(folder, 'booking.html');
if (fs.existsSync(bookingFile)) {
    let content = fs.readFileSync(bookingFile, 'utf-8');
    
    // Remove the bad flex classes from main
    content = content.replace('<main class="flex-grow flex items-center justify-center pt-24 pb-12">', '<main class="flex-grow">');
    
    // Insert hero section before the container if not already there
    if (!content.includes('Page Hero Section')) {
        const heroHTML = `
        <!-- Page Hero Section -->
        <section class="relative bg-gray-900 text-white py-32 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=2000&fit=crop');">
            <div class="absolute inset-0 bg-black bg-opacity-60"></div>
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
                <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">Book Your Ride</h1>
                <p class="text-xl max-w-2xl mx-auto text-gray-300">Reserve your bicycle in advance and guarantee your urban adventure.</p>
            </div>
        </section>
        
        <div class="container mx-auto px-4 py-12 flex justify-center">`;
        
        // Find the start of the booking form container and replace
        content = content.replace('<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl border-t-4 border-primary">', heroHTML + '\n            <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl border-t-4 border-primary">');
        
        // Remove the inner H2 since it's now in the hero section
        content = content.replace('<h2 class="text-3xl font-bold mb-6 text-center text-primary">Book Your Ride</h2>', '');
        
        // Ensure the div closes properly (it was wrapped in flex-grow flex, now it's wrapped in container flex)
        // Actually, in the original booking.html, the main flex items-center wraps the bg-white div directly.
        // So I added the container div wrapper, I need to close it.
        // The original ended with: 
        //   </form>
        // </div>
        // </main>
        content = content.replace(/<\/form>\s*<\/div>\s*<\/main>/, '</form>\n        </div>\n        </div>\n    </main>');
    }
    
    fs.writeFileSync(bookingFile, content, 'utf-8');
}

// Update rules.html
const rulesFile = path.join(folder, 'rules.html');
if (fs.existsSync(rulesFile)) {
    let content = fs.readFileSync(rulesFile, 'utf-8');
    
    content = content.replace('<main class="flex-grow flex items-center justify-center pt-24 pb-12">', '<main class="flex-grow">');
    
    if (!content.includes('Page Hero Section')) {
        const heroHTML = `
        <!-- Page Hero Section -->
        <section class="relative bg-gray-900 text-white py-32 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1496150590317-f8d855ce8812?w=2000&fit=crop');">
            <div class="absolute inset-0 bg-black bg-opacity-60"></div>
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
                <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">Rules & Deposit</h1>
                <p class="text-xl max-w-2xl mx-auto text-gray-300">Everything you need to know about safety, rentals, and deposits.</p>
            </div>
        </section>
        
        <div class="container mx-auto px-4 py-12 max-w-4xl">`;
        
        // Replace the start of the container
        content = content.replace('<div class="container mx-auto px-4 py-12 max-w-4xl">', heroHTML);
        
        // Remove the inner H1 since it's in the hero now
        content = content.replace('<h1 class="text-4xl font-bold mb-8 text-center text-primary">Rules & Deposit</h1>', '');
    }
    
    fs.writeFileSync(rulesFile, content, 'utf-8');
}

console.log('Fixed layout and added hero sections for booking and rules pages.');
