import sys

def process(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # 1. header button
    content = content.replace('id="mobile-menu-btn" class="md:hidden', 'id="mobile-menu-btn" class="lg:hidden')

    # 2. sidebar
    content = content.replace(
        'class="w-56 lg:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between py-6 fixed md:relative top-0 left-0 z-50 md:z-0 h-full shadow-2xl md:shadow-none transform -translate-x-full md:translate-x-0 transition-transform duration-300"',
        'class="w-56 lg:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between py-6 fixed lg:relative top-0 left-0 z-50 lg:z-0 h-full shadow-2xl lg:shadow-none transform -translate-x-full lg:translate-x-0 transition-transform duration-300"'
    )

    # 3. mobile logo in sidebar
    content = content.replace(
        '<div class="md:hidden flex items-center justify-between px-4 mt-2 mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">',
        '<div class="lg:hidden flex items-center justify-between px-4 mt-2 mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">'
    )

    # 4. overlay
    content = content.replace(
        'class="fixed inset-0 bg-black bg-opacity-50 z-30 hidden md:hidden"',
        'class="fixed inset-0 bg-black bg-opacity-50 z-30 hidden lg:hidden"'
    )

    with open(filepath, 'w') as f:
        f.write(content)

process('user-dashboard.html')
process('admin-dashboard.html')
