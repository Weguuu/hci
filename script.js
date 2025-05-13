document.getElementById('home').addEventListener('click', function() {
    alert('Welcome to Retro-bit!');
});

document.getElementById('games').addEventListener('click', function() {
    alert('Choose a game to play!');
});

document.getElementById('about').addEventListener('click', function() {
    alert('Retro-bit: Relive the classic arcade experience!');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const hours = new Date().getHours();
const greeting = hours < 12 ? 'Good Morning!' : hours < 18 ? 'Good Afternoon!' : 'Good Evening!';
alert(greeting + ' Welcome to Retro-bit!');

// Background image paths and corresponding color schemes
const backgrounds = {
    background1: {
        image: 'background1.gif', // Path to background1.gif
        textColor: '#ffffff', // Dark text for light background
        buttonColor: '#ffcc00', // Yellow for matching theme
        cardColor: '#000000', // White for card background
        cardTextColor: '#000000' // Black for card text
    },
    background5: {
        image: 'background5.gif', // Path to background5.gif
        textColor: '#FFF8DC', // Light text for darker background
        buttonColor: '#ff6600', // Orange for matching theme
        cardColor: '#333333', // Dark gray for card background
        cardTextColor: '#ffffff' // White for card text
    },
    background3: {
        image: 'background3.gif', // Path to background3.gif
        textColor: '#d3d3d3', // Light gray text for dark background
        buttonColor: '#003366', // Dark blue for matching theme
        cardColor: '#1a1a1a', // Very dark gray for card background
        cardTextColor: '#d3d3d3' // Light gray for card text
    }
};

// Function to update background and color scheme
function updateBackground(theme) {
    const body = document.getElementById('background');
    const textElements = document.querySelectorAll('h1, h2, h3, h4, p, a');
    const buttons = document.querySelectorAll('.cta-button, .background-buttons button');
    const cards = document.querySelectorAll('.game-card');

    // Update background image
    body.style.background = `url('${backgrounds[theme].image}') no-repeat center center fixed`;
    body.style.backgroundSize = 'cover';

    // Update text color
    textElements.forEach(el => {
        el.style.color = backgrounds[theme].textColor;
    });

    // Update button colors
    buttons.forEach(button => {
        button.style.backgroundColor = backgrounds[theme].buttonColor;
        button.style.color = backgrounds[theme].textColor;
    });

    // Update card colors
    cards.forEach(card => {
        card.style.backgroundColor = backgrounds[theme].cardColor;
        card.style.color = backgrounds[theme].cardTextColor;
    });
}

// Example: Dynamically set background1 on page load
updateBackground('background1');

// Add event listeners for buttons
document.getElementById('morning-btn').addEventListener('click', () => updateBackground('background1'));
document.getElementById('afternoon-btn').addEventListener('click', () => updateBackground('background5'));
document.getElementById('evening-btn').addEventListener('click', () => updateBackground('background3'));
