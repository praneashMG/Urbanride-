const fs = require('fs');
const path = require('path');

const folder = 'c:\\Bicycle';

// Fix about.html
const aboutPath = path.join(folder, 'about.html');
let about = fs.readFileSync(aboutPath, 'utf-8');
if (!about.includes('Page Hero Section')) {
    const hero = `
    <!-- Page Hero Section -->
    <section class="relative bg-gray-900 text-white py-32 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1519046904884-53103b34b206?w=2000&fit=crop');">
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
            <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">About UrbanRide</h1>
            <p class="text-xl max-w-2xl mx-auto text-gray-300">Transforming urban exploration, one pedal at a time.</p>
        </div>
    </section>`;
    
    about = about.replace('<main class="flex-grow pt-24">', '<main class="flex-grow">\n' + hero);
    about = about.replace(/<div class="text-center mb-12">\s*<h1 class="text-5xl font-bold text-primary mb-4">About UrbanRide<\/h1>\s*<p class="text-xl text-gray-600">Transforming urban exploration, one pedal at a time\.<\/p>\s*<\/div>/, '');
    fs.writeFileSync(aboutPath, about);
}

// Fix locations.html
const locPath = path.join(folder, 'locations.html');
let loc = fs.readFileSync(locPath, 'utf-8');
if (!loc.includes('Page Hero Section')) {
    const heroLoc = `
    <!-- Page Hero Section -->
    <section class="relative bg-gray-900 text-white py-32 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1496150590317-f8d855ce8812?w=2000&fit=crop');">
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
            <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">Pickup Locations</h1>
            <p class="text-xl max-w-2xl mx-auto text-gray-300">Find the nearest UrbanRide hub to start your journey.</p>
        </div>
    </section>`;
    
    loc = loc.replace('<main class="flex-grow pt-24">', '<main class="flex-grow">\n' + heroLoc);
    loc = loc.replace('<h1 class="text-4xl font-bold mb-8 text-center text-primary">Pickup Locations</h1>', '');
    fs.writeFileSync(locPath, loc);
}

// Fix login and register
['login.html', 'register.html'].forEach(file => {
    const p = path.join(folder, file);
    let content = fs.readFileSync(p, 'utf-8');
    
    content = content.replace(/<!-- Top Right Actions INSIDE the card -->[\s\S]*?<\/div>\s*(<div class="p-10 text-center (?:mt-2)?">)/, '$1');
    
    const toggles = `
    <!-- Top Right Actions OUTSIDE the card -->
    <div class="fixed top-4 right-4 flex items-center gap-2 z-50">
        <button onclick="document.body.classList.toggle('rtl'); document.documentElement.setAttribute('dir', document.body.classList.contains('rtl') ? 'rtl' : 'ltr')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold px-3 py-2 rounded shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition uppercase tracking-widest border border-gray-200 dark:border-gray-700">
            RTL
        </button>
        <button onclick="document.documentElement.classList.toggle('dark')" class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 w-10 h-10 rounded shadow-md flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition border border-gray-200 dark:border-gray-700">
            <i class="fas fa-moon"></i>
        </button>
    </div>
    `;
    
    if (!content.includes('Top Right Actions OUTSIDE')) {
        content = content.replace(/(<body[^>]*>)/, '$1\n' + toggles);
    }
    
    fs.writeFileSync(p, content, 'utf-8');
});

console.log("Fixed heroes and toggles.");
