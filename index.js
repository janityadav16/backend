// Frontend JavaScript code
console.log('Frontend application started');

// Example function to fetch products
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        console.log('Products:', data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchProducts); 