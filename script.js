// Dữ liệu sách mẫu
const booksData = [
    {
        id: 1,
        title: "Sapiens: Lược sử loài người",
        author: "Yuval Noah Harari",
        category: "tâm-lý",
        price: 189000,
        oldPrice: 220000,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
        badge: "Best Seller",
        description: "Cuốn sách khám phá lịch sử của loài người từ thời tiền sử đến hiện đại."
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        category: "tâm-lý",
        price: 165000,
        oldPrice: 195000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
        badge: "Hot",
        description: "Hướng dẫn xây dựng thói quen tốt và loại bỏ thói quen xấu."
    },
    {
        id: 3,
        title: "Clean Code",
        author: "Robert C. Martin",
        category: "công-nghệ",
        price: 299000,
        oldPrice: 350000,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=400&fit=crop",
        badge: "New",
        description: "Hướng dẫn viết code sạch và dễ maintain cho lập trình viên."
    },
    {
        id: 4,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "kinh-tế",
        price: 125000,
        oldPrice: 150000,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop",
        badge: "Best Seller",
        description: "Bài học về tài chính và đầu tư từ hai người cha."
    },
    {
        id: 5,
        title: "Nhà Giả Kim",
        author: "Paulo Coelho",
        category: "văn-học",
        price: 89000,
        oldPrice: 120000,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
        badge: "Classic",
        description: "Câu chuyện về hành trình tìm kiếm kho báu và ý nghĩa cuộc sống."
    },
    {
        id: 6,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        category: "công-nghệ",
        price: 245000,
        oldPrice: 290000,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=400&fit=crop",
        badge: "Hot",
        description: "Khám phá những tính năng tốt nhất của JavaScript."
    },
    {
        id: 7,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        category: "kinh-tế",
        price: 155000,
        oldPrice: 180000,
        image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop",
        badge: "Best Seller",
        description: "13 nguyên tắc để thành công và làm giàu."
    },
    {
        id: 8,
        title: "Dế Mèn Phiêu Lưu Ký",
        author: "Tô Hoài",
        category: "văn-học",
        price: 65000,
        oldPrice: 85000,
        image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop",
        badge: "Classic",
        description: "Tác phẩm kinh điển của văn học thiếu nhi Việt Nam."
    },
    {
        id: 9,
        title: "Python Crash Course",
        author: "Eric Matthes",
        category: "công-nghệ",
        price: 320000,
        oldPrice: 380000,
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=400&fit=crop",
        badge: "New",
        description: "Hướng dẫn học Python từ cơ bản đến nâng cao."
    },
    {
        id: 10,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "kinh-tế",
        price: 175000,
        oldPrice: 210000,
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=400&fit=crop",
        badge: "Hot",
        description: "Tâm lý học của tiền bạc và những quyết định tài chính."
    },
    {
        id: 11,
        title: "Mindset",
        author: "Carol S. Dweck",
        category: "tâm-lý",
        price: 145000,
        oldPrice: 170000,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
        badge: "Best Seller",
        description: "Tầm quan trọng của tư duy tăng trưởng trong thành công."
    },
    {
        id: 12,
        title: "Truyện Kiều",
        author: "Nguyễn Du",
        category: "văn-học",
        price: 45000,
        oldPrice: 60000,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
        badge: "Classic",
        description: "Tác phẩm bất hủ của văn học Việt Nam."
    }
];

// Biến toàn cục
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';

// DOM Elements
const booksGrid = document.getElementById('booksGrid');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const searchInput = document.getElementById('searchInput');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderBooks(booksData);
    updateCartUI();
    initializeEventListeners();
});

// Event Listeners
function initializeEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            currentFilter = filter;
            filterBooks(filter);
        });
    });

    // Category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            currentFilter = category;
            
            // Update filter buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                }
            });
            
            // Scroll to books section and filter
            scrollToSection('books');
            setTimeout(() => filterBooks(category), 300);
        });
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        searchBooks(searchTerm);
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.', 'success');
        this.reset();
    });

    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Giỏ hàng trống!', 'error');
            return;
        }
        
        // Simulate checkout process
        this.classList.add('btn-loading');
        this.textContent = 'Đang xử lý...';
        
        setTimeout(() => {
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
            toggleCart();
            showNotification('Đặt hàng thành công! Cảm ơn bạn đã mua sắm.', 'success');
            
            this.classList.remove('btn-loading');
            this.textContent = 'Thanh toán';
        }, 2000);
    });
}

// Render books
function renderBooks(books) {
    booksGrid.innerHTML = '';
    
    if (books.length === 0) {
        booksGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #64748b;">
                <i class="fas fa-book" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Không tìm thấy sách nào phù hợp.</p>
            </div>
        `;
        return;
    }
    
    books.forEach((book, index) => {
        const bookCard = createBookCard(book);
        bookCard.style.animationDelay = `${index * 0.1}s`;
        booksGrid.appendChild(bookCard);
    });
}

// Create book card
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.category = book.category;
    
    const discount = Math.round(((book.oldPrice - book.price) / book.oldPrice) * 100);
    
    card.innerHTML = `
        <div class="book-image">
            <img src="${book.image}" alt="${book.title}" loading="lazy">
            ${book.badge ? `<div class="book-badge">${book.badge}</div>` : ''}
        </div>
        <div class="book-info">
            <div class="book-category">${getCategoryName(book.category)}</div>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">Tác giả: ${book.author}</p>
            <div class="book-price">
                <span class="price-current">${formatPrice(book.price)}</span>
                ${book.oldPrice ? `<span class="price-old">${formatPrice(book.oldPrice)}</span>` : ''}
            </div>
            ${discount > 0 ? `<div style="color: #ef4444; font-weight: 600; margin-bottom: 1rem;">Giảm ${discount}%</div>` : ''}
            <button class="add-to-cart" onclick="addToCart(${book.id})">
                <i class="fas fa-shopping-cart"></i> Thêm vào giỏ
            </button>
        </div>
    `;
    
    return card;
}

// Filter books
function filterBooks(category) {
    const filteredBooks = category === 'all' 
        ? booksData 
        : booksData.filter(book => book.category === category);
    
    // Add loading effect
    booksGrid.style.opacity = '0.5';
    
    setTimeout(() => {
        renderBooks(filteredBooks);
        booksGrid.style.opacity = '1';
    }, 300);
}

// Search books
function searchBooks(searchTerm) {
    if (!searchTerm.trim()) {
        filterBooks(currentFilter);
        return;
    }
    
    const filteredBooks = booksData.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        getCategoryName(book.category).toLowerCase().includes(searchTerm)
    );
    
    renderBooks(filteredBooks);
}

// Add to cart
function addToCart(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification(`Đã thêm "${book.title}" vào giỏ hàng!`, 'success');
    
    // Add animation to cart icon
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Remove from cart
function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification('Đã xóa sản phẩm khỏi giỏ hàng!', 'info');
}

// Update quantity
function updateQuantity(bookId, change) {
    const item = cart.find(item => item.id === bookId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(bookId);
        return;
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                <p>Giỏ hàng trống</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <input type="number" value="${item.quantity}" class="qty-input" readonly>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="qty-btn" onclick="removeFromCart(${item.id})" style="margin-left: 0.5rem; color: #ef4444;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = formatPrice(total);
}

// Toggle cart
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : 'auto';
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function getCategoryName(category) {
    const categoryNames = {
        'văn-học': 'Văn học',
        'kinh-tế': 'Kinh tế',
        'công-nghệ': 'Công nghệ',
        'tâm-lý': 'Tâm lý'
    };
    return categoryNames[category] || category;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: inherit; cursor: pointer;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'fa-check-circle',
        'error': 'fa-exclamation-circle',
        'warning': 'fa-exclamation-triangle',
        'info': 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        'success': '#10b981',
        'error': '#ef4444',
        'warning': '#f59e0b',
        'info': '#3b82f6'
    };
    return colors[type] || colors.info;
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.category-card, .about-text, .contact-form');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close cart
    if (e.key === 'Escape' && cartSidebar.classList.contains('open')) {
        toggleCart();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
