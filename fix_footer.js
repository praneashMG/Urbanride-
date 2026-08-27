const fs = require('fs');
const path = require('path');

const folder = 'c:\\Bicycle';
const files = fs.readdirSync(folder).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(folder, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    if (file === 'login.html' || file === 'register.html') {
        // Remove footer completely
        content = content.replace(/<!-- Exact Footer from Image -->[\s\S]*?<\/footer>/, '');
    } else {
        // Change pink to the site's theme (secondary/yellow)
        content = content.replace(/text-pink-500/g, 'text-secondary');
        content = content.replace(/border-pink-500/g, 'border-secondary');
        content = content.replace(/bg-pink-500/g, 'bg-secondary');
        content = content.replace(/hover:bg-pink-500/g, 'hover:bg-secondary');
        content = content.replace(/hover:bg-pink-600/g, 'hover:bg-yellow-500');
        
        // Ensure social icon hover state is highly readable with yellow background
        content = content.replace(/hover:bg-secondary hover:text-white/g, 'hover:bg-secondary hover:text-black');
    }
    
    fs.writeFileSync(filePath, content, 'utf-8');
});

console.log("Updated footer colors and removed footer from login/register.");
