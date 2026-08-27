const fs = require('fs');
const path = require('path');

const folder = 'c:\\Bicycle';
const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));

const images = [
    'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=2000&fit=crop',
    'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=2000&fit=crop',
    'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=2000&fit=crop',
    'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=2000&fit=crop',
    'https://images.unsplash.com/photo-1496150590317-f8d855ce8812?w=2000&fit=crop',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=2000&fit=crop'
];

let imgIndex = 0;

files.forEach(file => {
    const filePath = path.join(folder, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Skip auth/dashboard pages for hero images
    const skipHeroPages = ['login.html', 'register.html', 'user-dashboard.html', 'admin-dashboard.html', '404.html'];
    
    // Link Home 2 properly globally
    content = content.replace(/<a href="index\.html"([^>]+)>Home 2<\/a>/g, '<a href="home2.html"$1>Home 2</a>');

    if (!skipHeroPages.includes(file)) {
        // If it's a standard page with <h1><p> at the top of <main>
        const regexStandard = /<main class="flex-grow pt-24">\s*<div class="container mx-auto px-4 py-12">\s*<h1 class="text-4xl font-bold mb-8 text-center text-primary">([^<]+)<\/h1>\s*<p class="text-center text-lg text-gray-700 mb-12">([^<]+)<\/p>/;
        const matchStandard = content.match(regexStandard);

        // If it's bike-detail which starts directly with the content block
        const regexBikeDetail = /<main class="flex-grow pt-24">\s*<div class="container mx-auto px-4 py-12 max-w-5xl">/;
        
        // Check if page already has a hero image (index, tour-detail usually do)
        const hasHero = content.includes('h-[80vh]') || content.includes('relative h-96');

        if (!hasHero) {
            const bgImage = images[imgIndex % images.length];
            imgIndex++;

            if (matchStandard) {
                const title = matchStandard[1];
                const subtitle = matchStandard[2];
                
                const replacement = `<main class="flex-grow">
        <!-- Page Hero Section -->
        <section class="relative bg-gray-900 text-white py-32 bg-cover bg-center" style="background-image: url('${bgImage}');">
            <div class="absolute inset-0 bg-black bg-opacity-60"></div>
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
                <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">${title}</h1>
                <p class="text-xl max-w-2xl mx-auto text-gray-300">${subtitle}</p>
            </div>
        </section>
        
        <div class="container mx-auto px-4 py-12">`;
                
                content = content.replace(regexStandard, replacement);
            } 
            else if (regexBikeDetail.test(content)) {
                // For bike detail
                const titleMatch = content.match(/<title>UrbanRide - (.+)<\/title>/);
                const title = titleMatch ? titleMatch[1] : 'UrbanRide';
                const subtitle = 'Explore the details of your selected ride.';

                const replacement = `<main class="flex-grow">
        <!-- Page Hero Section -->
        <section class="relative bg-gray-900 text-white py-32 bg-cover bg-center" style="background-image: url('${bgImage}');">
            <div class="absolute inset-0 bg-black bg-opacity-60"></div>
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
                <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">${title}</h1>
                <p class="text-xl max-w-2xl mx-auto text-gray-300">${subtitle}</p>
            </div>
        </section>
        
        <div class="container mx-auto px-4 py-12 max-w-5xl">`;
                content = content.replace(regexBikeDetail, replacement);
            }
        }
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

// Create home2.html based on index.html
const indexPath = path.join(folder, 'index.html');
const home2Path = path.join(folder, 'home2.html');

if (fs.existsSync(indexPath)) {
    let home2Content = fs.readFileSync(indexPath, 'utf-8');

    // Modify home2 content to be distinct
    home2Content = home2Content.replace('<title>UrbanRide - Home</title>', '<title>UrbanRide - Home 2</title>');

    // Change Hero text
    home2Content = home2Content.replace('Experience the City Like Never Before', 'Discover the Ultimate Urban Adventure');
    home2Content = home2Content.replace('Premium bicycle rentals and guided tours to explore the city at your own pace.', 'Your journey starts here. Ride our premium e-bikes and discover hidden city gems.');
    
    // Change Hero image for Home 2
    home2Content = home2Content.replace('https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=2074&auto=format&fit=crop', 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=2074&fit=crop');

    fs.writeFileSync(home2Path, home2Content, 'utf-8');
    console.log("Pages enhanced with Hero images and home2.html created!");
} else {
    console.log("index.html not found, couldn't create home2.");
}
