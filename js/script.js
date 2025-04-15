/**
 * Cook It Game
 * A game where players collect, trade, and play with cooking-themed characters.
 *
 * Features:
 * - Collection of cooks with different rarities
 * - Minigames to earn tokens
 * - Gauntlets system for special benefits
 * - Pack opening system
 * - Settings for sound and music
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Game data
  const packs = {
    og: {
      name: "OG Pack",
      description: "The original Cook It pack with special creator cooks!",
      price: 1000,
      image: "https://via.placeholder.com/200x200.png?text=OG+Pack",
      cooks: [
        { name: "kittenlove1311", rarity: "common", chance: 4.6875, image: "https://via.placeholder.com/150x150.png?text=kittenlove1311" },
        { name: "FISHED", rarity: "common", chance: 4.6875, image: "https://via.placeholder.com/150x150.png?text=FISHED" },
        { name: "tae", rarity: "common", chance: 4.6875, image: "https://via.placeholder.com/150x150.png?text=tae" },
        { name: "Rollinforeva", rarity: "common", chance: 4.6875, image: "https://via.placeholder.com/150x150.png?text=Rollinforeva" },
        { name: "blabla", rarity: "rare", chance: 5, image: "https://via.placeholder.com/150x150.png?text=blabla" },
        { name: "open-tae", rarity: "rare", chance: 5, image: "https://via.placeholder.com/150x150.png?text=open-tae" },
        { name: "bethaniel", rarity: "epic", chance: 1.15, image: "https://via.placeholder.com/150x150.png?text=bethaniel" },
        { name: "pizza_kid", rarity: "epic", chance: 1.15, image: "https://via.placeholder.com/150x150.png?text=pizza_kid" },
        { name: "Katie", rarity: "5-star", chance: 0.31, image: "https://via.placeholder.com/150x150.png?text=Katie" },
        { name: "Splash88", rarity: "exotic", chance: 0.02, image: "https://via.placeholder.com/150x150.png?text=Splash88" },
        { name: "SigmaQian", rarity: "exotic", chance: 0.02, image: "https://via.placeholder.com/150x150.png?text=SigmaQian" },
        { name: "GoogleChroma", rarity: "michelin", chance: 0.0025, image: "https://via.placeholder.com/150x150.png?text=GoogleChroma" },
        { name: "MystiQuest", rarity: "michelin", chance: 0.007, image: "https://via.placeholder.com/150x150.png?text=MystiQuest" },
        { name: "OG Party", rarity: "secret", chance: 0.0005, image: "https://via.placeholder.com/150x150.png?text=OG+Party" }
      ]
    },
    koreatown: {
      name: "Koreatown Pack",
      description: "Delicious Korean cuisine cooks!",
      price: 750,
      image: "https://via.placeholder.com/200x200.png?text=Koreatown",
      cooks: [
        { name: "Mandoo", rarity: "common", chance: 6.25, image: "https://via.placeholder.com/150x150.png?text=Mandoo" },
        { name: "Brown Sugar Pancake", rarity: "common", chance: 6.25, image: "https://via.placeholder.com/150x150.png?text=Brown+Sugar+Pancake" },
        { name: "Scallion Jeon", rarity: "common", chance: 6.25, image: "https://via.placeholder.com/150x150.png?text=Scallion+Jeon" },
        { name: "Japchae", rarity: "rare", chance: 5, image: "https://via.placeholder.com/150x150.png?text=Japchae" },
        { name: "Bulgogi", rarity: "rare", chance: 5, image: "https://via.placeholder.com/150x150.png?text=Bulgogi" },
        { name: "Chilsung Cider", rarity: "epic", chance: 1.15425, image: "https://via.placeholder.com/150x150.png?text=Chilsung+Cider" },
        { name: "K-BBQ", rarity: "epic", chance: 1.15425, image: "https://via.placeholder.com/150x150.png?text=K-BBQ" },
        { name: "Tteokbokki", rarity: "5-star", chance: 0.3, image: "https://via.placeholder.com/150x150.png?text=Tteokbokki" },
        { name: "Melona", rarity: "exotic", chance: 0.02, image: "https://via.placeholder.com/150x150.png?text=Melona" },
        { name: "Shin Ramen", rarity: "exotic", chance: 0.02, image: "https://via.placeholder.com/150x150.png?text=Shin+Ramen" },
        { name: "Heavenly Kimchi", rarity: "michelin", chance: 0.003, image: "https://via.placeholder.com/150x150.png?text=Heavenly+Kimchi" }
      ]
    },
    chinatown: {
      name: "Chinatown Pack",
      description: "Authentic Chinese cuisine cooks!",
      price: 750,
      image: "https://via.placeholder.com/200x200.png?text=Chinatown",
      cooks: [
        { name: "Spring Roll", rarity: "common", chance: 4.25, image: "https://via.placeholder.com/150x150.png?text=Spring+Roll" },
        { name: "Dumpling", rarity: "common", chance: 4.25, image: "https://via.placeholder.com/150x150.png?text=Dumpling" },
        { name: "Tanghulu", rarity: "common", chance: 4.25, image: "https://via.placeholder.com/150x150.png?text=Tanghulu" },
        { name: "Steamed Bun", rarity: "common", chance: 4.25, image: "https://via.placeholder.com/150x150.png?text=Steamed+Bun" },
        { name: "Mapo Tofu", rarity: "rare", chance: 5.5, image: "https://via.placeholder.com/150x150.png?text=Mapo+Tofu" },
        { name: "Fried Rice", rarity: "rare", chance: 5.5, image: "https://via.placeholder.com/150x150.png?text=Fried+Rice" },
        { name: "Soup Dumpling", rarity: "epic", chance: 2.35, image: "https://via.placeholder.com/150x150.png?text=Soup+Dumpling" },
        { name: "Eight Treasures Rice", rarity: "epic", chance: 2.35, image: "https://via.placeholder.com/150x150.png?text=Eight+Treasures+Rice" },
        { name: "Peking Duck", rarity: "5-star", chance: 0.55, image: "https://via.placeholder.com/150x150.png?text=Peking+Duck" },
        { name: "Golden Fortune Cookie", rarity: "exotic", chance: 0.012, image: "https://via.placeholder.com/150x150.png?text=Golden+Fortune+Cookie" },
        { name: "Golden Noodles", rarity: "exotic", chance: 0.012, image: "https://via.placeholder.com/150x150.png?text=Golden+Noodles" },
        { name: "Moonlit Mooncake", rarity: "michelin", chance: 0.002, image: "https://via.placeholder.com/150x150.png?text=Moonlit+Mooncake" }
      ]
    },
    indian: {
      name: "Indian Market Pack",
      description: "Spicy and flavorful Indian cuisine cooks!",
      price: 750,
      image: "https://via.placeholder.com/200x200.png?text=Indian+Market",
      cooks: [
        { name: "Kebab", rarity: "common", chance: 6.5, image: "https://via.placeholder.com/150x150.png?text=Kebab" },
        { name: "Biryani", rarity: "common", chance: 6.5, image: "https://via.placeholder.com/150x150.png?text=Biryani" },
        { name: "Tandoori Chicken", rarity: "common", chance: 6.5, image: "https://via.placeholder.com/150x150.png?text=Tandoori+Chicken" },
        { name: "Naan", rarity: "rare", chance: 3.67, image: "https://via.placeholder.com/150x150.png?text=Naan" },
        { name: "Samosa", rarity: "rare", chance: 3.67, image: "https://via.placeholder.com/150x150.png?text=Samosa" },
        { name: "Dosa", rarity: "rare", chance: 3.67, image: "https://via.placeholder.com/150x150.png?text=Dosa" },
        { name: "Dal", rarity: "epic", chance: 1.95, image: "https://via.placeholder.com/150x150.png?text=Dal" },
        { name: "Okra", rarity: "epic", chance: 1.95, image: "https://via.placeholder.com/150x150.png?text=Okra" },
        { name: "Mango Lassi", rarity: "5-star", chance: 0.6, image: "https://via.placeholder.com/150x150.png?text=Mango+Lassi" },
        { name: "Chana Masala", rarity: "exotic", chance: 0.012, image: "https://via.placeholder.com/150x150.png?text=Chana+Masala" },
        { name: "Paneer Tikka Masala", rarity: "exotic", chance: 0.012, image: "https://via.placeholder.com/150x150.png?text=Paneer+Tikka+Masala" },
        { name: "Butter Chicken", rarity: "michelin", chance: 0.002, image: "https://via.placeholder.com/150x150.png?text=Butter+Chicken" }
      ]
    },
    littleitaly: {
      name: "Little Italy Pack",
      description: "Authentic Italian cuisine cooks!",
      price: 750,
      image: "https://via.placeholder.com/200x200.png?text=Little+Italy",
      cooks: [
        { name: "Garlic Bread", rarity: "common", chance: 6.25, image: "https://via.placeholder.com/150x150.png?text=Garlic+Bread" },
        { name: "Caprese Salad", rarity: "common", chance: 6.25, image: "https://via.placeholder.com/150x150.png?text=Caprese+Salad" },
        { name: "Focaccia", rarity: "common", chance: 6.25, image: "https://via.placeholder.com/150x150.png?text=Focaccia" },
        { name: "Cannoli", rarity: "rare", chance: 5, image: "https://via.placeholder.com/150x150.png?text=Cannoli" },
        { name: "Lasagna", rarity: "rare", chance: 5, image: "https://via.placeholder.com/150x150.png?text=Lasagna" },
        { name: "Gelato Cup", rarity: "epic", chance: 1.33, image: "https://via.placeholder.com/150x150.png?text=Gelato+Cup" },
        { name: "Osso Buco", rarity: "epic", chance: 1.33, image: "https://via.placeholder.com/150x150.png?text=Osso+Buco" },
        { name: "Prosciutto", rarity: "epic", chance: 1.33, image: "https://via.placeholder.com/150x150.png?text=Prosciutto" },
        { name: "Tiramisu", rarity: "5-star", chance: 0.3, image: "https://via.placeholder.com/150x150.png?text=Tiramisu" },
        { name: "Truffle Pasta", rarity: "exotic", chance: 0.02, image: "https://via.placeholder.com/150x150.png?text=Truffle+Pasta" },
        { name: "Margherita Pizza", rarity: "exotic", chance: 0.02, image: "https://via.placeholder.com/150x150.png?text=Margherita+Pizza" },
        { name: "Risotto Milanese", rarity: "michelin", chance: 0.003, image: "https://via.placeholder.com/150x150.png?text=Risotto+Milanese" }
      ]
    }
  };

  const minigames = {
    cookingRush: {
      name: "Cooking Rush",
      description: "Prepare dishes as fast as you can!",
      image: "https://via.placeholder.com/200x150.png?text=Cooking+Rush",
      energyCost: 5
    },
    ingredientCatch: {
      name: "Ingredient Catch",
      description: "Catch the falling ingredients and avoid the bad ones!",
      image: "https://via.placeholder.com/200x150.png?text=Ingredient+Catch",
      energyCost: 3
    },
    recipeMemory: {
      name: "Recipe Memory",
      description: "Remember and match the recipe cards!",
      image: "https://via.placeholder.com/200x150.png?text=Recipe+Memory",
      energyCost: 4
    }
  };

  const gauntlets = {
    beginnerMitt: {
      name: "Beginner's Mitt",
      description: "A basic cooking mitt for beginners.",
      image: "https://via.placeholder.com/150x150.png?text=Beginner's+Mitt",
      benefits: ["10%  more tokens from minigames", "5% chance for extra energy when playing minigames"],
      requirements: [],
      cost: 0,
      unlocked: true
    },
    chefGlove: {
      name: "Chef's Glove",
      description: "A professional chef's glove for serious cooks.",
      image: "https://via.placeholder.com/150x150.png?text=Chef's+Glove",
      benefits: ["25% more tokens from minigames", "10% chance for extra energy when playing minigames", "5% discount on packs"],
      requirements: ["10 Common Cooks", "5 Rare Cooks"],
      cost: 5,
      unlocked: false
    },
    masterGauntlet: {
      name: "Master's Gauntlet",
      description: "A gauntlet worn by master chefs.",
      image: "https://via.placeholder.com/150x150.png?text=Master's+Gauntlet",
      benefits: ["50% more tokens from minigames", "20% chance for extra energy when playing minigames", "10% discount on packs", "5% chance to get a rarity upgrade when opening packs"],
      requirements: ["20 Common Cooks", "10 Rare Cooks", "5 Epic Cooks"],
      cost: 10,
      unlocked: false
    },
    michelinGlove: {
      name: "Michelin Glove",
      description: "A prestigious glove for elite chefs.",
      image: "https://via.placeholder.com/150x150.png?text=Michelin+Glove",
      benefits: ["100% more tokens from minigames", "30% chance for extra energy when playing minigames", "15% discount on packs", "10% chance to get a rarity upgrade when opening packs", "Daily claim cooldown reduced by 1 hour"],
      requirements: ["30 Common Cooks", "20 Rare Cooks", "10 Epic Cooks", "3 5-Star Cooks"],
      cost: 20,
      unlocked: false
    },
    infinityGauntlet: {
      name: "Infinity Gauntlet",
      description: "The most powerful gauntlet in the universe.",
      image: "https://via.placeholder.com/150x150.png?text=Infinity+Gauntlet",
      benefits: ["200% more tokens from minigames", "50% chance for extra energy when playing minigames", "25% discount on packs", "20% chance to get a rarity upgrade when opening packs", "Daily claim cooldown reduced by 2 hours", "1% chance to get a Michelin cook from any pack"],
      requirements: ["50 Common Cooks", "30 Rare Cooks", "20 Epic Cooks", "10 5-Star Cooks", "5 Exotic Cooks", "1 Michelin Cook"],
      cost: 50,
      unlocked: false
    }
  };

  // User data (would normally be stored in a database)
  let userData = {
    username: "Player1",
    tokens: 5000,
    energy: 20,
    maxEnergy: 20,
    role: "common",
    cooks: [],
    equippedGauntlet: "beginnerMitt",
    lastDailyClaim: null,
    stats: {
      packsOpened: 0,
      minigamesPlayed: 0,
      tokensEarned: 0,
      cooksSold: 0
    },
    badges: [],
    settings: {
      soundEnabled: true,
      musicEnabled: true
    }
  };

  // Initialize some cooks for testing
  userData.cooks = [
    { name: "kittenlove1311", rarity: "common", image: "https://via.placeholder.com/150x150.png?text=kittenlove1311" },
    { name: "FISHED", rarity: "common", image: "https://via.placeholder.com/150x150.png?text=FISHED" },
    { name: "tae", rarity: "common", image: "https://via.placeholder.com/150x150.png?text=tae" },
    { name: "blabla", rarity: "rare", image: "https://via.placeholder.com/150x150.png?text=blabla" },
    { name: "bethaniel", rarity: "epic", image: "https://via.placeholder.com/150x150.png?text=bethaniel" }
  ];

  // Token values for quick sell
  const tokenValues = {
    "common": 50,
    "uncommon": 100,
    "rare": 200,
    "epic": 500,
    "5-star": 1000,
    "exotic": 2500,
    "michelin": 5000,
    "secret": 10000
  };

  // Audio elements
  let backgroundMusic = null;
  let soundEffects = {
    click: null,
    success: null,
    fail: null,
    purchase: null,
    reveal: null
  };

  // DOM elements
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const errorMessage = document.querySelector('.error-message');
  const menuItems = document.querySelectorAll('.menu-item');
  const tabContents = document.querySelectorAll('.tab-content');
  const tokenDisplay = document.getElementById('token-display');
  const energyDisplay = document.getElementById('energy-display');
  const usernameDisplay = document.getElementById('username-display');
  const shopContainer = document.getElementById('shop-container');
  const cooksContainer = document.getElementById('cooks-container');
  const cooksFilter = document.getElementById('cooks-filter');
  const minigamesContainer = document.getElementById('minigames-container');
  const gauntletsContainer = document.getElementById('gauntlets-container');
  const equippedGauntletDisplay = document.getElementById('equipped-gauntlet');
  const packModal = document.getElementById('pack-modal');
  const cookModal = document.getElementById('cook-modal');
  const messageModal = document.getElementById('message-modal');
  const gauntletModal = document.getElementById('gauntlet-modal');
  const gameModal = document.getElementById('game-modal');
  const closeButtons = document.querySelectorAll('.close-btn');
  const soundToggle = document.getElementById('sound-toggle');
  const musicToggle = document.getElementById('music-toggle');
  const usernameInput = document.getElementById('username-input');
  const passwordInput = document.getElementById('password-input');
  const saveSettingsBtn = document.getElementById('save-settings-btn');
  const settingsMessage = document.getElementById('settings-message');
  const spinBtn = document.getElementById('spin-btn');
  const wheel = document.getElementById('wheel');
  const cooldownTimer = document.getElementById('cooldown-timer');

  /**
   * Game initialization
   * Sets up event listeners and initializes game components
   */
  function init() {
    // Show splash screen
    document.getElementById('splash-screen').classList.add('active');

    // Initialize audio (would normally load actual audio files)
    initAudio();

    // Auth tabs
    authTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        playSound('click');
        authTabs.forEach(t => t.classList.remove('active'));
        authForms.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-form')).classList.add('active');
        errorMessage.textContent = '';
      });
    });

    // Login form
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = this.querySelector('input[name="username"]').value;
      const password = this.querySelector('input[name="password"]').value;

      // Simple validation (would normally check against a database)
      if (username && password) {
        playSound('success');
        userData.username = username;
        showGameScreen();
      } else {
        playSound('fail');
        errorMessage.textContent = 'Please enter both username and password.';
      }
    });

    // Register form
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = this.querySelector('input[name="username"]').value;
      const password = this.querySelector('input[name="password"]').value;
      const confirmPassword = this.querySelector('input[name="confirm-password"]').value;

      // Simple validation
      if (!username || !password) {
        playSound('fail');
        errorMessage.textContent = 'Please enter both username and password.';
        return;
      }

      if (password !== confirmPassword) {
        playSound('fail');
        errorMessage.textContent = 'Passwords do not match.';
        return;
      }

      playSound('success');
      userData.username = username;
      showGameScreen();
    });

    // Menu items
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        playSound('click');
        menuItems.forEach(i => i.classList.remove('active'));
        tabContents.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.getAttribute('data-tab')).classList.add('active');
      });
    });

    // Close buttons for modals
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        playSound('click');
        this.closest('.modal').style.display = 'none';
      });
    });

    // Daily claim wheel
    spinBtn.addEventListener('click', spinWheel);

    // Initialize shop
    initShop();

    // Initialize cooks
    initCooks();

    // Initialize minigames
    initMinigames();

    // Initialize gauntlets
    initGauntlets();

    // Initialize settings
    initSettings();

    // Check daily claim cooldown
    checkDailyClaim();

    // Window click to close modals
    window.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
      }
    });
  }

  /**
   * Initialize audio elements
   */
  function initAudio() {
    // In a production environment, you would load actual audio files
    // For this example, we'll just create empty audio elements
    backgroundMusic = new Audio();

    soundEffects.click = new Audio();
    soundEffects.success = new Audio();
    soundEffects.fail = new Audio();
    soundEffects.purchase = new Audio();
    soundEffects.reveal = new Audio();
  }

  /**
   * Play a sound effect
   * @param {string} sound - The sound to play
   */
  function playSound(sound) {
    if (userData.settings.soundEnabled && soundEffects[sound]) {
      soundEffects[sound].play().catch(e => {
        // Ignore errors (browsers may block autoplay)
        console.log("Sound playback error:", e);
      });
    }
  }

  /**
   * Toggle background music
   * @param {boolean} play - Whether to play or pause the music
   */
  function toggleMusic(play) {
    if (backgroundMusic) {
      if (play && userData.settings.musicEnabled) {
        backgroundMusic.loop = true;
        backgroundMusic.play().catch(e => {
          // Ignore errors (browsers may block autoplay)
          console.log("Music playback error:", e);
        });
      } else {
        backgroundMusic.pause();
      }
    }
  }

  /**
   * Show game screen
   * Hides splash screen and shows the main game screen
   */
  function showGameScreen() {
    document.getElementById('splash-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    updateUI();
    toggleMusic(true);
  }

  /**
   * Update UI
   * Updates all UI elements with current user data
   */
  function updateUI() {
    tokenDisplay.textContent = userData.tokens;
    energyDisplay.textContent = `${userData.energy}/${userData.maxEnergy}`;
    usernameDisplay.textContent = userData.username;

    // Update profile
    document.getElementById('profile-username').textContent = userData.username;
    document.getElementById('profile-role').textContent = userData.role;
    document.getElementById('profile-role').className = `role-badge ${userData.role}`;

    // Update stats
    document.getElementById('packs-opened').textContent = userData.stats.packsOpened;
    document.getElementById('minigames-played').textContent = userData.stats.minigamesPlayed;
    document.getElementById('tokens-earned').textContent = userData.stats.tokensEarned;
    document.getElementById('cooks-sold').textContent = userData.stats.cooksSold;

    // Update equipped gauntlet
    updateEquippedGauntlet();
  }

  /**
   * Initialize shop
   * Populates the shop with available packs
   */
  function initShop() {
    shopContainer.innerHTML = '';

    for (const packId in packs) {
      const pack = packs[packId];
      const packCard = document.createElement('div');
      packCard.className = 'pack-card';
      packCard.innerHTML = `
                <div class="pack-image">
                    <img src="${pack.image}" alt="${pack.name}">
                </div>
                <div class="pack-info">
                    <h3>${pack.name}</h3>
                    <p>${pack.description}</p>
                    <div class="pack-price">${pack.price} Tokens</div>
                    <button class="btn-primary buy-pack-btn" data-pack="${packId}">Buy Pack</button>
                </div>
            `;
      shopContainer.appendChild(packCard);
    }

    // Buy pack buttons
    const buyPackButtons = document.querySelectorAll('.buy-pack-btn');
    buyPackButtons.forEach(button => {
      button.addEventListener('click', function() {
        playSound('click');
        const packId = this.getAttribute('data-pack');
        buyPack(packId);
      });
    });
  }

  /**
   * Initialize cooks
   * Populates the cooks tab with the user's collection
   */
  function initCooks() {
    cooksContainer.innerHTML = '';

    // Filter cooks
    let filteredCooks = [...userData.cooks];
    const filterValue = cooksFilter.value;

    if (filterValue !== 'all') {
      filteredCooks = filteredCooks.filter(cook => cook.rarity === filterValue);
    }

    // Sort cooks by rarity (highest first)
    const rarityOrder = ['secret', 'michelin', 'exotic', '5-star', 'epic', 'rare', 'uncommon', 'common'];
    filteredCooks.sort((a, b) => {
      return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
    });

    // Display cooks
    filteredCooks.forEach(cook => {
      const cookCard = document.createElement('div');
      cookCard.className = 'cook-card';
      cookCard.innerHTML = `
                <div class="cook-image">
                    <img src="${cook.image}" alt="${cook.name}">
                </div>
                <div class="cook-info">
                    <h4>${cook.name}</h4>
                    <div class="cook-rarity rarity-${cook.rarity}">${cook.rarity}</div>
                </div>
            `;
      cookCard.addEventListener('click', function() {
        playSound('click');
        showCookDetails(cook);
      });
      cooksContainer.appendChild(cookCard);
    });

    // Filter change event
    cooksFilter.addEventListener('change', function() {
      playSound('click');
      initCooks();
    });
  }

  /**
   * Initialize minigames
   * Populates the minigames tab with available games
   */
  function initMinigames() {
    minigamesContainer.innerHTML = '';

    for (const gameId in minigames) {
      const game = minigames[gameId];
      const gameCard = document.createElement('div');
      gameCard.className = 'minigame-card';
      gameCard.innerHTML = `
                <div class="minigame-image">
                    <img src="${game.image}" alt="${game.name}">
                </div>
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <p class="energy-cost">Energy Cost: ${game.energyCost}</p>
                <button class="btn-primary play-game-btn" data-game="${gameId}">Play</button>
            `;
      minigamesContainer.appendChild(gameCard);
    }

    // Play game buttons
    const playGameButtons = document.querySelectorAll('.play-game-btn');
    playGameButtons.forEach(button => {
      button.addEventListener('click', function() {
        playSound('click');
        const gameId = this.getAttribute('data-game');
        playMinigame(gameId);
      });
    });
  }

  /**
   * Initialize gauntlets
   * Populates the gauntlets tab with available gauntlets
   */
  function initGauntlets() {
    gauntletsContainer.innerHTML = '';

    for (const gauntletId in gauntlets) {
      const gauntlet = gauntlets[gauntletId];
      const isEquipped = userData.equippedGauntlet === gauntletId;
      const isUnlocked = gauntlet.unlocked || checkGauntletRequirements(gauntletId);

      const gauntletCard = document.createElement('div');
      gauntletCard.className = `gauntlet-card ${isEquipped ? 'equipped' : ''} ${!isUnlocked ? 'locked' : ''}`;
      gauntletCard.innerHTML = `
                <div class="gauntlet-image">
                    <img src="${gauntlet.image}" alt="${gauntlet.name}">
                    <div class="gauntlet-status ${isUnlocked ? (isEquipped ? 'equipped' : 'unlocked') : 'locked'}">
                        ${isEquipped ? 'Equipped' : (isUnlocked ? 'Unlocked' : 'Locked')}
                    </div>
                </div>
                <div class="gauntlet-info">
                    <h3>${gauntlet.name}</h3>
                    <p>${gauntlet.description}</p>
                </div>
            `;
      gauntletCard.addEventListener('click', function() {
        playSound('click');
        showGauntletDetails(gauntletId);
      });
      gauntletsContainer.appendChild(gauntletCard);
    }

    // Update equipped gauntlet display
    updateEquippedGauntlet();
  }

  /**
   * Initialize settings
   * Sets up the settings tab with current user settings
   */
  function initSettings() {
    // Set initial values
    soundToggle.checked = userData.settings.soundEnabled;
    musicToggle.checked = userData.settings.musicEnabled;
    usernameInput.value = userData.username;

    // Sound toggle
    soundToggle.addEventListener('change', function() {
      userData.settings.soundEnabled = this.checked;
      if (this.checked) {
        playSound('click');
      }
    });

    // Music toggle
    musicToggle.addEventListener('change', function() {
      userData.settings.musicEnabled = this.checked;
      toggleMusic(this.checked);
    });

    // Save settings button
    saveSettingsBtn.addEventListener('click', function() {
      playSound('click');
      const newUsername = usernameInput.value.trim();
      const newPassword = passwordInput.value.trim();

      if (newUsername) {
        userData.username = newUsername;
        usernameDisplay.textContent = newUsername;
        document.getElementById('profile-username').textContent = newUsername;
      }

      if (newPassword) {
        // Would normally hash and store the password
        passwordInput.value = '';
      }

      userData.settings.soundEnabled = soundToggle.checked;
      userData.settings.musicEnabled = musicToggle.checked;

      settingsMessage.textContent = 'Settings saved successfully!';
      settingsMessage.className = 'settings-message success';

      setTimeout(() => {
        settingsMessage.textContent = '';
      }, 3000);

      playSound('success');
    });
  }

  /**
   * Check daily claim cooldown
   * Checks if the user can claim their daily reward
   */
  function checkDailyClaim() {
    const now = new Date();

    if (!userData.lastDailyClaim) {
      // First time, enable spin
      spinBtn.disabled = false;
      cooldownTimer.textContent = 'Spin the wheel to claim your daily reward!';
      return;
    }

    const lastClaim = new Date(userData.lastDailyClaim);
    const cooldownHours = 24; // 24 hour cooldown

    // Apply gauntlet cooldown reduction if applicable
    let cooldownReduction = 0;
    const equippedGauntlet = gauntlets[userData.equippedGauntlet];

    if (equippedGauntlet) {
      equippedGauntlet.benefits.forEach(benefit => {
        if (benefit.includes('Daily claim cooldown reduced by')) {
          cooldownReduction = parseInt(benefit.match(/\d+/)[0]);
        }
      });
    }

    const cooldownMillis = (cooldownHours - cooldownReduction) * 60 * 60 * 1000;
    const nextClaimTime = new Date(lastClaim.getTime() + cooldownMillis);

    if (now >= nextClaimTime) {
      // Cooldown expired, enable spin
      spinBtn.disabled = false;
      cooldownTimer.textContent = 'Spin the wheel to claim your daily reward!';
    } else {
      // Still on cooldown
      spinBtn.disabled = true;

      // Calculate time remaining
      const timeRemaining = nextClaimTime - now;
      const hoursRemaining = Math.floor(timeRemaining / (60 * 60 * 1000));
      const minutesRemaining = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));

      cooldownTimer.textContent = `Next spin available in ${hoursRemaining}h ${minutesRemaining}m`;

      // Update timer every minute
      setTimeout(checkDailyClaim, 60000);
    }
  }

  /**
   * Spin the wheel
   * Spins the daily claim wheel for rewards
   */
  function spinWheel() {
    if (spinBtn.disabled) return;

    playSound('click');

    // Disable spin button
    spinBtn.disabled = true;

    // Random rotation (5 to 10 full rotations + random segment)
    const fullRotations = 5 + Math.floor(Math.random() * 5);
    const segmentAngle = 45; // 8 segments, each 45 degrees
    const randomSegment = Math.floor(Math.random() * 8);
    const finalRotation = fullRotations * 360 + randomSegment * segmentAngle;

    // Apply rotation
    wheel.style.transform = `rotate(${finalRotation}deg)`;

    // Wait for animation to finish
    setTimeout(() => {
      // Determine reward based on final segment
      const rewards = [
        { type: 'tokens', amount: 100 },
        { type: 'energy', amount: 5 },
        { type: 'tokens', amount: 200 },
        { type: 'energy', amount: 10 },
        { type: 'tokens', amount: 500 },
        { type: 'energy', amount: 15 },
        { type: 'tokens', amount: 300 },
        { type: 'tokens', amount: 1000 }
      ];

      // The wheel rotates clockwise, so we need to adjust the segment index
      const segmentIndex = (8 - (randomSegment % 8)) % 8;
      const reward = rewards[segmentIndex];

      // Apply reward
      if (reward.type === 'tokens') {
        userData.tokens += reward.amount;
        userData.stats.tokensEarned += reward.amount;
        showMessage('Daily Reward', `You won ${reward.amount} tokens!`);
      } else if (reward.type === 'energy') {
        userData.energy = Math.min(userData.energy + reward.amount, userData.maxEnergy);
        showMessage('Daily Reward', `You won ${reward.amount} energy!`);
      }

      // Update last claim time
      userData.lastDailyClaim = new Date().toISOString();

      // Update UI
      updateUI();

      // Reset wheel after a delay
      setTimeout(() => {
        wheel.style.transition = 'none';
        wheel.style.transform = 'rotate(0deg)';
        setTimeout(() => {
          wheel.style.transition = 'transform 3s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
        }, 50);

        // Check cooldown
        checkDailyClaim();
      }, 1000);

      playSound('success');
    }, 3000);
  }

  /**
   * Buy pack
   * Purchases a pack and opens it
   * @param {string} packId - The ID of the pack to buy
   */
  function buyPack(packId) {
    const pack = packs[packId];

    // Apply gauntlet discount if applicable
    let discountPercent = 0;
    const equippedGauntlet = gauntlets[userData.equippedGauntlet];

    if (equippedGauntlet) {
      equippedGauntlet.benefits.forEach(benefit => {
        if (benefit.includes('discount on packs')) {
          discountPercent = parseInt(benefit.match(/\d+/)[0]);
        }
      });
    }

    const discountedPrice = Math.floor(pack.price * (1 - discountPercent / 100));

    if (userData.tokens < discountedPrice) {
      playSound('fail');
      showMessage('Not enough tokens!', 'You need ' + discountedPrice + ' tokens to buy this pack.');
      return;
    }

    userData.tokens -= discountedPrice;
    userData.stats.packsOpened++;
    updateUI();

    playSound('purchase');

    // Show pack opening animation
    packModal.style.display = 'block';
    const packOpening = document.getElementById('pack-opening');
    const packResult = document.getElementById('pack-result');

    packOpening.style.display = 'block';
    packResult.style.display = 'none';

    document.getElementById('pack-image').innerHTML = `<img src="${pack.image}" alt="${pack.name}" style="max-width: 200px; max-height: 200px;">`;

    // Simulate opening animation
    setTimeout(() => {
      const cook = getRandomCook(packId);

      // Apply rarity upgrade if applicable
      let rarityUpgradeChance = 0;

      if (equippedGauntlet) {
        equippedGauntlet.benefits.forEach(benefit => {
          if (benefit.includes('chance to get a rarity upgrade')) {
            rarityUpgradeChance = parseInt(benefit.match(/\d+/)[0]);
          }
        });
      }

      if (Math.random() * 100 < rarityUpgradeChance) {
        upgradeRarity(cook);
      }

      // Add cook to collection
      userData.cooks.push(cook);

      // Show result
      packOpening.style.display = 'none';
      packResult.style.display = 'block';
      packResult.innerHTML = `
                <div class="cook-image">
                    <img src="${cook.image}" alt="${cook.name}" class="reveal-${cook.rarity}">
                </div>
                <h3>${cook.name}</h3>
                <div class="cook-rarity rarity-${cook.rarity}">${cook.rarity}</div>
                <button class="btn-primary continue-btn">Continue</button>
            `;

      document.querySelector('.continue-btn').addEventListener('click', function() {
        playSound('click');
        packModal.style.display = 'none';
        initCooks();
        initGauntlets();
      });

      playSound('reveal');
    }, 2000);
  }

  /**
   * Get random cook from pack
   * Selects a random cook from a pack based on rarity chances
   * @param {string} packId - The ID of the pack
   * @returns {Object} The selected cook
   */
  function getRandomCook(packId) {
    const pack = packs[packId];
    const cooks = pack.cooks;

    // Calculate total chance
    let totalChance = 0;
    cooks.forEach(cook => {
      totalChance += cook.chance;
    });

    // Get random number
    const random = Math.random() * totalChance;

    // Find cook
    let currentChance = 0;
    for (let i = 0; i < cooks.length; i++) {
      currentChance += cooks[i].chance;
      if (random < currentChance) {
        return { ...cooks[i] };
      }
    }

    // Fallback
    return { ...cooks[0] };
  }

  /**
   * Upgrade rarity
   * Upgrades a cook's rarity to the next level
   * @param {Object} cook - The cook to upgrade
   */
  function upgradeRarity(cook) {
    const rarityOrder = ['common', 'uncommon', 'rare', 'epic', '5-star', 'exotic', 'michelin', 'secret'];
    const currentIndex = rarityOrder.indexOf(cook.rarity);

    if (currentIndex < rarityOrder.length - 1) {
      cook.rarity = rarityOrder[currentIndex + 1];
    }
  }

  /**
   * Show cook details
   * Displays details about a cook in a modal
   * @param {Object} cook - The cook to display
   */
  function showCookDetails(cook) {
    cookModal.style.display = 'block';

    const cookDetails = document.getElementById('cook-details');
    cookDetails.innerHTML = `
            <div class="cook-image-large">
                <img src="${cook.image}" alt="${cook.name}">
            </div>
            <h2>${cook.name}</h2>
            <div class="cook-rarity rarity-${cook.rarity}">${cook.rarity}</div>
            <div class="cook-actions">
                <button class="btn-secondary quick-sell-btn" data-cook="${cook.name}">Quick Sell (${tokenValues[cook.rarity]} Tokens)</button>
            </div>
        `;

    // Quick sell button
    document.querySelector('.quick-sell-btn').addEventListener('click', function() {
      playSound('click');
      const cookName = this.getAttribute('data-cook');
      quickSellCook(cookName);
      cookModal.style.display = 'none';
    });
  }

  /**
   * Quick sell cook
   * Sells a cook for tokens
   * @param {string} cookName - The name of the cook to sell
   */
  function quickSellCook(cookName) {
    const cookIndex = userData.cooks.findIndex(cook => cook.name === cookName);

    if (cookIndex === -1) return;

    const cook = userData.cooks[cookIndex];
    const tokenValue = tokenValues[cook.rarity];

    userData.tokens += tokenValue;
    userData.stats.tokensEarned += tokenValue;
    userData.stats.cooksSold++;
    userData.cooks.splice(cookIndex, 1);

    updateUI();
    initCooks();
    initGauntlets();

    playSound('purchase');
    showMessage('Cook Sold', `You sold ${cookName} for ${tokenValue} tokens.`);
  }

  /**
   * Play minigame
   * Starts a minigame
   * @param {string} gameId - The ID of the minigame to play
   */
  function playMinigame(gameId) {
    const game = minigames[gameId];

    if (userData.energy < game.energyCost) {
      playSound('fail');
      showMessage('Not enough energy!', 'You need ' + game.energyCost + ' energy to play this minigame.');
      return;
    }

    userData.energy -= game.energyCost;
    userData.stats.minigamesPlayed++;
    updateUI();

    // Show game modal
    gameModal.style.display = 'block';

    // Initialize canvas
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 500;

    // Game variables
    let gameActive = true;
    let score = 0;
    let gameTimer = 60; // 60 seconds

    // Game loop
    function gameLoop() {
      if (!gameActive) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw game elements based on which game is being played
      if (gameId === 'cookingRush') {
        drawCookingRush();
      } else if (gameId === 'ingredientCatch') {
        drawIngredientCatch();
      } else if (gameId === 'recipeMemory') {
        drawRecipeMemory();
      }

      // Draw UI
      drawGameUI();

      // Request next frame
      requestAnimationFrame(gameLoop);
    }

    // Cooking Rush game
    let orders = [];
    let ingredients = [];
    let playerX = canvas.width / 2;

    function initCookingRush() {
      orders = [];
      ingredients = [
        { name: 'Tomato', color: '#e74c3c', x: 100, y: 400 },
        { name: 'Lettuce', color: '#2ecc71', x: 200, y: 400 },
        { name: 'Cheese', color: '#f1c40f', x: 300, y: 400 },
        { name: 'Meat', color: '#795548', x: 400, y: 400 },
        { name: 'Bread', color: '#e67e22', x: 500, y: 400 }
      ];

      // Generate initial orders
      generateOrder();

      // Add event listeners
      canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        playerX = e.clientX - rect.left;
      });

      canvas.addEventListener('click', function(e) {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        // Check if clicked on an ingredient
        ingredients.forEach(ingredient => {
          const distance = Math.sqrt(Math.pow(clickX - ingredient.x, 2) + Math.pow(clickY - ingredient.y, 2));
          if (distance < 30) {
            // Add ingredient to current order
            if (orders.length > 0 && orders[0].ingredients.includes(ingredient.name)) {
              orders[0].completed.push(ingredient.name);
              playSound('click');

              // Check if order is complete
              if (orders[0].completed.length === orders[0].ingredients.length) {
                score += 100;
                orders.shift();
                generateOrder();
                playSound('success');
              }
            } else {
              // Wrong ingredient
              score -= 20;
              playSound('fail');
            }
          }
        });
      });
    }

    function generateOrder() {
      const orderTypes = [
        { name: 'Burger', ingredients: ['Bread', 'Meat', 'Cheese', 'Lettuce', 'Tomato'] },
        { name: 'Salad', ingredients: ['Lettuce', 'Tomato', 'Cheese'] },
        { name: 'Sandwich', ingredients: ['Bread', 'Cheese', 'Lettuce'] }
      ];

      const randomOrder = orderTypes[Math.floor(Math.random() * orderTypes.length)];
      orders.push({
        name: randomOrder.name,
        ingredients: [...randomOrder.ingredients],
        completed: [],
        timeLeft: 20 // 20 seconds per order
      });
    }

    function drawCookingRush() {
      // Draw player (chef)
      ctx.fillStyle = '#3498db';
      ctx.beginPath();
      ctx.arc(playerX, 350, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'white';
      ctx.font = '12px Arial';
      ctx.fillText('Chef', playerX - 15, 355);

      // Draw ingredients
      ingredients.forEach(ingredient => {
        ctx.fillStyle = ingredient.color;
        ctx.beginPath();
        ctx.arc(ingredient.x, ingredient.y, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.fillText(ingredient.name, ingredient.x - 25, ingredient.y + 5);
      });

      // Draw orders
      if (orders.length > 0) {
        const order = orders[0];
        ctx.fillStyle = '#333';
        ctx.font = '20px Arial';
        ctx.fillText(`Order: ${order.name}`, 50, 50);

        // Draw ingredients needed
        ctx.font = '16px Arial';
        ctx.fillText('Ingredients:', 50, 80);

        order.ingredients.forEach((ingredient, index) => {
          const completed = order.completed.includes(ingredient);
          ctx.fillStyle = completed ? '#2ecc71' : '#333';
          ctx.fillText(ingredient, 50, 110 + index * 30);
        });

        // Update order timer
        order.timeLeft -= 1/60; // Assuming 60 FPS

        // Draw timer
        ctx.fillStyle = order.timeLeft < 5 ? '#e74c3c' : '#333';
        ctx.fillText(`Time: ${Math.ceil(order.timeLeft)}s`, 50, 250);

        // Check if order expired
        if (order.timeLeft <= 0) {
          score -= 50;
          orders.shift();
          generateOrder();
          playSound('fail');
        }
      }
    }

    // Ingredient Catch game
    let player = { x: canvas.width / 2, width: 100, height: 20 };
    let fallingItems = [];

    function initIngredientCatch() {
      player = { x: canvas.width / 2, width: 100, height: 20 };
      fallingItems = [];

      // Add event listeners
      canvas.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        player.x = e.clientX - rect.left - player.width / 2;

        // Keep player within bounds
        if (player.x < 0) player.x = 0;
        if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
      });

      // Start spawning items
      spawnItem();
    }

    function spawnItem() {
      if (!gameActive) return;

      const goodItems = [
        { name: 'Tomato', color: '#e74c3c', points: 10 },
        { name: 'Lettuce', color: '#2ecc71', points: 10 },
        { name: 'Cheese', color: '#f1c40f', points: 20 },
        { name: 'Meat', color: '#795548', points: 30 }
      ];

      const badItems = [
        { name: 'Rotten', color: '#8e44ad', points: -20 },
        { name: 'Trash', color: '#7f8c8d', points: -30 }
      ];

      // 80% chance for good item, 20% for bad
      const itemPool = Math.random() < 0.8 ? goodItems : badItems;
      const item = itemPool[Math.floor(Math.random() * itemPool.length)];

      fallingItems.push({
        x: Math.random() * (canvas.width - 30),
        y: -30,
        width: 30,
        height: 30,
        speed: 2 + Math.random() * 3,
        ...item
      });

      // Schedule next spawn
      setTimeout(spawnItem, 1000);
    }

    function drawIngredientCatch() {
      // Draw player (basket)
      ctx.fillStyle = '#3498db';
      ctx.fillRect(player.x, canvas.height - 50, player.width, player.height);

      // Draw falling items
      fallingItems.forEach((item, index) => {
        // Move item
        item.y += item.speed;

        // Draw item
        ctx.fillStyle = item.color;
        ctx.fillRect(item.x, item.y, item.width, item.height);
        ctx.fillStyle = 'white';
        ctx.font = '10px Arial';
        ctx.fillText(item.name, item.x, item.y + 20);

        // Check collision with player
        if (item.y + item.height > canvas.height - 50 &&
          item.y < canvas.height - 50 + player.height &&
          item.x + item.width > player.x &&
          item.x < player.x + player.width) {
          // Collision detected
          score += item.points;
          fallingItems.splice(index, 1);

          if (item.points > 0) {
            playSound('success');
          } else {
            playSound('fail');
          }
        }

        // Remove if out of bounds
        if (item.y > canvas.height) {
          if (item.points > 0) {
            // Missed a good item
            score -= 5;
          }
          fallingItems.splice(index, 1);
        }
      });
    }

    // Recipe Memory game
    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let canFlip = true;

    function initRecipeMemory() {
      cards = [];
      flippedCards = [];
      matchedPairs = 0;
      canFlip = true;

      // Create cards
      const cardTypes = [
        { name: 'Tomato', color: '#e74c3c' },
        { name: 'Lettuce', color: '#2ecc71' },
        { name: 'Cheese', color: '#f1c40f' },
        { name: 'Meat', color: '#795548' },
        { name: 'Bread', color: '#e67e22' },
        { name: 'Egg', color: '#f39c12' },
        { name: 'Milk', color: '#ecf0f1' },
        { name: 'Potato', color: '#d35400' }
      ];

      // Create pairs
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 2; j++) {
          cards.push({
            type: cardTypes[i],
            flipped: false,
            matched: false,
            x: 0,
            y: 0,
            width: 80,
            height: 100
          });
        }
      }

      // Shuffle cards
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }

      // Position cards in a grid
      const cols = 4;
      const rows = 4;
      const cardWidth = 80;
      const cardHeight = 100;
      const startX = (canvas.width - cols * cardWidth) / 2;
      const startY = (canvas.height - rows * cardHeight) / 2;

      for (let i = 0; i < cards.length; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        cards[i].x = startX + col * cardWidth;
        cards[i].y = startY + row * cardHeight;
      }

      // Add click event
      canvas.addEventListener('click', function(e) {
        if (!canFlip) return;

        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        // Check if clicked on a card
        cards.forEach(card => {
          if (!card.flipped && !card.matched &&
            clickX > card.x && clickX < card.x + card.width &&
            clickY > card.y && clickY < card.y + card.height) {

            // Flip card
            card.flipped = true;
            flippedCards.push(card);
            playSound('click');

            // Check for match
            if (flippedCards.length === 2) {
              canFlip = false;

              if (flippedCards[0].type.name === flippedCards[1].type.name) {
                // Match found
                flippedCards[0].matched = true;
                flippedCards[1].matched = true;
                matchedPairs++;
                score += 50;

                // Check if game completed
                if (matchedPairs === 8) {
                  score += 100; // Bonus for completing
                }

                flippedCards = [];
                canFlip = true;
                playSound('success');
              } else {
                // No match
                setTimeout(() => {
                  flippedCards[0].flipped = false;
                  flippedCards[1].flipped = false;
                  flippedCards = [];
                  canFlip = true;
                  playSound('fail');
                }, 1000);
              }
            }
          }
        });
      });
    }

    function drawRecipeMemory() {
      // Draw cards
      cards.forEach(card => {
        if (card.matched) {
          // Matched card (invisible)
          ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
          ctx.fillRect(card.x, card.y, card.width, card.height);
        } else if (card.flipped) {
          // Flipped card (showing ingredient)
          ctx.fillStyle = card.type.color;
          ctx.fillRect(card.x, card.y, card.width, card.height);
          ctx.fillStyle = 'white';
          ctx.font = '14px Arial';
          ctx.fillText(card.type.name, card.x + 10, card.y + 50);
        } else {
          // Face down card
          ctx.fillStyle = '#3498db';
          ctx.fillRect(card.x, card.y, card.width, card.height);
          ctx.fillStyle = 'white';
          ctx.font = '20px Arial';
          ctx.fillText('?', card.x + 35, card.y + 55);
        }

        // Card border
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.strokeRect(card.x, card.y, card.width, card.height);
      });

      // Draw matched pairs
      ctx.fillStyle = '#333';
      ctx.font = '20px Arial';
      ctx.fillText(`Pairs: ${matchedPairs}/8`, 50, 50);
    }

    // Draw game UI
    function drawGameUI() {
      // Draw score
      ctx.fillStyle = '#333';
      ctx.font = '24px Arial';
      ctx.fillText(`Score: ${score}`, canvas.width - 150, 30);

      // Draw timer
      gameTimer -= 1/60; // Assuming 60 FPS
      ctx.fillStyle = gameTimer < 10 ? '#e74c3c' : '#333';
      ctx.fillText(`Time: ${Math.ceil(gameTimer)}s`, canvas.width - 150, 60);

      // Check if game over
      if (gameTimer <= 0) {
        gameActive = false;
        endGame();
      }
    }

    // End game
    function endGame() {
      // Calculate rewards
      let tokens = Math.floor(score / 10);

      // Apply gauntlet bonus if applicable
      let tokenBonus = 0;
      const equippedGauntlet = gauntlets[userData.equippedGauntlet];

      if (equippedGauntlet) {
        equippedGauntlet.benefits.forEach(benefit => {
          if (benefit.includes('more tokens from minigames')) {
            tokenBonus = parseInt(benefit.match(/\d+/)[0]);
          }
        });
      }

      tokens = Math.floor(tokens * (1 + tokenBonus / 100));

      // Update user data
      userData.tokens += tokens;
      userData.stats.tokensEarned += tokens;

      // Check for energy bonus
      let energyBonusChance = 0;

      if (equippedGauntlet) {
        equippedGauntlet.benefits.forEach(benefit => {
          if (benefit.includes('chance for extra energy')) {
            energyBonusChance = parseInt(benefit.match(/\d+/)[0]);
          }
        });
      }

      let energyBonus = 0;
      if (Math.random() * 100 < energyBonusChance) {
        energyBonus = Math.floor(Math.random() * 3) + 1;
        userData.energy = Math.min(userData.energy + energyBonus, userData.maxEnergy);
      }

      updateUI();

      // Show results
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#333';
      ctx.font = '36px Arial';
      ctx.fillText('Game Over!', canvas.width / 2 - 100, 150);

      ctx.font = '24px Arial';
      ctx.fillText(`Final Score: ${score}`, canvas.width / 2 - 80, 200);
      ctx.fillText(`Tokens Earned: ${tokens}`, canvas.width / 2 - 100, 240);

      if (energyBonus > 0) {
        ctx.fillText(`Energy Bonus: +${energyBonus}`, canvas.width / 2 - 90, 280);
      }

      // Add continue button
      const gameUI = document.getElementById('game-ui');
      gameUI.innerHTML = '<button class="btn-primary" id="continue-game-btn">Continue</button>';

      document.getElementById('continue-game-btn').addEventListener('click', function() {
        playSound('click');
        gameModal.style.display = 'none';
        gameUI.innerHTML = '';
      });

      playSound('success');
    }

    // Initialize the appropriate game
    if (gameId === 'cookingRush') {
      initCookingRush();
    } else if (gameId === 'ingredientCatch') {
      initIngredientCatch();
    } else if (gameId === 'recipeMemory') {
      initRecipeMemory();
    }

    // Start game loop
    gameLoop();
  }

  /**
   * Show gauntlet details
   * Displays details about a gauntlet in a modal
   * @param {string} gauntletId - The ID of the gauntlet to display
   */
  function showGauntletDetails(gauntletId) {
    const gauntlet = gauntlets[gauntletId];
    const isEquipped = userData.equippedGauntlet === gauntletId;
    const isUnlocked = gauntlet.unlocked || checkGauntletRequirements(gauntletId);

    gauntletModal.style.display = 'block';

    const gauntletDetails = document.getElementById('gauntlet-details');
    gauntletDetails.innerHTML = `
            <h2>${gauntlet.name}</h2>
            <div class="gauntlet-image">
                <img src="${gauntlet.image}" alt="${gauntlet.name}">
            </div>
            <div class="gauntlet-description">${gauntlet.description}</div>

            <div class="gauntlet-benefits">
                <h3>Benefits:</h3>
                <ul>
                    ${gauntlet.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>

            <div class="gauntlet-requirements">
                <h3>Requirements:</h3>
                <ul>
                    ${gauntlet.requirements.length > 0 ?
      gauntlet.requirements.map(req => {
        const met = checkRequirement(req);
        return `<li style="color: ${met ? '#2ecc71' : '#e74c3c'}">${req} ${met ? '✓' : '✗'}</li>`;
      }).join('') :
      '<li style="color: #2ecc71">No requirements ✓</li>'}
                </ul>
            </div>

            <div class="gauntlet-actions">
                ${isUnlocked ?
      (isEquipped ?
        '<button class="btn-secondary" disabled>Currently Equipped</button>' :
        `<button class="btn-primary equip-gauntlet-btn" data-gauntlet="${gauntletId}">Equip Gauntlet</button>`) :
      `<button class="btn-secondary unlock-gauntlet-btn" data-gauntlet="${gauntletId}" ${userData.cooks.length >= gauntlet.cost ? '' : 'disabled'}>
                        Trade ${gauntlet.cost} Cooks to Unlock
                    </button>`}
                <button class="btn-secondary close-gauntlet-btn">Close</button>
            </div>
        `;

    // Equip gauntlet button
    const equipBtn = document.querySelector('.equip-gauntlet-btn');
    if (equipBtn) {
      equipBtn.addEventListener('click', function() {
        playSound('click');
        const gauntletId = this.getAttribute('data-gauntlet');
        equipGauntlet(gauntletId);
        gauntletModal.style.display = 'none';
      });
    }

    // Unlock gauntlet button
    const unlockBtn = document.querySelector('.unlock-gauntlet-btn');
    if (unlockBtn) {
      unlockBtn.addEventListener('click', function() {
        playSound('click');
        const gauntletId = this.getAttribute('data-gauntlet');
        unlockGauntlet(gauntletId);
        gauntletModal.style.display = 'none';
      });
    }

    // Close button
    document.querySelector('.close-gauntlet-btn').addEventListener('click', function() {
      playSound('click');
      gauntletModal.style.display = 'none';
    });
  }

  /**
   * Check gauntlet requirements
   * Checks if the user meets the requirements for a gauntlet
   * @param {string} gauntletId - The ID of the gauntlet to check
   * @returns {boolean} Whether the requirements are met
   */
  function checkGauntletRequirements(gauntletId) {
    const gauntlet = gauntlets[gauntletId];

    if (gauntlet.requirements.length === 0) return true;

    return gauntlet.requirements.every(req => checkRequirement(req));
  }

  /**
   * Check individual requirement
   * Checks if the user meets a specific requirement
   * @param {string} requirement - The requirement to check
   * @returns {boolean} Whether the requirement is met
   */
  function checkRequirement(requirement) {
    // Parse requirement
    const match = requirement.match(/(\d+) (.*?) Cooks/);
    if (!match) return false;

    const count = parseInt(match[1]);
    const rarity = match[2].toLowerCase();

    // Count cooks of that rarity
    const cookCount = userData.cooks.filter(cook => cook.rarity.toLowerCase() === rarity).length;

    return cookCount >= count;
  }

  /**
   * Equip gauntlet
   * Equips a gauntlet for the user
   * @param {string} gauntletId - The ID of the gauntlet to equip
   */
  function equipGauntlet(gauntletId) {
    userData.equippedGauntlet = gauntletId;
    updateEquippedGauntlet();
    initGauntlets();
    playSound('success');
  }

  /**
   * Unlock gauntlet
   * Unlocks a gauntlet by trading cooks
   * @param {string} gauntletId - The ID of the gauntlet to unlock
   */
  function unlockGauntlet(gauntletId) {
    const gauntlet = gauntlets[gauntletId];

    // Check if user has enough cooks
    if (userData.cooks.length < gauntlet.cost) {
      playSound('fail');
      showMessage('Not enough cooks!', `You need ${gauntlet.cost} cooks to unlock this gauntlet.`);
      return;
    }

    // Sort cooks by rarity (lowest first)
    const rarityOrder = ['common', 'uncommon', 'rare', 'epic', '5-star', 'exotic', 'michelin', 'secret'];
    const sortedCooks = [...userData.cooks].sort((a, b) => {
      return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
    });

    // Remove the required number of cooks
    const cooksToRemove = sortedCooks.slice(0, gauntlet.cost);

    cooksToRemove.forEach(cook => {
      const index = userData.cooks.findIndex(c => c.name === cook.name);
      if (index !== -1) {
        userData.cooks.splice(index, 1);
      }
    });

    // Unlock the gauntlet
    gauntlet.unlocked = true;

    // Update UI
    initCooks();
    initGauntlets();

    playSound('success');
    showMessage('Gauntlet Unlocked!', `You have unlocked the ${gauntlet.name}!`);
  }

  /**
   * Update equipped gauntlet display
   * Updates the display of the currently equipped gauntlet
   */
  function updateEquippedGauntlet() {
    if (!equippedGauntletDisplay) return;

    const gauntlet = gauntlets[userData.equippedGauntlet];

    equippedGauntletDisplay.innerHTML = `
            <img src="${gauntlet.image}" alt="${gauntlet.name}">
            <div class="gauntlet-info">
                <h4>${gauntlet.name}</h4>
                <p>${gauntlet.description}</p>
            </div>
        `;
  }

  /**
   * Show message
   * Displays a message in a modal
   * @param {string} title - The title of the message
   * @param {string} message - The message content
   */
  function showMessage(title, message) {
    messageModal.style.display = 'block';

    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = `
            <h3>${title}</h3>
            <p>${message}</p>
            <button class="btn-primary close-message-btn">OK</button>
        `;

    document.querySelector('.close-message-btn').addEventListener('click', function() {
      playSound('click');
      messageModal.style.display = 'none';
    });
  }

  // Initialize the game
  init();
});

