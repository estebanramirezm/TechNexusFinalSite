const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="/home.html">
            <img src="/media/logo.png" class="brand-logo" alt="Tech Nexus">
            </a>      
            <!-- <div class="nav-items" inert> 
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div> 
                <a> <img src="/img/user.png" id="user-img" alt=""> </a>
                <a> <img src="/img/cart.png" alt=""> </a>
            </div> -->
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="/home.html" class="link">Home</a></li>
            <li class="link-item"><a href="/home.html#best-sellers" class="link">Best Sellers</a></li>
            <li class="link-item"><a href="/home.html#Smart%20Home" class="link">Smart Home</a></li>
            <li class="link-item"><a href="/home.html#Wearables" class="link">Wearables</a></li>
            <li class="link-item"><a href="/home.html#Mobile%20Devices" class="link">Mobile Devices</a></li>
        </ul>
    `;
}

// Note: Nav-items is not implemented yet, so it will be unselectable

createNav();

