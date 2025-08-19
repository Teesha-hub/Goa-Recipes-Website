// Recipe Data
const recipes = [
    // Desserts
    {
        id: 'bebinca',
        title: 'Traditional Bebinca',
        description: 'A rich, layered Goan dessert made with coconut milk, eggs, and palm sugar. Portuguese-influenced and served during Christmas.',
        image: 'https://cdn.tasteatlas.com/images/dishes/3ec25abc12f7497d813a82f27496d069.jpg?m=facebook',
        cookTime: '3 hours',
        servings: 8,
        difficulty: 'Hard',
        category: 'desserts',
        ingredients: [
            '2 cups coconut milk',
            '10 egg yolks',
            '1 cup palm sugar (jaggery)',
            '1/2 cup plain flour',
            '1/4 cup ghee',
            '1 tsp nutmeg powder'
        ],
        instructions: [
            'Mix coconut milk with palm sugar until dissolved',
            'Beat egg yolks and gradually add flour',
            'Combine mixtures slowly to avoid lumps',
            'Heat ghee in a round pan, pour one layer of batter',
            'Cook until golden, add next layer',
            'Repeat for 16-20 layers',
            'Cool completely before cutting'
        ],
        story: 'Bebinca is the queen of Goan desserts, traditionally served during Christmas. Each layer represents patience and love.'
    },
    {
        id: 'doce',
        title: 'Doce',
        description: 'A traditional Goan sweet made from Bengal gram, coconut, sugar, and ghee, often prepared during festive occasions.',
        image: 'https://cdn.shopify.com/s/files/1/0123/6372/files/d_CHANNA-DOCE-600x437_480x480.jpg?v=1637814771',
        cookTime: '1 hour',
        servings: 10,
        difficulty: 'Medium',
        category: 'desserts',
        ingredients: [
            '1 cup Bengal gram (chana dal)',
            '1 cup grated coconut',
            '1 cup sugar',
            '2 tbsp ghee',
            '1/2 tsp cardamom powder'
        ],
        instructions: [
            'Roast Bengal gram and grind into a coarse powder',
            'Mix with grated coconut, sugar, and cardamom',
            'Cook mixture in ghee until thick',
            'Spread in a greased tray and cool',
            'Cut into squares or diamonds'
        ],
        story: 'Doce is part of the traditional Goan “kuswar” sweets made during Christmas and weddings.'
    },
    {
        id: 'dodol',
        title: 'Dodol',
        description: 'A sticky, sweet pudding made from coconut milk, jaggery, and rice flour, enjoyed during Goan festivals.',
        image: 'https://tse1.mm.bing.net/th/id/OIP.gSqcY6Z1u55WXENuf16I1wHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        cookTime: '2 hours',
        servings: 8,
        difficulty: 'Hard',
        category: 'desserts',
        ingredients: [
            '2 cups coconut milk',
            '1 cup jaggery',
            '1 cup rice flour'
        ],
        instructions: [
            'Boil coconut milk and jaggery together',
            'Gradually add rice flour while stirring',
            'Cook on low heat until thick and sticky',
            'Pour into a tray and let it set',
            'Cut into pieces once cooled'
        ],
        story: 'Dodol is a festive Goan sweet, often made during Christmas and community celebrations.'
    },

    // Curries
    {
        id: 'sorpotel',
        title: 'Authentic Sorpotel',
        description: 'A spicy, tangy curry made with pork and liver, flavored with Goan spices and palm vinegar. Christmas and wedding favorite.',
        image: 'https://images.slurrp.com/prodarticles/8tq2dxymixk.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75',
        cookTime: '2 hours',
        servings: 6,
        difficulty: 'Medium',
        category: 'curries',
        ingredients: [
            '500g pork (cubed)',
            '200g pork liver',
            '15-20 red chilies',
            '1 tbsp coriander seeds',
            '1 tsp cumin seeds',
            '6-8 cloves',
            '1 inch cinnamon',
            '1 tbsp tamarind paste',
            'Palm vinegar'
        ],
        instructions: [
            'Boil pork and liver separately until tender',
            'Roast and grind all spices with vinegar',
            'Cook onions until golden brown',
            'Add spice paste and cook until oil separates',
            'Add meat and tamarind, simmer 30 minutes',
            'Adjust seasoning and consistency',
            'Best served after resting overnight'
        ]
    },
    {
        id: 'fish-curry',
        title: 'Goan Fish Curry',
        description: 'A coconut-based curry with fresh fish, kokum, and aromatic spices. The quintessential Goan comfort food served with rice.',
        image: 'https://1.bp.blogspot.com/-IB7h1xjNdBc/VW7FvesKetI/AAAAAAAAUjA/XxTXMKx-Eao/s1600/Goan%2BFish%2BCurry%2B%25281%2529%2B-%2B1.jpg',
        cookTime: '45 minutes',
        servings: 4,
        difficulty: 'Easy',
        category: 'curries',
        ingredients: [
            '500g fish fillets (kingfish/pomfret)',
            '2 cups coconut milk',
            '6-8 kokum petals',
            '2 tsp coriander seeds',
            '4-5 red chilies',
            '1/2 tsp turmeric',
            '3-4 green chilies',
            '1 onion, sliced',
            'Curry leaves'
        ],
        instructions: [
            'Grind coriander, red chilies with little water',
            'Heat oil, add curry leaves and onions',
            'Add ground paste and cook 5 minutes',
            'Pour coconut milk, add kokum and turmeric',
            'Bring to boil, add fish pieces',
            'Simmer until fish is cooked through',
            'Garnish with curry leaves'
        ]
    },
    {
        id: 'xacuti',
        title: 'Chicken Xacuti',
        description: 'A rich and spicy Goan curry with roasted spices and coconut. Traditionally prepared with chicken or lamb.',
        image: 'data:image/webp;base64,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',
        cookTime: '1.5 hours',
        servings: 4,
        difficulty: 'Medium',
        category: 'curries',
        ingredients: [
            '500g chicken',
            '1/2 cup grated coconut',
            '8-10 dried red chilies',
            '1 tsp coriander seeds',
            '1 tsp cumin seeds',
            '1 onion, chopped',
            '2 tbsp oil',
            'Salt to taste'
        ],
        instructions: [
            'Roast coconut and spices until golden',
            'Grind into a fine paste with little water',
            'Heat oil, sauté onions until translucent',
            'Add spice paste and cook 5 minutes',
            'Add chicken, cook until done',
            'Adjust seasoning'
        ]
    },

    // Snacks
    {
        id: 'sannas',
        title: 'Fluffy Sannas',
        description: 'Steamed rice cakes slightly sweetened with coconut milk. Served with curries or sausages.',
        image: 'data:image/webp;base64,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',
        cookTime: '1.5 hours',
        servings: 6,
        difficulty: 'Medium',
        category: 'snacks',
        ingredients: [
            '2 cups rice flour',
            '1 cup coconut milk',
            '1 tsp yeast',
            '2 tsp sugar',
            'Pinch of salt'
        ],
        instructions: [
            'Mix rice flour, yeast, sugar, salt, and coconut milk into a smooth batter',
            'Allow batter to ferment 4-6 hours',
            'Pour into small molds and steam for 15-20 minutes',
            'Serve warm'
        ]
    },
    {
        id: 'rava-fried-fish',
        title: 'Rava Fried Fish',
        description: 'Crispy fried fish coated with semolina and spices. Popular Goan street food.',
        image: 'data:image/webp;base64,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',
        cookTime: '30 minutes',
        servings: 4,
        difficulty: 'Easy',
        category: 'snacks',
        ingredients: [
            '500g fish fillets',
            '1 cup semolina (rava)',
            '1 tsp turmeric',
            '1 tsp red chili powder',
            'Salt to taste',
            'Oil for frying'
        ],
        instructions: [
            'Marinate fish with turmeric, chili, and salt',
            'Coat with semolina',
            'Heat oil in a pan and fry until golden and crispy',
            'Serve hot'
        ]
    },
    {
        id: 'goan-sausage-curry',
        title: 'Goan Sausage Curry',
        description: 'Spicy and tangy curry made with Goan chorizo, onions, and tomatoes. Best served with rice or sannas.',
        image: 'https://th.bing.com/th/id/OIP.Qd4jmsjAbKMqSQIDp3PD3AHaJJ?w=150&h=185&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3',
        cookTime: '45 minutes',
        servings: 4,
        difficulty: 'Medium',
        category: 'snacks',
        ingredients: [
            '250g Goan sausage (chorizo)',
            '1 onion, chopped',
            '2 tomatoes, chopped',
            '2 tbsp oil',
            '1 tsp chili powder',
            'Salt to taste'
        ],
        instructions: [
            'Heat oil, sauté onions until golden',
            'Add tomatoes and cook until soft',
            'Add sliced sausages and chili powder',
            'Simmer 15-20 minutes',
            'Serve hot with rice or sannas'
        ]
    },

    // Drinks
    {
        id: 'feni',
        title: 'Feni',
        description: 'Traditional Goan spirit made from cashew apples or coconut sap.',
        image: 'data:image/webp;base64,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',
        cookTime: 'N/A',
        servings: 1,
        difficulty: 'Medium',
        category: 'drinks',
        ingredients: [
            'Cashew apples or coconut sap',
            'Distillation equipment (for traditional Feni)'
        ],
        instructions: [
            'Ferment cashew apples or coconut sap for several days',
            'Distill the fermented liquid carefully',
            'Bottle and serve responsibly'
        ]
    },
    {
        id: 'sol-kadhi',
        title: 'Sol Kadhi',
        description: 'A refreshing, tangy drink made from kokum and coconut milk, often served after meals.',
        image: 'https://th.bing.com/th/id/OIP.r5QYo13o6jV_hF9UDP3yBQHaE8?w=296&h=197&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3',
        cookTime: '10 minutes',
        servings: 4,
        difficulty: 'Easy',
        category: 'drinks',
        ingredients: [
            '10-12 kokum petals',
            '2 cups coconut milk',
            '2 green chilies',
            '1 clove garlic',
            'Coriander leaves',
            'Salt to taste'
        ],
        instructions: [
            'Soak kokum petals in water for 10 minutes',
            'Blend coconut milk, soaked kokum, garlic, and green chilies',
            'Add salt and garnish with coriander',
            'Serve chilled'
        ]
    }
];

// Ingredients Data
const ingredients = [
    {
        id: 'kokum',
        name: 'Kokum',
        description: 'A dark purple fruit that adds a tangy, slightly sour flavor to curries. Essential for authentic Goan fish curry.',
        image: 'data:image/webp;base64,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',
        uses: ['Fish curry', 'Sol kadhi', 'Sambhar'],
        availability: 'Dried form available year-round'
    },
    {
        id: 'palm-vinegar',
        name: 'Palm Vinegar',
        description: 'Made from fermented palm wine, this vinegar has a unique sweet-sour taste that\'s irreplaceable in Goan cuisine.',
        image: 'data:image/webp;base64,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',
        uses: ['Sorpotel', 'Vindaloo', 'Pickles'],
        availability: 'Specialty stores in Goa'
    },
    {
        id: 'cashew-apple',
        name: 'Cashew Apple',
        description: 'The fleshy part of the cashew fruit, used to make feni and other traditional drinks. Sweet and astringent.',
        image: 'data:image/webp;base64,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',
        uses: ['Feni', 'Neera', 'Jams'],
        availability: 'March to May in Goa'
    },
    {
        id: 'ghee-roast',
        name: 'Homemade Ghee',
        description: 'Pure clarified butter made from buffalo or cow milk, essential for authentic flavors in sweets and curries.',
        image: 'data:image/webp;base64,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',
        uses: ['Bebinca', 'Rice preparations', 'Tempering'],
        availability: 'Made fresh at home'
    },
    {
        id: 'coconut-palm-sugar',
        name: 'Palm Sugar (Jaggery)',
        description: 'Natural sweetener made from coconut palm sap. Adds complex sweetness and depth to desserts.',
        image: 'https://th.bing.com/th/id/OIP.pntMWtrx3lvsxqyXOo_sQwHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3',
        uses: ['Bebinca', 'Dodol', 'Traditional sweets'],
        availability: 'Local markets in Goa'
    },
    {
        id: 'tamarind',
        name: 'Tamarind',
        description: 'Sour fruit pod that provides tartness to curries and chutneys. Used both fresh and as paste.',
        image: 'https://th.bing.com/th/id/OIP.N3Fa8VsNtFRtkNjPU8j5kwHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3',
        uses: ['Curries', 'Chutneys', 'Sambhar'],
        availability: 'Available year-round'
    }
];

// Cooking Tips Data
const cookingTips = [
    {
        id: 'clay-pot-cooking',
        title: 'Clay Pot Cooking',
        description: 'Traditional Goan cooking was done in clay pots which impart a unique earthy flavor to the food.',
        technique: 'Season clay pots by soaking in water overnight before first use. Cook on low heat to prevent cracking.'
    },
    {
        id: 'coconut-grinding',
        title: 'Fresh Coconut Grinding',
        description: 'The secret to authentic Goan cuisine is using freshly grated coconut and grinding it properly.',
        technique: 'Use a traditional stone grinder (aam-kallu) for best texture. Add little warm water while grinding.'
    },
    {
        id: 'spice-roasting',
        title: 'Spice Roasting Technique',
        description: 'Roasting spices individually brings out their essential oils and creates deeper flavors.',
        technique: 'Roast each spice separately until aromatic. Cool completely before grinding to prevent moisture.'
    },
    {
        id: 'kokum-soaking',
        title: 'Kokum Preparation',
        description: 'Proper soaking and handling of kokum is crucial for the right balance of sourness.',
        technique: 'Soak kokum in warm water for 15 minutes. Squeeze gently to extract juice, discard the pulp.'
    }
];

// Daily Tips Data
const dailyTips = [
    "Always use fresh coconut milk for authentic Goan curries. Extract it yourself by grating fresh coconut and squeezing with warm water.",
    "Toast whole spices before grinding them for maximum flavor. The aroma will tell you when they're ready.",
    "Palm vinegar is irreplaceable in traditional Goan recipes. If unavailable, use white wine vinegar as a substitute.",
    "Kokum should be soaked in warm water for 15 minutes before use. Never boil it directly in the curry.",
    "Traditional clay pots add an earthy flavor to curries. Season them properly before first use.",
    "Fresh curry leaves make a huge difference. Add them at the end of cooking to preserve their aroma.",
    "Jaggery (palm sugar) gives a deeper, more complex sweetness than regular sugar in Goan desserts.",
    "Always marinate fish with turmeric and salt for at least 15 minutes before cooking.",
    "Grind spices in small batches for the freshest flavor. Store in airtight containers.",
    "Coconut oil is traditional for Goan cooking, but ghee adds richness to special occasion dishes."
];

// Helper function for debouncing
function debounce(func, wait = 20, immediate = false) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const recipesGrid = document.getElementById('recipes-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');
const modal = document.getElementById('recipe-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderRecipes();
    renderCookingTips();
    renderIngredients();
    initializeFilters();
    initializeContactForm();
    initializeDailyTip();
    initializeScrollEffects();
});

// Navigation Functions
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', debounce(function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
    }));
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavLink() {
    const sections = ['home', 'about', 'recipes', 'featured', 'tips', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section}`) {
                        link.classList.add('active');
                    }
                });
                break;
            }
        }
    }
}

// Recipe Functions
function renderRecipes(filter = 'all') {
    recipesGrid.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    const filteredRecipes = filter === 'all' 
        ? recipes 
        : recipes.filter(recipe => recipe.category === filter);

    filteredRecipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        fragment.appendChild(recipeCard);
    });
    recipesGrid.appendChild(fragment);
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.setAttribute('data-category', recipe.category);
    
    card.innerHTML = `
        <div class="recipe-image">
            <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
            <div class="difficulty-badge">${recipe.difficulty}</div>
        </div>
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-meta">
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${recipe.cookTime}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-users"></i>
                    <span>${recipe.servings} servings</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-signal"></i>
                    <span>Traditional</span>
                </div>
            </div>
            <button class="recipe-button" onclick="showRecipeModal('${recipe.id}')">
                <i class="fas fa-book-open"></i>
                Read More
            </button>
        </div>
    `;
    
    return card;
}

function initializeFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter and re-render recipes
            renderRecipes(filter);
        });
    });
}

// Modal Functions
function showRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    modalTitle.textContent = recipe.title;
    modalBody.innerHTML = `
        <div class="modal-recipe-content">
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px; margin-bottom: 2rem;">
            
            <div class="recipe-meta" style="margin-bottom: 2rem;">
                <div class="meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${recipe.cookTime}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-users"></i>
                    <span>${recipe.servings} servings</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-signal"></i>
                    <span>${recipe.difficulty}</span>
                </div>
            </div>
            
            <p style="font-size: 1.1rem; color: var(--text-light); margin-bottom: 2rem; line-height: 1.7;">${recipe.description}</p>
            
            ${recipe.story ? `
                <div class="recipe-story" style="margin-bottom: 2rem;">
                    <p><em>"${recipe.story}"</em></p>
                </div>
            ` : ''}
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Ingredients:</h4>
                <ul style="list-style: none; padding: 0;">
                    ${recipe.ingredients.map(ingredient => `
                        <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; color: var(--text-light);">
                            <div style="width: 8px; height: 8px; background: var(--primary-color); border-radius: 50%; flex-shrink: 0;"></div>
                            ${ingredient}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div>
                <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Instructions:</h4>
                <ol style="padding-left: 1.5rem;">
                    ${recipe.instructions.map(instruction => `
                        <li style="margin-bottom: 1rem; color: var(--text-light); line-height: 1.6;">${instruction}</li>
                    `).join('')}
                </ol>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Tips and Ingredients Functions
function renderCookingTips() {
    const tipsContainer = document.getElementById('cooking-tips');
    if (!tipsContainer) return;
    
    tipsContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    cookingTips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.className = 'tip-item';
        tipElement.innerHTML = `
            <h4>${tip.title}</h4>
            <p>${tip.description}</p>
            <div class="tip-technique">
                <p><strong>Technique:</strong> ${tip.technique}</p>
            </div>
        `;
        fragment.appendChild(tipElement);
    });
    tipsContainer.appendChild(fragment);
}

function renderIngredients() {
    const ingredientsContainer = document.getElementById('ingredients-list');
    if (!ingredientsContainer) return;
    
    ingredientsContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    ingredients.forEach(ingredient => {
        const ingredientElement = document.createElement('div');
        ingredientElement.className = 'ingredient-item';
        ingredientElement.innerHTML = `
            <div class="ingredient-image">
                <img src="${ingredient.image}" alt="${ingredient.name}" loading="lazy">
            </div>
            <div class="ingredient-info">
                <h4>${ingredient.name}</h4>
                <p>${ingredient.description}</p>
                <div class="ingredient-uses">
                    ${ingredient.uses.map(use => `<span class="use-tag">${use}</span>`).join('')}
                </div>
                <p class="ingredient-availability">${ingredient.availability}</p>
            </div>
        `;
        fragment.appendChild(ingredientElement);
    });
    ingredientsContainer.appendChild(fragment);
}

// Daily Tip Functions
function initializeDailyTip() {
    const refreshButton = document.querySelector('.tip-refresh');
    if (refreshButton) {
        refreshButton.addEventListener('click', refreshTip);
    }
    displayRandomTip();
}

function displayRandomTip() {
    const tipContent = document.getElementById('tip-content');
    if (!tipContent) return;
    
    const randomTip = dailyTips[Math.floor(Math.random() * dailyTips.length)];
    tipContent.innerHTML = `<p>${randomTip}</p>`;
}

function refreshTip() {
    const tipCard = document.getElementById('daily-tip-card');
    tipCard.style.transform = 'rotateY(90deg)';
    
    setTimeout(() => {
        displayRandomTip();
        tipCard.style.transform = 'rotateY(0deg)';
    }, 200);
}

// Contact Form Functions
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #28a745, #20c997);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(40, 167, 69, 0.3);
        z-index: 1000;
        animation: slideInRight 0.5s ease;
    `;
    successDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-check-circle"></i>
            <span>Thank you! Your message has been sent successfully.</span>
        </div>
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            document.body.removeChild(successDiv);
        }, 500);
    }, 3000);
}

// Scroll Effects
function initializeScrollEffects() {
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.recipe-card, .tip-item, .ingredient-item, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add CSS animations for success message
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