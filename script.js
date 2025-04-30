document.addEventListener('DOMContentLoaded', function() {

    // 1. MOTIVATION SECTION

    const progressBar = document.getElementById('journey-progress');
    const progressPercent = document.getElementById('progress-percent');
    const dynamicQuote = document.getElementById('dynamic-quote');
    const encourageBtn = document.getElementById('encourage-btn');

    const quotes = [
        "Ask me how i got into PLP Academy.",
        "The journey of a thousand lines of code begins with a single function.",
        "Debugging is twice as hard as writing the code in the first place.",
        "Every day in PLP Academy brings me closer to mastery.",
        "The beautiful thing about learning is that no one can take it away from you.",
        "My journey continues, one line of code at a time.",
        "In the middle of difficulty lies opportunity - Albert Einstein",
        "Code is like humor. When you have to explain it, it's bad.",
        "First, solve the problem. Then, write the code."
    ];

    // Progress simulation
    let progress = 65;
    setInterval(() => {
        if (progress < 100) {
            progress += 0.1;
            progressBar.style.width = `${progress}%`;
            progressPercent.textContent = Math.floor(progress);
        }
    }, 1000);

    // Rotate motivational quotes
    let quoteIndex = 0;
    setInterval(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        dynamicQuote.textContent = `"${quotes[quoteIndex]}"`;
        dynamicQuote.classList.add('celebrate');
        setTimeout(() => dynamicQuote.classList.remove('celebrate'), 500);
    }, 10000);

    // Encourage button
    encourageBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        dynamicQuote.textContent = `"${quotes[randomIndex]}"`;
        this.textContent = ["You Got This!", "Keep Going!", "Future Master!", "Almost There!"][Math.floor(Math.random() * 4)];
        
        this.classList.add('celebrate');
        setTimeout(() => this.classList.remove('celebrate'), 500);
        
        // Temporary progress boost
        if (progress < 95) {
            progress += 2;
            progressBar.style.width = `${progress}%`;
            progressPercent.textContent = Math.floor(progress);
        }
    });

    // 2. EVENT HANDLING
    
    // Button click event
    const clickMeBtn = document.getElementById('click-me');
    const clickOutput = document.getElementById('click-output');
    
    clickMeBtn.addEventListener('click', function() {
        clickOutput.textContent = 'Button was clicked! 🎉';
        clickOutput.style.color = '#27ae60';
        
        // Reset after 2 seconds
        setTimeout(() => {
            clickOutput.textContent = 'Waiting for your click...';
            clickOutput.style.color = '';
        }, 2000);
    });
    
    // Hover events
    const hoverBox = document.querySelector('.hover-box');
    const hoverOutput = document.getElementById('hover-output');
    
    hoverBox.addEventListener('mouseenter', function() {
        hoverOutput.textContent = 'Mouse is inside! 🐭';
    });
    
    hoverBox.addEventListener('mouseleave', function() {
        hoverOutput.textContent = 'Mouse has left! 👋';
        
        // Reset after 1 second
        setTimeout(() => {
            hoverOutput.textContent = 'Mouse hasn\'t entered yet';
        }, 1000);
    });
    
    // Keypress detection
    const keypressInput = document.getElementById('keypress-input');
    const keypressOutput = document.getElementById('keypress-output');
    
    keypressInput.addEventListener('keyup', function(e) {
        keypressOutput.textContent = `You pressed: ${e.key} (Key code: ${e.keyCode})`;
    });
    
    // Secret action (double click or long press effect)
    const secretBox = document.querySelector('.secret-box');
    const secretOutput = document.getElementById('secret-output');
    let pressTimer;
    
    // Double click
    secretBox.addEventListener('dblclick', function() {
        secretOutput.textContent = 'You discovered the double-click secret! 🌟';
        secretBox.style.backgroundColor = '#fffacd';
        
        setTimeout(() => {
            secretOutput.textContent = '🤫';
            secretBox.style.backgroundColor = '';
        }, 3000);
    });
    
    // Long press
    secretBox.addEventListener('mousedown', function() {
        pressTimer = setTimeout(() => {
            secretOutput.textContent = 'Long press detected! You\'re persistent! 💪';
            secretBox.style.backgroundColor = '#e6e6fa';
            
            setTimeout(() => {
                secretOutput.textContent = '🤫';
                secretBox.style.backgroundColor = '';
            }, 3000);
        }, 1000); // 1 second hold
    });
    
    secretBox.addEventListener('mouseup', function() {
        clearTimeout(pressTimer);
    });
    
    secretBox.addEventListener('mouseleave', function() {
        clearTimeout(pressTimer);
    });
    
    
    // 3. INTERACTIVE ELEMENTS
    
    // Color changing button
    const colorChanger = document.getElementById('color-changer');
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    let colorIndex = 0;
    
    colorChanger.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        this.style.backgroundColor = colors[colorIndex];
        this.textContent = `Color Changed! (${colorIndex + 1}/${colors.length})`;
        
        // Add shake animation
        this.classList.add('shake');
        setTimeout(() => {
            this.classList.remove('shake');
        }, 500);
    });
    
    // Image gallery
    const galleryImage = document.getElementById('gallery-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const images = [
        'IMG_20250401_100118.jpg',
        'IMG_20250403_230346.jpg',
       
    ];
    let currentImageIndex = 0;
    
    function updateGalleryImage() {
        galleryImage.src = images[currentImageIndex];
        galleryImage.alt = `Gallery image ${currentImageIndex + 1}`;
    }
    
    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateGalleryImage();
    });
    
    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateGalleryImage();
    });
    
    // Tabs functionality on webpage
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update panes
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
    

    // 4. FORM VALIDATION

    const form = document.getElementById('validation-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const formStatus = document.getElementById('form-status');
    
    // Real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailInput.value.trim() === '') {
            emailError.textContent = '';
            return true; // Email is optional in this example
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }
    
    function validatePassword() {
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = '';
            return true; // Password is optional in this example
        } else if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        
        if (isNameValid && isEmailValid && isPasswordValid) {
            formStatus.textContent = 'Form submitted successfully! 🎉';
            formStatus.style.color = '#27ae60';
            
            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                formStatus.textContent = '';
            }, 3000);
        }
    });
});