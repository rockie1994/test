// script.js

// Get references to the dropdown and content container
const destinationSelect = document.getElementById('destination-select');
const destinationContent = document.getElementById('destination-content');

// Define content for each destination
const destinations = {
    default: `<p>Please select a destination from the dropdown above.</p>`,
    paris: `
        <h2>Paris</h2>
        <p>Paris is the capital of France, known for its art, fashion, and culture.</p>
        <h3>Places to Visit:</h3>
        <ul>
            <li>Eiffel Tower</li>
            <li>Louvre Museum</li>
            <li>Notre-Dame Cathedral</li>
        </ul>
        <button id="back-button">Back to Home</button>
    `,
    tokyo: `
        <h2>Tokyo</h2>
        <p>Tokyo is the bustling capital of Japan, blending modernity with tradition.</p>
        <h3>Places to Visit:</h3>
        <ul>
            <li>Shibuya Crossing</li>
            <li>Tokyo Skytree</li>
            <li>Senso-ji Temple</li>
        </ul>
        <button id="back-button">Back to Home</button>
    `,
    'new-york': `
        <h2>New York</h2>
        <p>New York City is the largest city in the USA, famous for its skyline and diversity.</p>
        <h3>Places to Visit:</h3>
        <ul>
            <li>Statue of Liberty</li>
            <li>Central Park</li>
            <li>Times Square</li>
        </ul>
        <button id="back-button">Back to Home</button>
    `
};

// Add an event listener to the dropdown
destinationSelect.addEventListener('change', () => {
    const selectedDestination = destinationSelect.value;

    // Only update content if the selected option is not "default"
    if (selectedDestination !== 'default') {
        destinationContent.innerHTML = destinations[selectedDestination];

        // Add event listener to the back button (if it exists)
        const backButton = document.getElementById('back-button');
        if (backButton) {
            backButton.addEventListener('click', () => {
                // Reset the dropdown and content
                destinationSelect.value = 'default';
                destinationContent.innerHTML = destinations.default;
            });
        }
    }
});