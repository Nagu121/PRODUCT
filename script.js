document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-container");
    
    const productHTML = `
        <div class="product-container">
            <div class="product-image">
                <img src="product.jpg" alt="Product Image">
            </div>
            <div class="product-details">
                <h2>Product Name</h2>
                <p class="price">$49.99</p>
                <p class="description">This is a great product that you will love! High quality and great design.</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;
    
    productContainer.innerHTML = productHTML;
});
